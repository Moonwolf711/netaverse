export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = 'https://www.google-analytics.com/g/collect' + url.search;
    return fetch(target, { method: 'POST' });
  }
};
