/**
 * Parses a query string into key/val object. This does not decoded URIs.
 * @param {string} queryString The query string
 * @returns {object}
 */
export function parseQueryString(queryString) {
  const queryObject = {};
  if (typeof queryString !== "string") return queryObject;
  if (queryString[0] === "?") queryString = queryString.slice(1);
  queryString
    .split("&")
    .map(pair => pair.split("="))
    .forEach(([key, val]) => (queryObject[key] = val));
  return queryObject;
}

export function getFromQueryString(queryString, key, defaultValue = undefined) {
  const queryObject = parseQueryString(queryString);
  return queryObject[key] !== undefined ? queryObject[key] : defaultValue;
}
