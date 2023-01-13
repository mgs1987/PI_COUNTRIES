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
           type: DataTypes.STRING(50),
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.ENUM("Winter", "Summer","Autumn","Spring")
        }
    })
}

