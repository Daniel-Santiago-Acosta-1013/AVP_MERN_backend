const registar = (req, res) => {

    console.log(req.body);

    res.json({ msg: "Resgistrando usuario..." });
};
const perfil = (req, res) => {
    res.json({ msg: "Mostrando perfil..." });
};

export {
    registar,
    perfil
}
