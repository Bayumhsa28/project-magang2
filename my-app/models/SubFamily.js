import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class SubFamily extends Model {}

SubFamily.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Menjadikan 'id' sebagai primary key
        allowNull: false, // Tidak boleh null
    },
    family_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Tidak boleh null
        references: {
            model: 'family', // Nama tabel family
            key: 'id', // Kolom yang direferensikan
        },
    },
    name: {
        type: DataTypes.STRING, // Menggunakan STRING untuk menyimpan nama
        allowNull: false, // Tidak boleh null
    },
}, {
    sequelize,
    tableName: 'family', // Nama tabel di database
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default SubFamily;
