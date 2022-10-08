const { Oferta } = require("../models/oferta.model");

const { catchAsync } = require("../utils/catchAsync.util");

const getOfertas = catchAsync(async (req, res, next) => {});
const createOfertas = catchAsync(async (req, res, next) => {});
const updateOfertas = catchAsync(async (req, res, next) => {});
const deleteOfertas = catchAsync(async (req, res, next) => {});

module.exports = { getOfertas, createOfertas, updateOfertas, deleteOfertas };
