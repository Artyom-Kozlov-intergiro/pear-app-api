'use strict';

function addAssociationsInitialization(db) {
    const associations = [];

    function withModels(associateFn) {
        associations.push(associateFn);
    }

    function associate() {
        associations.forEach((associateFn) => {
            associateFn(db.models);
        });
    }

    // eslint-disable-next-line no-param-reassign
    db.withModels = withModels;
    // eslint-disable-next-line no-param-reassign
    db.associate = associate;
}

module.exports = {
    addAssociationsInitialization,
};
