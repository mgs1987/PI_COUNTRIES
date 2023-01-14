const sequelize = require("sequelize");
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Activities', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique:true,
            primaryKey: true
        },
        name: {
           type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM("Winter", "Summer","Autumn","Spring")
        },
    },
    )};

