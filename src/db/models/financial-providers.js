const { DataTypes } = require('sequelize');

const { countryCodes } = require('src/modules/constants');
const {
    investmentManagementTypesENUM,
    investmentTypesENUM,
} = require('src/modules/providers/constants');

const modelName = 'provider';

function createModel(db) {
    const model = db.define(modelName, {
        id: { type: DataTypes.UUID, primaryKey: true },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },

        investmentManagementType: {
            type: DataTypes.ARRAY(DataTypes.ENUM(investmentManagementTypesENUM)),
            allowNull: true,
        },
        supportedCountriesOfResidence: {
            type: DataTypes.ARRAY(DataTypes.ENUM(countryCodes)),
            allowNull: true,
        },
        investmentType: {
            type: DataTypes.ARRAY(DataTypes.ENUM(investmentTypesENUM)),
            allowNull: true,
        },
        supportedStocks: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        supportedEtfs: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
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
