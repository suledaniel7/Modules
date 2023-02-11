const axios = require('axios').default;

axios.post('http://102.36.176.185:9090/bank9ja/api/v2/k1/authenticate', {
    username: 'pisi',
    password: 'pisi123',
    clientId: 'waas',
    clientSecret: 'cRAwnWElcNMUZpALdnlve6PubUkCPOQR'
}).then((resp) => {
    console.log(resp);
});
//response
data = {
    accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0ek1WWmtzOG1zcG01TmNHazNFdW1BVjZWYTFRQTVpTlYwcHVfU3hZQldBIn0.eyJleHAiOjE2Njc4MTMzNzgsImlhdCI6MTY2NzgwNjE3OCwianRpIjoiODZkODg1NGYtMDM5ZS00ZmRiLTk5ZmMtMjk0YjBhYjQ4N2M3IiwiaXNzIjoiaHR0cDovLzEwLjE4NS4yMjMuMjM6ODA4MC9yZWFsbXMvOXBzYiIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzMDY4MjRiOS1hOWQzLTRkOWMtYjRhNi04MTkyYjhhYjVlMWQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ3YWFzIiwic2Vzc2lvbl9zdGF0ZSI6IjJhMjdmODQxLWFhOTUtNGU3Yi1iNTkzLTBkNjhhMDVhMjE3NCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy05cHNiIiwib2ZmbGluZV9hY2Nlc3MiLCJvcGVuX3dhbGxldCIsImNyZWRpdF93YWxsZXQiLCJ3YWxsZXRfcmVxdWVyeSIsInVtYV9hdXRob3JpemF0aW9uIiwiZGViaXRfd2FsbGV0Iiwid2FsbGV0X3RyYW5zYWN0aW9ucyIsIndhbGxldF9lbnF1aXJ5Iiwid2FsbGV0X290aGVyX2JhbmtzIiwib3RoZXJfYmFua3NfZW5xdWlyeSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIyYTI3Zjg0MS1hYTk1LTRlN2ItYjU5My0wZDY4YTA1YTIxNzQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InBpc2kifQ.gfXWiiS9lq-uChEblbDLnRHzybPJEv2nNtr4iK1QF6HPlFyR7Jzgi8DM8r0qJrl6dPTDDBIKR3srFmCONn-0SBlfZc2S6hmPG8j9TqeVBJOMyr2Ls81Vl8cCjYWHype9M-QCOVA9k7EEC2iycTYhmjDXc3xgQpZpNyNJcVdFZAIv_kfcxvXeaqtOPKg7zxhSIhkEoK-oSzEsdYpQAy4HYvojqrYzHLQAjjwpkyRjNcY3y7dD_mbYa8MxFhwOIuLmVlPhUn3kPaZmbqIYk26twJhm1VRRfanEqeIOhNknXT_qMz5h__V_eWgiDeD0ZKpUvuBfbd8HEKsiPLUbSDNG_w',
    message: 'successful',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0Mzk0ZTFiOC1jOTY3LTQzNWItOTg2OC1mMmM1ZTAxNTlhNmEifQ.eyJleHAiOjE2Njc4MDc5NzgsImlhdCI6MTY2NzgwNjE3OCwianRpIjoiMWI3ODQ2YzctNzRhZi00NzJiLWIyZTQtYWFiMjIyMjM2ZmNhIiwiaXNzIjoiaHR0cDovLzEwLjE4NS4yMjMuMjM6ODA4MC9yZWFsbXMvOXBzYiIsImF1ZCI6Imh0dHA6Ly8xMC4xODUuMjIzLjIzOjgwODAvcmVhbG1zLzlwc2IiLCJzdWIiOiIzMDY4MjRiOS1hOWQzLTRkOWMtYjRhNi04MTkyYjhhYjVlMWQiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoid2FhcyIsInNlc3Npb25fc3RhdGUiOiIyYTI3Zjg0MS1hYTk1LTRlN2ItYjU5My0wZDY4YTA1YTIxNzQiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMmEyN2Y4NDEtYWE5NS00ZTdiLWI1OTMtMGQ2OGEwNWEyMTc0In0.YxWfTbJXQdDBVQFfv-n75XHamYM1KYCIQRtBQc_JP8Y',
    expiresIn: '7200',
    refreshExpiresIn: '1800',
    tokenType: null,
    jwt: null
}

//decoded at jwt.io

let accessToken_decoded = {
    "exp": 1667813378,
    "iat": 1667806178,
    "jti": "86d8854f-039e-4fdb-99fc-294b0ab487c7",
    "iss": "http://10.185.223.23:8080/realms/9psb",
    "aud": "account",
    "sub": "306824b9-a9d3-4d9c-b4a6-8192b8ab5e1d",
    "typ": "Bearer",
    "azp": "waas",
    "session_state": "2a27f841-aa95-4e7b-b593-0d68a05a2174",
    "acr": "1",
    "realm_access": {
      "roles": [
        "default-roles-9psb",
        "offline_access",
        "open_wallet",
        "credit_wallet",
        "wallet_requery",
        "uma_authorization",
        "debit_wallet",
        "wallet_transactions",
        "wallet_enquiry",
        "wallet_other_banks",
        "other_banks_enquiry"
      ]
    },
    "resource_access": {
      "account": {
        "roles": [
          "manage-account",
          "manage-account-links",
          "view-profile"
        ]
      }
    },
    "scope": "openid email profile",
    "sid": "2a27f841-aa95-4e7b-b593-0d68a05a2174",
    "email_verified": false,
    "preferred_username": "pisi"
  }