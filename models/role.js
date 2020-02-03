module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("Role", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Role.associate = function (models) {
        Role.belongsToMany(models.User, {
            through: 'User_Role' // pivot
        });

        Role.belongsTo(models.Pet);
    };

    return Role;
};
