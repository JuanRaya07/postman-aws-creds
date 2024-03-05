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

<img width="1355" alt="image" src="https://github.com/JuanRaya07/postman-aws-creds/assets/130441696/f26d77e8-d114-4eae-b810-5e08cb213e60">

6. Click `Send`

7. Close server `ctrl+c`
