import React from 'react'

import { MdAdd } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import './styles.css'

const Fab: React.FC = () => {
	const history = useHistory()

	const handleClick = () => history.push('/new-user')

	return (
		<button className="fab fab-primary" onClick={handleClick}>
			<MdAdd size={25} color={'#fff'} />
		</button>
	)
}
export default Fab
