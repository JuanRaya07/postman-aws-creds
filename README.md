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
