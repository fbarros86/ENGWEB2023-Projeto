import json

semreps={}
with open("refeicoes.json") as f:
    meals=json.load(f)

for meal in meals:
    if ((meal["refeicao"],meal["tipo"],meal["data"]) not in semreps):
        semreps[(meal["refeicao"],meal["tipo"],meal["data"])]=meal

l = list(semreps.values())

with open("refeicoes2.json","w") as f:
    json.dump(l,f)