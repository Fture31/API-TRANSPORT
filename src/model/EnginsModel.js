const pool = require("../config/db");

exports.getAllEngins = async () => {
    const [rows] = await pool.query("SELECT * FROM engins");
    return rows;
};

exports.getEnginById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM engins WHERE id = ?", [id]);
    return rows[0];
};

exports.createEngin = async (engin) => {
    const { date, zone, marque, type, poste, responsable, adresse, observation } = engin;
    const [result] = await pool.query(
        "INSERT INTO engins (date, zone, marque, type, poste, responsable, adresse, observation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [date, zone, marque, type, poste, responsable, adresse, observation]
    );
    return result.insertId;
};

exports.updateEngin = async (id, engin) => {
    const { date, zone, marque, type, poste, responsable, adresse, observation } = engin;
    await pool.query(
        "UPDATE engins SET date = ?, zone = ?, marque = ?, type = ?, poste = ?, responsable = ?, adresse = ?, observation = ? WHERE id = ?",
        [date, zone, marque, type, poste, responsable, adresse, observation, id]
    );
};

exports.deleteEngin = async (id) => {
    await pool.query("DELETE FROM engins WHERE id = ?", [id]);
};
