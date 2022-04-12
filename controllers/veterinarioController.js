import Veterinario from "../models/Veterinario.js"


const registar = async (req, res) => {
    const { email } = req.body;

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({ email });

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Guaradar un nuevo Veterinario 
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        
        res.json(veterinarioGuardado);
    } catch (error) {
        console.log(error);
    }

};
const perfil = (req, res) => {
    res.json({ msg: "Mostrando perfil..." });
};

const confirmar = async (req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await Veterinario.findOne({token});
    
    if (!usuarioConfirmar) {
        const error = Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({ msg: "Usuario Confirmado Correctamente" });
    } catch (error) {
        console.log(error);
    }

}

export {
    registar,
    perfil,
    confirmar
}; 
