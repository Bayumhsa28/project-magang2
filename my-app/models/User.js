import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database';

class User extends Model {}

User.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    locationCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    can_download: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    role_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    store_id: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'customer_users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default User;
