'use client';
import { AuthModalContainer, TextField } from '@/components';
import { cn } from '@/lib/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validations';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { TLoginSchemaType } from '@/interfaces';

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState<TLoginSchemaType>({
    phoneNumber: '',
    password: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: TLoginSchemaType) => {
    console.log('SUCCESS', data);
  };
  const handleChange = (
    field: keyof TLoginSchemaType,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <AuthModalContainer onClick={() => router.back()}>
      <h2 className={cn('mb-8 w-full text-center')}>
        برای ورود اطلاعات زیر را تکمیل کنید
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={cn('mb-4 w-full')}>
        <fieldset>
          <TextField
            {...register('phoneNumber')}
            placeholder="شماره تلفن همراه"
            numeric
            className="mb-4"
            value={formData.phoneNumber}
            onChange={(e) =>
              handleChange('phoneNumber', e as ChangeEvent<HTMLInputElement>)
            }
            error={errors.phoneNumber?.message}
          />
        </fieldset>
        <fieldset className={cn('mb-14')}>
          <TextField
            {...register('password')}
            placeholder="رمزعبور"
            value={formData.password}
            onChange={(e) =>
              handleChange('password', e as ChangeEvent<HTMLInputElement>)
            }
            error={errors.password?.message}
          />
          <p className={cn('text-primary-main mt-2 text-end text-sm')}>
            <Link href={'/#'}>رمز عبور خود را فراموش کردید؟</Link>
          </p>
        </fieldset>
        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          ورود
        </button>
      </form>
      <Link href={'/login/otp'}>click</Link>
    </AuthModalContainer>
  );
}
