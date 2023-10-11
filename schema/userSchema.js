import { z } from 'zod';

export const userSchema = z.object({
  username: z.string({
    required_error: 'El nombre de usuario es requerido',
    invalid_type_error:
      'El nombre de usuario debe ser una cadena de caracteres',
  }),
  mail: z
    .string({
      required_error: 'El mail es requerido',
      invalid_type_error: 'Debe ser una cadena de caracteres',
    })
    .email({
      message: 'Debe ser un tipo de mail válido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
      invalid_type_error: 'Debe ser una cadena de caracteres',
    })
    .min(6, {
      message: 'Debe ser al menos 6 dígitos',
    }),
});

export const userSchemaLogin = z.object({
  mail: z
    .string({
      required_error: 'El mail es requerido',
      invalid_type_error: 'Debe ser una cadena de caracteres',
    })
    .email({
      message: 'Debe ser un tipo de mail válido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
      invalid_type_error: 'Debe ser una cadena de caracteres',
    })
    .min(6, {
      message: 'Debe ser al menos 6 dígitos',
    }),
});
