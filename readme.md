why .gitignore dosent work

rename migration timestamp to reset order of migration
to addConstraint from migration (see on migration add-fk-on-fruits)

many to many ✔ (char - power)
one to many ✔ (team - char)
one to one ✔ (char - devilfruit)


hooks ❌
validation ✔
you can see validation on :
-from controller static postFruit catch to static fruitForm
-models/Fruit