import json
import requests
import  time

with open("users.json") as f:
    users = json.load(f)["utilizadores"]
for user in users:
    response = requests.post("http://localhost:7777/signup/", user)
    # You can access the response using the 'response' attribute
    print(response.status_code) 
    