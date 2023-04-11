const { DataTypes } = require('sequelize');

const {
    educationCourseTypesENUM,
    supportedFormatsENUM,
    levelsOfEducationENUM,
} = require('src/modules/providers/constants');

const modelName = 'provider';

function createModel(db) {
    const model = db.define(modelName, {
        id: { type: DataTypes.UUID, primaryKey: true },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },

        educationCourseTypes: {
            type: DataTypes.ARRAY(DataTypes.ENUM(educationCourseTypesENUM)),
            allowNull: true,
        },
        supportedFormats: {
            type: DataTypes.ARRAY(DataTypes.ENUM(supportedFormatsENUM)),
            allowNull: true,
        },
        levelsOfEducation: {
            type: DataTypes.ARRAY(DataTypes.ENUM(levelsOfEducationENUM)),
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
