# backend code to connect to get jira issue number 

import io
import json
import pip._vendor.requests as requests


url="https://test1234566.atlassian.net/rest/api/3/search"


headers={
  "Accept": "application/json",
    "Content-Type": "application/json"
}

query = {
   'jql': 'project= Spata.io'
}

response= requests.get(url,headers=headers,params=query,auth=("codepythongo@gmail.com","CIES85krj0zpEIeBGRakEA8F"))

#print(response.text)

data=response.json()
issues=data["issues"]
for issue in issues:
    print(issue["key"])



