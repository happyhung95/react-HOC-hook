import axios from "axios";
import $ from "jquery";

export default () => {
  const api = axios.create({
    baseURL: "https://restcountries.eu/rest/v2",
  });

  // intercept request to get data from cache
  // if doesn't exist in cache then fetch from server => update cache => return data from cache
  api.interceptors.request.use(async (request) => {
    // eslint-disable-next-line no-use-before-define
    const cacheData = await getData(request);
    request.adapter = () => {
      return Promise.resolve({
        // stop sending the request, return with cache data
        data: cacheData,
        status: request.status,
        statusText: request.statusText,
        headers: request.headers,
        config: request,
        request,
      });
    };
    return request;
  }, undefined);

  api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  const getData = async (request) => {
    let fullURL = request.baseURL + request.url;
    // eslint-disable-next-line no-prototype-builtins
    if (request.hasOwnProperty("params")) {
      fullURL += `?${$.param(request.params)}`;
    }

    // Check caches
    const cacheStorage = await caches.open(`${fullURL}`);
    let cachedResponse = await cacheStorage.match(`${fullURL}`);

    // If no match found in caches => send request => update response to cache
    if (!cachedResponse || !cachedResponse.ok) {
      await cacheStorage.add(fullURL).catch((error) => Promise.reject(error)); // get data from server and add to cache
      cachedResponse = await cacheStorage.match(`${fullURL}`);
    }
    return cachedResponse.json(); // return data from cache
  };

  return api;
};
