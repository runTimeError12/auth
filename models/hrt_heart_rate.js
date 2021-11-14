"use strict";

module.exports = (sequelize, DataTypes) => {
    const hrt_heart_rate = sequelize.define("hrt_heart_rate", {
        heartRateID: {
            field: "heartRateID",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        min: {
            field: "min",
            type: DataTypes.INTEGER
        },
        max: {
            field: "max",
            type: DataTypes.INTEGER
        },
        avg: {
            field: "avg",
            type: DataTypes.INTEGER
        },
        notes: {
            field: "notes",
            type: DataTypes.STRING
        },
        isActive: {
            field: "isActive",
            type: DataTypes.BOOLEAN,
            default: 1
        },        
    },
    {
        tableName: "hrt_heart_rate"
    });
    hrt_heart_rate.associate = (models) => {
        
        hrt_heart_rate.belongsTo(models.hrt_current_status, {
            foreignKey: "currentStatusID"
          });

        hrt_heart_rate.belongsTo(models.users, {
            foreignKey: "userID"
          });

        hrt_heart_rate.belongsTo(models.users, {
          foreignKey: "createdByUserID"
        });

        hrt_heart_rate.belongsTo(models.users, {
          foreignKey: "lastUpdatedUserID"
        });
        
    };
    return hrt_heart_rate;
}