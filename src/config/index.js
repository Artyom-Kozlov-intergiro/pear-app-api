module.exports = {
    development: {
        username: 'postgres',
        password: 'pear_app_password',
        database: 'pear_app_development',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
    },
    publicPort: 3000,
    privatePort: 3001,
};
