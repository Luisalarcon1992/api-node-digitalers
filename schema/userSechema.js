import z from "zod";

const userSchema = z.object({
  password: z.password({
    required_error: "La contraseña es requerida",
  }),
  username: z.username({
    required_error: "El nombre de usuario es requerido",
  }),
});

export function validarDatos(object) {
  return userSchema.safeParse(object);
}
