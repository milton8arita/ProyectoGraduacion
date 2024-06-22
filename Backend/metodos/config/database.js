const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/Metodos';

const DBconnection = async () => {

    try {

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }

}

module.exports = DBconnection