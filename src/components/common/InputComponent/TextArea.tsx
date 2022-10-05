import { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLTextAreaElement> {
    name?: string,
    placeholder?: string,
    value?: string,
}

export const TextArea = ({ name, placeholder, onChange, value }: Props) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="border-2 w-full resize-none h-28"
        />
    )
}
