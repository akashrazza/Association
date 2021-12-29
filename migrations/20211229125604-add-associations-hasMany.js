'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'UserDetailId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserDetails', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Credentials', // name of Source model
      'UserDetailsId' // key we want to remove
    );
  }
};
