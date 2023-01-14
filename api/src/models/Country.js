const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    flag_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area : {
      type: DataTypes.INTEGER
    },
    population : {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps:false,
  })
}
