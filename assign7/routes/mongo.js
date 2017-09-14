const crypto = require('crypto');
const mongoclient = require('mongodb').MongoClient;
const decipher = crypto.createDecipher('aes256', 'asaadsaad');


mongoclient.connect('mongodb://127.0.0.1:27017/assignment7',(ERR,DB)=>{
    if(ERR){

    }else{
        DB.collection('homework7').findOne({},{_id:false},(err,data)=>{
            if(err){

            }else{
                const encrypted = data.message;
                let decrypted = decipher.update(encrypted, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                module.exports.data = decrypted;
                DB.close();
            }
        })
    }
});



