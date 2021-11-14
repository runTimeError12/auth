"use strict";

module.exports = (sequelize, DataTypes) => {
    const HRT_CURRENT_STATUS = sequelize.define("hrt_current_status", {
        currentStatusID: {
            field: "currentStatusID",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: "title",
            type: DataTypes.STRING
        },
        imageUrl: {
            field: "imageUrl",
            type: DataTypes.STRING(4000)
        },
        priority: {
            field: "priority",
            type: DataTypes.INTEGER
        },
        isActive: {
            field: "isActive",
            type: DataTypes.BOOLEAN,
            default: 1
        },        
    },
    {
        tableName: "hrt_current_status"
    });
    HRT_CURRENT_STATUS.associate = (models) => {
        
        HRT_CURRENT_STATUS.belongsTo(models.users, {
          foreignKey: "createdByUserID"
        });

        HRT_CURRENT_STATUS.belongsTo(models.users, {
          foreignKey: "lastUpdatedUserID"
        });
    };
    return HRT_CURRENT_STATUS;
}