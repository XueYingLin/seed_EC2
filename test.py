import requests
import json

url = 'https://seorwrpmwh.execute-api.us-east-1.amazonaws.com/prod/mp2-autograder-2022-spring'

payload = {
    # <insert ip address:port of first EC2 instance>,
    'ip_address1':  "54.177.223.254:80",
    # <insert ip address:port of secong EC2 instance>,
    'ip_address2':  "13.57.3.203:80",
    # <insert address of load balancer>,
    'load_balancer': "load-balancer1-137712298.us-west-1.elb.amazonaws.com",
    # <insert your coursera account email>,
    'submitterEmail': "xylin2@illinois.edu",
    'secret': "80nngf6kbLDLvY6Z"  # <insert your secret token from coursera>
}

r = requests.post(url, data=json.dumps(payload))

print(r.status_code, r.reason)
print(r.text)
