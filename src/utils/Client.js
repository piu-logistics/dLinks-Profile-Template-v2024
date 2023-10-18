import CryptoJS from "crypto-js";

class Client {
  constructor(url, apiKey, secretKey, options) {
    this.url = url;
    this.apiKey = apiKey;
    this.secretKey = secretKey;

    if (this.url.substr(-1) === "/") {
      this.url = this.url.substr(0, this.url.length - 1);
    }

    this.options = options || {};

    this.urlPath = "/api/v1/";
    this.isHttps = url.toLowerCase().indexOf("https") === 0;
  }

  request(method, action, data) {
    method = method || "GET";
    method = method.toUpperCase();

    let url = this._buildUrl(action);

    let headers = {};

    if (this.apiKey && this.secretKey) {
      let string = method + " /" + action;
      let authPart = btoa(
        this.apiKey + ":" + this._generateHmacSignature(string)
      );

      headers["X-Hmac-Authorization"] = authPart;
    } else if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    } else {
      throw new Error("Api-Key is not set.");
    }

    let postData;

    if (data) {
      if (method === "GET") {
        // Handle query parameters for GET requests if needed.
        // Modify the URL accordingly.
      } else {
        postData = JSON.stringify(data);

        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = postData.length;
      }
    }

    return fetch(url, {
      method: method,
      headers: headers,
      body: postData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`HTTP Error: ${res.status}`);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        throw error;
      });
  }

  _generateHmacSignature(string) {
    const hmacSignature = CryptoJS.HmacSHA256(string, this.secretKey);
    return hmacSignature;
  }

  _buildUrl(action) {
    return this.url + this.urlPath + action;
  }
}

export default Client;
