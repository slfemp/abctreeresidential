import http from './http-sp-common';

class HttpService {
  async postemail(payload, posturl) {
    this.response = await http.post(posturl, payload);
    // eslint-disable-next-line no-undef
    return response;
  }
}

export default new HttpService();
