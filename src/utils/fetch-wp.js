// https://github.com/airesvsg/acf-to-rest-api
// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress

const baseUrl = process.env.API_URL;
const showcaseEndpoint = `${baseUrl}/cdl/v1/showcase`;
const pageEndpoint = `${baseUrl}/wp/v2/pages`;
const projectEndpoint = `${baseUrl}/wp/v2/projects`;
const acfProjectEndpoint = `${baseUrl}/acf/v3/projects`;
const partnersEndpoint = `${baseUrl}/wp/v2/partners`;
const projectTagsEndpoint = `${baseUrl}/wp/v2/tags`;
const workEndpoint = `${baseUrl}/cdl/v1/work`;
const resourcesEndpoint = `${baseUrl}/cdl/v1/resources`;
const wpResourcesEndpoint = `${baseUrl}/wp/v2/resources`;

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

export function fetchAcfProjects() {
  return fetchJson(acfProjectEndpoint + "?order=asc&orderby=menu_order");
}

export function fetchProjectAcfById(id) {
  return fetchJson(`${acfProjectEndpoint}/${id}`);
  return fetchJson(resourcesEndpoint);
}

export function fetchTaxonomies() {
  return Promise.all([fetchJson(partnersEndpoint), fetchJson(projectTagsEndpoint)]).then(
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
  return fetchJson(`${projectEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}

export function fetchResourceBySlug(slug) {
  return fetchJson(`${wpResourcesEndpoint}?slug=${slug}`).then(
    array => (array.length === 0 ? null : array[0])
  );
}
