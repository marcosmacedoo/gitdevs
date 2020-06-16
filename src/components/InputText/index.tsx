import React, { ChangeEvent } from 'react'

import './styles.css'

interface Props {
	name: string
	placeholder?: string
	value: string
	handleOnChange(event: ChangeEvent<HTMLInputElement>): void
}

const InputText = (props: Props) => (
	<input
		type="text"
		name={props.name}
		id={props.name}
		value={props.value}
		placeholder={props.placeholder}
		onChange={props.handleOnChange}
		className="input-text"
	/>
)

export default InputText
