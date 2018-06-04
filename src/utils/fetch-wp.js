// https://github.com/airesvsg/acf-to-rest-api
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress

const baseUrl = process.env.API_URL;
const showcaseEndpoint = `${baseUrl}/cdl/v1/showcase`;
const workEndpoint = `${baseUrl}/cdl/v1/work`;
const resourcesEndpoint = `${baseUrl}/cdl/v1/resources`;

const wpProjectsEndpoint = `${baseUrl}/wp/v2/projects`;
const wpResourcesEndpoint = `${baseUrl}/wp/v2/resources`;
const wpPartnersEndpoint = `${baseUrl}/wp/v2/partners`;
const wpProjectTagsEndpoint = `${baseUrl}/wp/v2/tags`;

export function fetchJson(url) {
  return fetch(url).then(res => res.json());
}

export function fetchShowcase() {
  return fetchJson(showcaseEndpoint);
}

export function fetchWork() {
  return fetchJson(workEndpoint);
}

export function fetchResources() {
  return fetchJson(resourcesEndpoint);
}

export function fetchTaxonomies() {
  return Promise.all([fetchJson(wpPartnersEndpoint), fetchJson(wpProjectTagsEndpoint)]).then(
    ([partnersJson, projectsJson]) => {
      const projectTags = projectsJson.reduce((obj, { id, count, name }) => {
        obj[name] = { id, count };
        return obj;
      }, {});
      const partnerTags = partnersJson.reduce((obj, { id, count, name }) => {
        obj[name] = { id, count };
        return obj;
      }, {});
      return { projectTags, partnerTags };
    }
  );
}

export function fetchProjectBySlug(slug) {
  return fetchJson(`${wpProjectsEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}

export function fetchResourceBySlug(slug) {
  return fetchJson(`${wpResourcesEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}
