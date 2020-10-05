exports.buildRestUrl = function (restUrl, urlParams, queryParams) {
  let url = restUrl;
  let query = '';
  url = restUrl.replace(/{([^{}]*)}/g, (subString, index) => {
    var current = urlParams[index];
    return /string|number/.test(typeof current) ? current : subString;
  });
  if (Object.keys(queryParams).length) {
    url = `${url}?`;
    for (let key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        query = `${query}${key}=${(queryParams[key])}&`;
      }
    }
    query = query.slice(0, -1);
  }
  return `${url}${query}`;
};