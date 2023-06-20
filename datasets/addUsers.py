import json
import requests
import  time

with open("users.json") as f:
    users = json.load(f)["utilizadores"]
for user in users:
    user["tipo"]=user["tipo"].strip()
    response = requests.post("http://localhost:7777/signup/", user)
    