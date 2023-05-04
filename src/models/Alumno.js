const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("alumno", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}