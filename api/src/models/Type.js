const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Type', {
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
    }, { timestaps: false });
}