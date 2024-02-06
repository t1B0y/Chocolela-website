import oauth1a from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

const CONSUMERKEY = 'ck_67deeea227693a773d7a562a7e27b9e5246d57c6';
const CONSUMERSECRET = 'cs_e89f1bc64700dc64565336a2ce025c8a6eaecca4';

class oAuthHeader {
  static getAuthHeaderForRequest(request) {
    const oauth = oauth1a({
      consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return CryptoJS.HmacSHA1(base_string, key).toString(
          CryptoJS.enc.Base64
        );
      },
    });

    const authorization = oauth.authorize(request);

    return oauth.toHeader(authorization);
  }
}

export default oAuthHeader;
