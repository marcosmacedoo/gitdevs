import React, { useState, ChangeEvent } from 'react'

import './styles.css'
import InputText from '../../components/InputText'
import Fab from '../../components/Fab'
import Users from '../../containers/Users'

interface User {
	id: number
	username: string
	name: string
	avatar_url: string
	language_main: string
}

interface Props {
	users: Array<User>
}

const Home: React.FC<Props> = ({ users }) => {
	const [searchLanguage, setSearchLanguage] = useState<string>('')

	const handleSearchLanguage = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchLanguage(event.target.value)
	}

	return (
		<main className="container main">
			<div className="center-row">
				<div className="input-search">
					<InputText
						name="search"
						placeholder="Search Language..."
						value={searchLanguage}
						handleOnChange={handleSearchLanguage}
					/>
				</div>
			</div>
			{users.length === 0 ? (
				<div className="container-message-initial center-row">
					<h2>Nenhum usuário cadastrado no momento</h2>
				</div>
			) : (
				<Users users={users} />
			)}
			<Fab />
		</main>
	)
}

export default Home
