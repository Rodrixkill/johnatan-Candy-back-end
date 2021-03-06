import { Router } from "express";
import {
  obtenerCategoria,
  obtenerCategorias,
  obtenerAnimesCategoria,
} from "../controllers/categoria.controller";

const router = Router();

router.route("/").get(obtenerCategorias);

router.route("/:id").get(obtenerCategoria);

router.route("/:id/animes").get(obtenerAnimesCategoria);

export default router;
