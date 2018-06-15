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

const defaultNumAttempts = 1;

export function fetchJson(url, numAttempts = defaultNumAttempts) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Server responded with: ${res.status}`);
      else return res.json();
    })
    .catch(err => {
      if (numAttempts > 1) return fetchJson(url, numAttempts - 1);
      else throw err;
    });
}

export function fetchShowcase(numAttempts = defaultNumAttempts) {
  return fetchJson(showcaseEndpoint, numAttempts);
}

export function fetchWork(numAttempts = defaultNumAttempts) {
  return fetchJson(workEndpoint, numAttempts);
}

export function fetchProject(name, numAttempts = defaultNumAttempts) {
  return fetchJson(`${workEndpoint}/${name}`, numAttempts);
}

export function fetchResources(numAttempts = defaultNumAttempts) {
  return fetchJson(resourcesEndpoint, numAttempts);
}

export function fetchResource(name, numAttempts = defaultNumAttempts) {
  return fetchJson(`${resourcesEndpoint}/${name}`, numAttempts);
}

export function fetchTaxonomies(numAttempts = defaultNumAttempts) {
  return Promise.all([
    fetchJson(wpPartnersEndpoint, numAttempts),
    fetchJson(wpProjectTagsEndpoint, numAttempts)
  ]).then(([partnersJson, projectsJson]) => {
    const projectTags = projectsJson.reduce((obj, { id, count, name }) => {
      obj[name] = { id, count };
      return obj;
    }, {});
    const partnerTags = partnersJson.reduce((obj, { id, count, name }) => {
      obj[name] = { id, count };
      return obj;
    }, {});
    return { projectTags, partnerTags };
  });
}
