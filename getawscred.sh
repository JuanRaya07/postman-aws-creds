sxs-cli login >/dev/null 2>&1
cat_string=`cat ~/.aws/credentials`
aws_access_key_id=$(echo "$cat_string" | awk -F '=' '/aws_access_key_id/{print $2}')
aws_secret_access_key=$(echo "$cat_string" | awk -F '=' '/aws_secret_access_key/{print $2}')
aws_session_token=$(echo "$cat_string" | awk -F '=' '/aws_session_token/{print substr($0, index($0, "=") + 2, length($0) - index($0, "=") - 2)}')
json_string=$(cat <<EOF
{
  "Credentials": {
    "AccessKeyId": "$aws_access_key_id",
    "SecretAccessKey": "$aws_secret_access_key",
    "SessionToken": "$aws_session_token"
  }
}
EOF
)
echo "$json_string"
