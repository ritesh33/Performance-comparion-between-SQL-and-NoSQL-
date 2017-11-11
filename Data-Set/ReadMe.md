MONGODB:
Datasets in CSV and JSON folder are the same but with different format. Can be used any of the file for importing.
CSV and JSON can be used to import data in the MongoDB. Below are the two command that can be used for importing:
Go the folder in whihc the csv file present and run the below command in command promt
CSV : mongoimport -d <DATABASE-NAME> -c <COLLECTION-NAME> --type csv --headerline --file <FILENAME>.csv
JSON: mongoimport --db <DATABASE-NAME> --collection <COLLECTION-NAME> --file <FILENAME>.json

MYSQL:
As the data is in dump file, their will not be any problem in impoting. Just use the below command in "MYSQL command line client"
source <filepath>\filename.dump

