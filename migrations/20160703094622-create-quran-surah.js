'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('quran/surahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surah_id: {
        type: Sequelize.INTEGER
      },
      ayat: {
        type: Sequelize.INTEGER
      },
      bismillah_pre: {
        type: Sequelize.BOOLEAN
      },
      revelation_order: {
        type: Sequelize.INTEGER
      },
      revelation_place: {
        type: Sequelize.TEXT
      },
      page: {
        type: Sequelize.ARRAY
      },
      name_complex: {
        type: Sequelize.TEXT
      },
      name_simple: {
        type: Sequelize.TEXT
      },
      name_english: {
        type: Sequelize.TEXT
      },
      name_arabic: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('quran/surahs');
  }
};