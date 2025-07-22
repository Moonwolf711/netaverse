export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = 'https://www.google-analytics.com/g/collect' + url.search;
    const { method, body } = request;
    return fetch(target, { method, body });
  }
};
