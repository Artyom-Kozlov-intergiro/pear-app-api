const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const { addAssociationsInitialization } = require('src/db/associations');

const modelsPath = './models';

function dbInit ({
    config
}) {
    const postgres = config.development;
    const sqlConfig = {
        dialect: postgres.dialect,
        port: Number(postgres.port),
        dialectOptions: {
            decimalNumbers: true,
        },
        logging: false,
    };

    const db = new Sequelize(
        postgres.database,
        postgres.username,
        postgres.password,
        sqlConfig,
    );

    db.authenticate()
        .then(() => {
            console.log('DB connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    addAssociationsInitialization(db);
    addAllModels(db)

    return db;
}

function addAllModels(db) {
    const modelsFolder = path.join(__dirname, modelsPath);

    fs.readdirSync(modelsFolder).forEach(file => {
        const modelPath = path.join(modelsFolder, file);
        const createModel = require(modelPath);

        createModel(db);
    });

    db.associate();
}

module.exports = {
    dbInit
};
