const express = require("express");

const {
  createOfertas,
  deleteOfertas,
  getOfertas,
  updateOfertas,
} = require("../controllers/ofertas.controller");

const { protectSession } = require("../middlewares/auth.middlewares");

const ofertaRouter = express.Router();

ofertaRouter.use(protectSession);

ofertaRouter.get("/", getOfertas);

ofertaRouter.post("/", createOfertas);

ofertaRouter.patch("/:id", updateOfertas);

ofertaRouter.delete("/:id", deleteOfertas);

module.exports = { ofertaRouter };
