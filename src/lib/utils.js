// lib/utils.js

export function isLocalUrl(url) {
    try {
      const { hostname } = new URL(url, "http://localhost");
      return !hostname || hostname === "localhost";
    } catch (err) {
      return false;
    }
  }
  