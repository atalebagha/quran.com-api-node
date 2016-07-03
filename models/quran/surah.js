'use strict';
module.exports = function(sequelize, DataTypes) {
  var surah = sequelize.define('surah', {
    surah_id: {type: DataTypes.INTEGER, primaryKey: true},
    ayat: DataTypes.INTEGER,
    bismillah_pre: DataTypes.BOOLEAN,
    revelation_order: DataTypes.INTEGER,
    revelation_place: DataTypes.TEXT,
    page: DataTypes.ARRAY(DataTypes.TEXT),
    name_complex: DataTypes.TEXT,
    name_simple: DataTypes.TEXT,
    name_english: DataTypes.TEXT,
    name_arabic: DataTypes.TEXT
  }, {
    tableName: 'surah',
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
        this.hasMany(models.quran.ayah, {foreignKey: 'surah_id'});
        // associations can be defined here
      }
    },

    instanceMethods: {
      revelation() {
        return {
          place: this.revelation_place,
          order: this.revelation_order
        };
      },

      name() {
        return {
          complex: this.name_complex,
          simple: this.name_simple,
          english: this.name_english,
          arabic: this.name_arabic
        }
      },

      toJSON: function() {
        return {
          id: this.surah_id,
          page: this.page,
          bismillah_pre: this.bismillah_pre,
          ayat: this.ayat,
          name: this.name(),
          revelation: this.revelation()
        };
      }
    }
  });

  return surah.schema('quran');
};
