const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("calificaciones", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
            primaryKey: true
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {min: 1, max: 10},
        },
        materia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}