# backend code to connect to get jira issue number 

import io
import json
import pip._vendor.requests as requests


#url="https://test1234566.atlassian.net/rest/api/3/search"
url="Si-1"


headers={
  "Accept": "application/json",
    "Content-Type": "application/json"
}

query = {
   'jql': 'project = SI'
}

#echo -n codepythongo@gmail.com:CIES85krj0zpEIeBGRakEA8F | base64

response= requests.get(url,headers=headers,params=query,auth=("codepythongo@gmail.com","kuEIDHudThqhIzB30Qsp662F"))

print(response.text)

"""
data=response.json()
issues=data["issues"]
for issue in issues:
    print(issue["key"])

 """



