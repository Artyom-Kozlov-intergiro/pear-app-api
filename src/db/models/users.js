const { DataTypes } = require('sequelize');

const modelName = 'user';

function createModel(db) {
    const model = db.define(modelName, {
        id: { type: DataTypes.UUID, primaryKey: true },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },

        name: { type: DataTypes.STRING, allowNull: false },
        identityId: { type: DataTypes.STRING, allowNull: false }
    }, {
        underscored: true,
        paranoid: true,
        tableName: 'users',
        defaultScope: {
            attributes: { exclude: ['createdAt'] },
        },
    });

    db.withModels(({
        // testModel,
    }) => {
        // model.hasOne(testModel);
    });

    const created = model === db.models[modelName];
    console.log(`Initialized model ${modelName}: ${created}`);
}

module.exports = createModel;
