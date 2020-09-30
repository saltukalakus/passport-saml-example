const saltukCert = `-----BEGIN CERTIFICATE-----
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

const tanverCert = `-----BEGIN CERTIFICATE-----
MIIDDzCCAfegAwIBAgIJA1dNH6xpsTjMMA0GCSqGSIb3DQEBCwUAMCUxIzAhBgNV
BAMTGnRhbnZlci1jdXN0b20uZXUuYXV0aDAuY29tMB4XDTE4MDcwNjExNTUxOVoX
DTMyMDMxNDExNTUxOVowJTEjMCEGA1UEAxMadGFudmVyLWN1c3RvbS5ldS5hdXRo
MC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCfLTV8D+p93Tm5
9LuDLWWUIjluHw714Uf2CqqKsU4R7U4Um+PYbuolMbocobmRFROC28gIV4C8zh41
6lWGFffXyNd9AZ0sPdlFkqF8ToFRSVqCLVVDlTXIO7R/TJhg73PUqhwWRWaVRf+3
ZXhnLL/+QdSCLyPydzaFBHcA30cVYZAp1+ttWh/n++tbiUvd9Jo5Ca8ighStcXat
jwgJGd9QteO7BXFfYgZ2ec1ITPCeQozdLO118UKm/WGWXkImP1qVzza0ECSnF9uq
0fB6yBOlFWh1hdGP86Ww2fr4VMb0r1c/5TrXmPVgLCXYpTcWHZbllEvZPW7WtEXc
j0TjwHDNAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFPlzIMUu
oyhho8o2cwnjflCK9UmnMA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOC
AQEAk3XRxKyzrvbbnnG4ASyyV/MqTcjt6cebuxodIvyZjhs/2/QcZYbBk9gKyz6v
VgBTf4TRsBBqrbEUX3o/uS7XjhsquyJJgCRBr1g6gH0Gt7OoyBkUcMfx6Fjv4cZM
PNlso9rghkPPcJbxKrdUDIeILv8en7WegOxxYlOs7/6cP5iB3GMGlCQFrAq1JI+M
gLqT+MOtyqq96GWNcByo0Ecvk9Yjf1xb7t7Dl85USfS1E9QOsMaiF4+pVybJ1Zwg
vuDV4/8EI7n0lGqa8jj0vruKwgianKcIMDItSL7eE2v6VQkBPIeMibX/Z/DgnKMi
OZsMYZj2etVQi0U8vz4T1rfc8g==
-----END CERTIFICATE-----`;


const saltukSaml = "https://saltuk-demo.auth0.com/samlp/WOVVA05PbWSk4xHUBZ2IXI9s1I6nN6cy?connection=Auth0Enterprise"
const tanverSaml = "https://tanver-custom.eu.auth0.com/samlp/D7moGi1FQRfRwfTK2ra2KSA1ObLSzPJ7?connection=tanverhasannomanoutlook-waad";

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
        entryPoint: process.env.SAML_ENTRY_POINT || saltukSaml,
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || saltukCert
      }
    },
    mapping: {
      id: process.env.MAPPING_ID || 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
      email: process.env.MAPPING_EMAIL || 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
      displayName: process.env.MAPPING_DISPLAY_NAME || 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
    }
  }
};
