import CryptoJS from "crypto-js";

function generateHmacSignature(method: any, path: any, secretKey: any) {
  const message = `${method} /${path}`;
  const hmacSignature = CryptoJS.HmacSHA256(message, secretKey);

  return hmacSignature;
}

export default generateHmacSignature;
