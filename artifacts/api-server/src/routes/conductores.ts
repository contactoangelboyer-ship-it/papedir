import { Router } from "express";
  import { z } from "zod/v4";

  const router = Router();

  const RegistroBaseSchema = z.object({
    tipo: z.enum(["conductor", "repartidor", "embajador"]),
    nombre: z.string().min(2),
    whatsapp: z.string().min(10),
    ciudad: z.string().min(2),
  });

  const ConductorSchema = RegistroBaseSchema.extend({
    tipo: z.literal("conductor"),
    cedula: z.string().min(6),
    vehiculo: z.enum(["carro", "moto", "ambos"]),
  });

  const RepartidorSchema = RegistroBaseSchema.extend({
    tipo: z.literal("repartidor"),
    cedula: z.string().min(6),
    vehiculo: z.enum(["moto", "bicicleta", "a_pie"]),
  });

  const EmbajadorSchema = RegistroBaseSchema.extend({
    tipo: z.literal("embajador"),
    nombre_negocio: z.string().min(2),
    tipo_negocio: z.enum(["restaurante","farmacia","supermercado","tienda","panaderia","otro"]),
    direccion: z.string().optional(),
  });

  const RegistroSchema = z.discriminatedUnion("tipo", [ConductorSchema, RepartidorSchema, EmbajadorSchema]);

  type Registro = z.infer<typeof RegistroSchema>;
  const registros: Registro[] = [];

  // New unified endpoint
  router.post("/registro", async (req, res) => {
    const parsed = RegistroSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", details: parsed.error.issues });
      return;
    }
    registros.push(parsed.data);
    req.log.info({ tipo: parsed.data.tipo, nombre: parsed.data.nombre }, "Nuevo registro");
    res.status(201).json({ ok: true, message: "Registro recibido. Te contactaremos pronto por WhatsApp." });
  });

  router.get("/registro", async (_req, res) => {
    const conductores = registros.filter(r => r.tipo === "conductor");
    const repartidores = registros.filter(r => r.tipo === "repartidor");
    const embajadores = registros.filter(r => r.tipo === "embajador");
    res.json({ total: registros.length, conductores, repartidores, embajadores });
  });

  // Legacy endpoint — kept for backward compat
  router.post("/conductores", async (req, res) => {
    const parsed = ConductorSchema.safeParse({ ...req.body, tipo: "conductor" });
    if (!parsed.success) {
      res.status(400).json({ error: "Datos inválidos", details: parsed.error.issues });
      return;
    }
    registros.push(parsed.data);
    req.log.info({ conductor: parsed.data.nombre }, "Nuevo registro de conductor (legacy)");
    res.status(201).json({ ok: true, message: "Registro recibido. Te contactaremos pronto por WhatsApp." });
  });

  router.get("/conductores", async (_req, res) => {
    const conductores = registros.filter(r => r.tipo === "conductor");
    res.json({ total: conductores.length, registros: conductores });
  });

  export default router;
  