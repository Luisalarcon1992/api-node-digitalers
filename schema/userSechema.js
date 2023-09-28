import z from "zod";

const userSchema = z.object({
  password: z.string({
    required_error: "La contraseña es requerida",
  }),
  username: z.string({
    required_error: "El nombre de usuario es requerido",
  }),
});

export function validarDatos(object) {
  return userSchema.safeParse(object);
}
