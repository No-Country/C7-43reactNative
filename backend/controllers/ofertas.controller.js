const { Oferta } = require("../models/oferta.model");
const { AppError } = require("../utils/appError.util");

const { catchAsync } = require("../utils/catchAsync.util");

const getOfertas = catchAsync(async (req, res, next) => {
  const ofertas = await Oferta.findAll({
    where: { status: "active" },
  });
  res.status(200).json({
    status: "success",
    data: { ofertas },
  });
});
const createOfertas = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { nombre, rol, ubicacion, tipo_contratacion, idEmpresa } = req.body;

  if (user.role !== "admin") {
    return next(new AppError("No eres Admin", 400));
  }
  const newOferta = await Oferta.create({
    nombre,
    rol,
    ubicacion,
    tipo_contratacion,
    idEmpresa,
  });
  res.status(201).json({
    status: "success",
    data: { newOferta },
  });
});
const updateOfertas = catchAsync(async (req, res, next) => {
  const { user, oferta } = req;
  const { nombre, rol, ubicacion, tipo_contratacion, idEmpresa } = req.body;

  if (user.role !== "admin") {
    return next(new AppError("No eres Admin", 400));
  }
  oferta = await Oferta.update({
    nombre,
    rol,
    ubicacion,
    tipo_contratacion,
    idEmpresa,
  });
  res.status(201).json({
    status: "success",
    data: { updateOferta },
  });
});
const deleteOfertas = catchAsync(async (req, res, next) => {
  const { user, oferta } = req;
  if (user.role !== "admin") {
    return next(new AppError("No eres Admin", 400));
  }
  oferta = await Oferta.update({ status: "deleted" });
  res.status(200).json({
    status: "success",
    data: { deleteOferta },
  });
});

module.exports = { getOfertas, createOfertas, updateOfertas, deleteOfertas };
