import { z } from 'zod';

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(11, 'شماره تلفن باید حداقل 11 رقم باشد')
    .regex(/^09\d{9}$/, 'شماره تلفن معتبر نیست'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
});
