import React from 'react'

import './styles.css'
import Form from '../../containers/Form'

interface IRepository {
	id: number
	name: string
	html_url: string
	stargazers_count: number
	created_at: Date
	language: string
	default_branch: string
}

interface IUser {
	id: number
	username: string
	name: string
	avatar_url: string
	followers: number
	following: number
	created_at: Date
	location: string
	language_main: string
	repositories: Array<IRepository>
}

interface Props {
	users: Array<IUser>
	setUsers(value: []): void
}

const NewUser: React.FC<Props> = ({ users, setUsers }) => {
	return (
		<main className="container center-row new-user">
			<Form users={users} setUsers={setUsers} />
		</main>
	)
}

export default NewUser
