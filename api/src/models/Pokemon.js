const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('name', value.toLowerCase());
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1
      },
    },
  }, {
    timestamps: false
  });
};
