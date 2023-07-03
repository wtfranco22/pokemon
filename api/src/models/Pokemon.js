const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
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
      type: DataTypes.STRING
    },
    life: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
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
      validate: {
        min: 1
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      },
      get() {
        return `${this.getDataValue('height')} cm`;
      }
    },
    weight: {
      type: DataTypes.FLOAT(2),
      validate: {
        min: 0.1,
        isFloat: true,
      },
      get() {
        return `${this.getDataValue('weight')} kg`;
      }
    },
  }, {
    timestamps: false
  });
};
