import * as React from 'react'
import {
  FormProvider,
  useFormContext,
  useForm,
  Controller,
  type FieldValues,
  type UseFormProps,
  type ControllerProps,
} from 'react-hook-form'
import { Label } from './Label'
import { cn } from '@/lib/utils'

const Form = <T extends FieldValues>({
  children,
  ...props
}: {
  children: React.ReactNode
} & UseFormProps<T>) => {
  const methods = useForm<T>(props)
  return <FormProvider {...methods}>{children}</FormProvider>
}

function FormField<T extends FieldValues>(props: ControllerProps<T>) {
  return <Controller {...props} />
}

const FormItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('space-y-2', className)} {...props} />
}

const FormLabel = Label

const FormControl = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('', className)} {...props} />
}

const FormMessage = ({
  message,
  className,
}: {
  message?: string
  className?: string
}) => {
  const {
    formState: { errors },
  } = useFormContext()
  const error = message ?? Object.values(errors)[0]?.message
  if (!error) return null
  return (
    <p className={cn('text-sm text-destructive', className)}>{String(error)}</p>
  )
}

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage }
