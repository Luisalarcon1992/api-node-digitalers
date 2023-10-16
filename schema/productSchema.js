import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El nombre debe ser una cadena de caracteres',
      required_error: 'Nombre es requerido',
    })
    .min(5, {
      message: 'El mínimo para el nombre de la propiedad es de 5 caracateres',
    })
    .max(50, {
      message: 'El máximo para el nombre de la propiedad es de 5 caracateres',
    }),
  description: z
    .string({
      invalid_type_error: 'La descripción debe ser una cadena de caracteres',
    })
    .max(500, {
      message:
        'El máximo para descripción de la propiedad es de 500 caracateres',
    }),
  price: z
    .number({
      invalid_type_error: 'El precio debe ser número',
      required_error: 'El precio es requerido',
    })
    .min(0, {
      message:
        'El mínimo para la fecha de la propiedad es del 1900 caracateres',
    }),
  direction: z
    .string({
      invalid_type_error:
        'El nombre del autor debe ser una cadena de caractéres',
      required_error: 'El autor es requrido',
    })
    .min(4, {
      message: 'El mínimo para el nombre del autor es de 5 caracateres',
    })
    .max(100, {
      message: 'El máximo para el nombre del autor es de 40 caracateres',
    }),
  cathegoryProperty: z.string(),
  state: z.string(),
  urlimage: z
    .string({
      invalid_type_error:
        'La url de la imagen debe ser una cadena de caracteres',
      required_error: 'La url es requerida',
    })
    .url({
      message: 'La imagen debe contener la url',
    }),
  bathroom: z
    .string({
      invalid_type_error: 'El número de baño debe ser número',
      required_error: 'El número de baño es requerido',
    })
    .min(0, {
      message: 'El mínimo para número de baño es de 1',
    })
    .max(5, {
      message: 'El máximo para numeros de baño es de 5',
    }),
  room: z
    .string({
      invalid_type_error: 'El número de habitaciones debe ser número',
      required_error: 'El número de habitaciones es requerido',
    })
    .min(1, {
      message: 'El mínimo para número de habitaciones es de 1',
    }),
  dimension: z.string().min(1, {
    message: 'La dimensión debe ser mayor a 1',
  }),
});
