git clone 
cd 
node server.js
Create a postman GET localhost:3001
Paste this in Tests tab
const token = JSON.parse(responseBody);
pm.globals.set('awsAccessTokenId', token['Credentials']['AccessKeyId']);
pm.globals.set('awsSecretAccessKey', token['Credentials']['SecretAccessKey']);
pm.globals.set('awsSessionToken', token['Credentials']['SessionToken']);
Send
close server (ctrl+c)
<img width="637" alt="image" src="https://github.com/JuanRaya07/postman-aws-creds/assets/130441696/2690f44d-7b20-4e2a-8fb7-ea53c19fb122">
