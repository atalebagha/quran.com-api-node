'use strict';
module.exports = function(sequelize, DataTypes) {
  var ayah = sequelize.define('ayah', {
    ayah_index: DataTypes.INTEGER,
    surah_id: DataTypes.INTEGER,
    ayah_num: DataTypes.INTEGER,
    page_num: DataTypes.INTEGER,
    juz_num: DataTypes.INTEGER,
    hizb_num: DataTypes.INTEGER,
    rub_num: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    ayah_key: {type: DataTypes.TEXT, primaryKey: true},
    sajdah: DataTypes.TEXT
  }, {
    tableName: 'ayah',
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });



  return ayah.schema('quran');
};
