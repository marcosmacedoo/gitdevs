import React from 'react'

import './styles.css'

interface Props {
	text: string
}

const Loading = () => {
	return <div className="loading"></div>
}

const Button: React.FC<Props> = ({ text }) => (
	<button type="submit" className="button button--primary center-row">
		<h3>{text === 'Searching' ? <Loading /> : text}</h3>
	</button>
)

export default Button
