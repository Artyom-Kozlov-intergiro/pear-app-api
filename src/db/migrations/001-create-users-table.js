'use strict';

const { DataTypes } = require('sequelize');

const USERS_TABLE_NAME = 'users';

module.exports = {
    async up(qi, Sequelize) {
        const schema = {
            id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
            created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },

            name: { type: DataTypes.STRING, allowNull: false },
            identity_id: { type: DataTypes.UUID, allowNull: false }
        };

        await qi.createTable(USERS_TABLE_NAME, schema);
    },
    async down(qi) {
        await qi.dropTable(USERS_TABLE_NAME);
    },
};
