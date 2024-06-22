const studentModel = require('./model/usuariomodel');
const encryptor = require('simple-encryptor')('123456789trytryrtyr');

module.exports.createStudentDBService = async (studentDetails) => {
    try {
        const encryptedPassword = encryptor.encrypt(studentDetails.password);

        const studentModelData = new studentModel({
            email: studentDetails.email,
            password: encryptedPassword
        });

        const result = await studentModelData.save();

        if (result) {
            return true; 
        } else {
            return false; 
        }
    } catch (error) {
        console.error('Error en Create Usuario:', error);
        return false; 
    }
};

module.exports.loginuserDBService = async (studentDetails) => {
    try {
        const result = await studentModel.findOne({ email: studentDetails.email });

        if (!result) {
            throw { status: false, msg: "Invalid Data" };
        }

        const decryptedPassword = encryptor.decrypt(result.password);

        if (decryptedPassword === studentDetails.password) {
            return { status: true, msg: "User Validated Successfully" };
        } else {
            throw { status: false, msg: "User Validation Failed" };
        }
    } catch (error) {
        console.error('Error en loginuserDBService:', error);
        throw { status: false, msg: "Error authenticating user" };
    }
};
