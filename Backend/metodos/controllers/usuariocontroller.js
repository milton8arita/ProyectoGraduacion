const studentService = require('../usuarioservices');

exports.createStudentControllerFn = async (req, res) => {
    try {
        console.log("Recibiendo solicitud de creación de estudiante...");
        console.log("Datos recibidos:", req.body);

        const status = await studentService.createStudentDBService(req.body);
        console.log("Resultado de creación:", status);

        if (status) {
            res.status(200).json({ status: true, message: "Student created successfully" });
        } else {
            res.status(500).json({ status: false, message: "Error creating user" });
        }
    } catch (err) {
        console.error("Error en createStudentControllerFn:", err);
        res.status(500).json({ status: false, message: "Error creating user" });
    }
};

exports.loginUserControllerFn = async (req, res) => {
    try {
        console.log("Recibiendo solicitud de inicio de sesión...");
        console.log("Datos recibidos:", req.body);

        const result = await studentService.loginuserDBService(req.body);
        console.log("Resultado de inicio de sesión:", result);

        if (result.status) {
            res.status(200).json({ status: true, message: result.msg });
        } else {
            res.status(401).json({ status: false, message: result.msg });
        }
    } catch (error) {
        console.error("Error en loginUserControllerFn:", error);
        res.status(500).json({ status: false, message: "Error authenticating Usuario" });
    }
};

