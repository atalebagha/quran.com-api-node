'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('quran/ayahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ayah_index: {
        type: Sequelize.INTEGER
      },
      surah_id: {
        type: Sequelize.INTEGER
      },
      ayah_num: {
        type: Sequelize.INTEGER
      },
      page_num: {
        type: Sequelize.INTEGER
      },
      juz_num: {
        type: Sequelize.INTEGER
      },
      hizb_num: {
        type: Sequelize.INTEGER
      },
      rub_num: {
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.TEXT
      },
      ayah_key: {
        type: Sequelize.TEXT
      },
      sajdah: {
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
    return queryInterface.dropTable('quran/ayahs');
  }
};