import { z } from 'zod';

export const productSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El nombre debe ser una cadena de caracteres',
      required_error: 'Nombre es requerido',
    })
    .min(5, {
      message: 'El mínimo para el nombre del libro es de 5 caracateres',
    })
    .max(50, {
      message: 'El máximo para el nombre del libro es de 5 caracateres',
    }),
  description: z
    .string({
      invalid_type_error: 'La descripción debe ser una cadena de caracteres',
    })
    .max(500, {
      message: 'El máximo para descripción del libro es de 500 caracateres',
    }),
  publicDate: z
    .number({
      invalid_type_error: 'Fecha de publicación debe ser un número',
      required_error: 'La fecha de publicación es requerida',
    })
    .min(1900, {
      message: 'El mínimo para la fecha del libro es del 1900 caracateres',
    })
    .max(2030, {
      message: 'El máximo para la fecha del libro es del 2030 caracateres',
    }),
  author: z
    .string({
      invalid_type_error:
        'El nombre del autor debe ser una cadena de caractéres',
      required_error: 'El autor es requrido',
    })
    .min(4, {
      message: 'El mínimo para el nombre del autor es de 5 caracateres',
    })
    .max(40, {
      message: 'El máximo para el nombre del autor es de 40 caracateres',
    }),
  language: z.string({
    invalid_type_error: 'El idioma debe ser una cadena de caracteres',
    required_error: 'El idioma del libro es requerido',
  }),
  editorial: z.string({
    invalid_type_error: 'La editorial debe ser una cadena de caracteres',
  }),
  cathegory: z.array(
    z.enum([
      'Científicos',
      'Literatura y lingüísticos',
      'De viaje',
      'Biografías',
      'Libro de texto',
      'Monografías',
      'Recreativos',
      'Poéticos',
      'Juveniles',
      'Ficción',
      'Comedia',
      'Informática',
      'Programación',
    ]),
    {
      invalid_type_error:
        'Debes seleccionar uno de los items de la lista de categorías',
      required_error: 'La categoría es requerida',
    },
  ),
  urlimagen: z
    .string({
      invalid_type_error:
        'La url de la imagen debe ser una cadena de caracteres',
      required_error: 'La url es requerida',
    })
    .url({
      message: 'La imagen debe contener la url',
    }),
});
