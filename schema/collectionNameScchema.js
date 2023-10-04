import { z } from 'zod';

export const collectionNameSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Tiene que ser una cadena de carcteres',
      required_error: 'El nombre para la colección es requerida',
    })
    .min(4, {
      message: 'El mínimo de carcateres es de 4 para agregar a la colección',
    })
    .max(20, {
      message:
        'Supera el límite de carcateres, no debe superar los 20 caracteres',
    }),
});
