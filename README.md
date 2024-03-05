### Instructions

`git clone postman-aws-creds`

`cd postman-aws-creds`

Run `node server.js`

Create a postman `GET` localhost:3001

Paste in Tests tab:

```javascript
const token = JSON.parse(responseBody);
pm.globals.set("awsAccessTokenId", token["Credentials"]["AccessKeyId"]);
pm.globals.set("awsSecretAccessKey", token["Credentials"]["SecretAccessKey"]);
pm.globals.set("awsSessionToken", token["Credentials"]["SessionToken"]);
```

<img width="637" alt="image" src="https://github.com/JuanRaya07/postman-aws-creds/assets/130441696/2690f44d-7b20-4e2a-8fb7-ea53c19fb122">

Click `Send`

Close server `ctrl+c`
