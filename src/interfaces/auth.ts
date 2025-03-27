import { loginSchema } from '@/validations';
import { z } from 'zod';

export type TLoginSchemaType = z.infer<typeof loginSchema>;
