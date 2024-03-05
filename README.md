### 🚀 Installation

1. `git clone git@github.com:JuanRaya07/postman-aws-creds.git`

2. `cd postman-aws-creds`

3. Run `node server.js`

4. Create a postman `GET` localhost:3001

5. Paste in Tests tab:

```javascript
const token = JSON.parse(responseBody);
pm.globals.set("awsAccessTokenId", token["Credentials"]["AccessKeyId"]);
pm.globals.set("awsSecretAccessKey", token["Credentials"]["SecretAccessKey"]);
pm.globals.set("awsSessionToken", token["Credentials"]["SessionToken"]);
```

<img width="637" alt="image" src="https://github.com/JuanRaya07/postman-aws-creds/assets/130441696/2690f44d-7b20-4e2a-8fb7-ea53c19fb122">

6. Click `Send`

7. Close server `ctrl+c`
