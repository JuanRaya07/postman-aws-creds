### 💻 Usage

0. Dependencies `sxs-cli` `awk` `cat` `node`

1. ```
   git clone git@github.com:JuanRaya07/postman-aws-creds.git
   ```

2. ```
   cd postman-aws-creds
   ```

3. ```
   node server.js
   ```

4. Create a postman `GET` localhost:3001

5. Paste in Tests tab:

```javascript
const token = JSON.parse(responseBody);
pm.globals.set("awsAccessTokenId", token["Credentials"]["AccessKeyId"]);
pm.globals.set("awsSecretAccessKey", token["Credentials"]["SecretAccessKey"]);
pm.globals.set("awsSessionToken", token["Credentials"]["SessionToken"]);
```

https://github.com/JuanRaya07/postman-aws-creds/assets/130441696/eb82d41f-1844-43d0-be4f-c6bd2a294dde


6. Click `Send`

7. Close server `ctrl+c`
