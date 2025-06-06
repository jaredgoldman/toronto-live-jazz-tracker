import { ReactNode } from 'react'
import * as Form from '@radix-ui/react-form'
import { TextField, Text, TextArea } from '@radix-ui/themes'
import {
    FieldError,
    FieldValues,
    Path,
    Control,
    Controller,
    RegisterOptions
} from 'react-hook-form'

interface Props<T extends FieldValues> {
    label: string | ReactNode
    name: Path<T>
    type?: string
    control: Control<T>
    error?: FieldError
    required?: boolean | string
    placeholder?: string
    rules?: Omit<RegisterOptions<T, Path<T>>, 'required'>
}

export default function Input<T extends FieldValues>({
    label,
    name,
    type = 'text',
    error,
    control,
    required = false,
    placeholder = '',
    rules = {}
}: Props<T>): JSX.Element {
    return (
        <Controller
            control={control}
            rules={{
                ...rules,
                required: required ? (typeof required === 'string' ? required : true) : false
            }}
            name={name}
            render={({ field }) => (
                <Form.Field name={name}>
                    <Form.Label>
                        {label}
                        {required && <Text color="red"> *</Text>}
                    </Form.Label>
                    <Form.Control asChild>
                        {type === 'textarea' ? (
                            <TextArea {...field} placeholder={placeholder} />
                        ) : (
                            <TextField.Input
                                type={type}
                                {...field}
                                placeholder={placeholder}
                            />
                        )}
                    </Form.Control>
                    {error && (
                        <Text size="2" color="red">
                            {error.message}
                        </Text>
                    )}
                </Form.Field>
            )}
        />
    )
}
