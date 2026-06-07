import { Router } from "express";
import { z } from "zod/v4";

const router = Router();

const RegistroSchema = z.object({
  nombre: z.string().min(3),
  cedula: z.string().min(6),
  vehiculo: z.enum(["carro", "moto", "ambos"]),
  whatsapp: z.string().min(10),
  ciudad: z.string().min(2),
});

const registros: z.infer<typeof RegistroSchema>[] = [];

router.post("/conductores", async (req, res) => {
  const parsed = RegistroSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Datos inválidos", details: parsed.error.issues });
    return;
  }
  registros.push(parsed.data);
  req.log.info({ conductor: parsed.data.nombre }, "Nuevo registro de conductor");
  res.status(201).json({ ok: true, message: "Registro recibido. Te contactaremos pronto por WhatsApp." });
});

router.get("/conductores", async (_req, res) => {
  res.json({ total: registros.length, registros });
});

export default router;
