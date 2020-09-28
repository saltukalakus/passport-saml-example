const cert = `-----BEGIN CERTIFICATE-----
MIIDBTCCAe2gAwIBAgIJTDOymuuUAx4bMA0GCSqGSIb3DQEBCwUAMCAxHjAcBgNV
BAMTFXNhbHR1ay1kZW1vLmF1dGgwLmNvbTAeFw0xODA4MTQwMDExMTBaFw0zMjA0
MjIwMDExMTBaMCAxHjAcBgNVBAMTFXNhbHR1ay1kZW1vLmF1dGgwLmNvbTCCASIw
DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALToHnmsao/QpOaO31CumnH02flF
DCB98vLMmt+4HKzZt0aBzeu0sZCvuASJOUJEnN0zQXVe8W6Dr9cH5EaH6b69rgX2
jWUkrw1SvvOVDxBsBBS5huU4I0l8+1+aK+aiP767NFkdleZ1utl/EKLVtfcKHgfY
kPu5I0ORexm3cRKAYnC35epaOWovzeJB/2/v1fAkgyt29/woagndLJYDw9By91DQ
2z/RoFW6TOGySI2orbrsONXA0RQVzWoZuZUkUSExddRFTSuVBRUVpQQ3GYLlgMXp
2Zk+vxwCwCLhoDqVM4pD5YLzeIZXuYOtCSyE9/EzHlbvkPZmT/Gtpbc1jBECAwEA
AaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUUMqWWqNGUMI1wIkA+WqL
ZgGgm/gwDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQBJ/y0/tNi1
VST8Fd9kfmI0RWFGd0jq/Y7vnH9kECUS3XjeStbA2M9rJDVi7e9cf6SICsw5c6w1
SUryxQae4F3vgppXa8dV/HfdcgR/mIHzWlCEgSmxNNCfLmrQZdpEMoehX4sRXJN9
FwKxwrRznVOBIwvnlws0DPym7rMJj1kX5Meu3ssz3dFd4Xk7ImVbykODMejFpVBc
uQHiyoa7gzASXqnxgLTeEbWq7G7P5NkjaZ/DM0WgWek7AYYrNluoWhUL/ac4AUpN
iPZwgySTOJC7TFNJf+RXRlyc6S9/h1e21i36QYmI2fE1JjXca+4q6/A0sAZSogCv
fZf5/joCRwD6
-----END CERTIFICATE-----`;


module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://saltuk-demo.auth0.com/samlp/WOVVA05PbWSk4xHUBZ2IXI9s1I6nN6cy',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || cert
      }
    }
  }
};
