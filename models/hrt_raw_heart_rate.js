"use strict";

module.exports = (sequelize, DataTypes) => {
    const hrt_raw_heart_rate = sequelize.define("hrt_raw_heart_rate", {
        rawHeartRateID: {
            field: "rawHeartRateID",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDate: {
            field: "startDate",
            type: DataTypes.DATE
        },
        endDate: {
            field: "endDate",
            type: DataTypes.DATE
        },
        unit: {
            field: "unit",
            type: DataTypes.STRING
        },
        value: {
            field: "value",
            type: DataTypes.INTEGER
        },
        rawJson: {
            field: "rawJson",
            type: DataTypes.TEXT
        },
        isActive: {
            field: "isActive",
            type: DataTypes.BOOLEAN,
            default: 1
        },        
    },
    {
        tableName: "hrt_raw_heart_rate"
    });
    hrt_raw_heart_rate.associate = (models) => {
        
        hrt_raw_heart_rate.belongsTo(models.users, {
            foreignKey: "userID"
          });

        hrt_raw_heart_rate.belongsTo(models.users, {
          foreignKey: "createdByUserID"
        });

        hrt_raw_heart_rate.belongsTo(models.users, {
          foreignKey: "lastUpdatedUserID"
        });
        
    };
    return hrt_raw_heart_rate;
}