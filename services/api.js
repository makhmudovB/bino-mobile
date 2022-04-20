import axios from "axios";

class ApiService {
  static _host = "http://tpb.unicon.uz";
  static _apiBase = this._host + "/api";
  static _headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  static doRequest(token) {
    if (token) {
      this._headers = {
        ...this._headers,
        "Accept-Language": "ru",
        Authoration: `Bearer ${token}`,
      };
    }
    return axios.create({
      headers: {
        ...this._headers,
      },
    });
  }

  static async postEvent(url, data, token) {
    return (await this.doRequest(token)).post(this._apiBase + url, data);
  }

  static fetchPostEvent = async (url, token = null, body) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => {
      return res.json();
    });
  };

  static async axiosPatchEvent(url, token, body) {
    return (await this.doRequest(token)).patch(this._apiBase + url, body);
  }

  static patchEvent = async (url, token = null, body) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    const res = await fetch(this._apiBase + url, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    });
    return res.json();
  };

  static updateEvent = async (url, token = null, form) => {
    let headers = this._headers;
    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(this._apiBase + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(form),
    }).then((res) => {
      return res.json();
    });
  };
  static getResources = async (url, token = null) => {
    let headers = this._headers;

    if (token) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }

    const res = await fetch(this._apiBase + url, { headers });
    return await res.json();
  };
}

export default ApiService;
