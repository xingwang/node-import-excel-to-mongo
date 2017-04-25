const mongoxlsx = require('mongo-xlsx');
const db = require('monk')('localhost/DBName')
const crawfordEmployees = db.get('CollectionName')
const xlsx  = './test.xlsx';
const model = null;

mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  crawfordEmployees.insert(data);
  console.log('Inserted: ', data.length);
});
