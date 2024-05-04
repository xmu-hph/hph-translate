export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = "translate.google.com";
    return fetch(new Request(url, request));
  },
};
