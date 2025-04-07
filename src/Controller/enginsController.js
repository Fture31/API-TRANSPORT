const Engin = require("../model/EnginsModel");

exports.getAll = async (req, res) => {
    const engins = await Engin.getAllEngins();
    res.json(engins);
};

exports.getOne = async (req, res) => {
    const engin = await Engin.getEnginById(req.params.id);
    if (!engin) return res.status(404).json({ message: "Engin non trouvé" });
    res.json(engin);
};

exports.create = async (req, res) => {
    const newId = await Engin.createEngin(req.body);
    res.json({ message: "Engin ajouté", id: newId });
};

exports.update = async (req, res) => {
    await Engin.updateEngin(req.params.id, req.body);
    res.json({ message: "Engin mis à jour" });
};

exports.delete = async (req, res) => {
    await Engin.deleteEngin(req.params.id);
    res.json({ message: "Engin supprimé" });
};