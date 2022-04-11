

const registar = (req, res) => {
    res.send("desde api/veterinarios");
};
const perfil = (req, res) => {
    res.send("desde api/veterinarios/perfil");
}

export {
    registar,
    perfil
}
