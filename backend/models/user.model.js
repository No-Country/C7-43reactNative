const { db, DataTypes } = require("../utils/database.util");

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_de_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_postal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cargo_reciente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estudiante: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  universidad: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especializacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anio_inicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anio_fin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  en_busqueda_de_empleo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { User };
