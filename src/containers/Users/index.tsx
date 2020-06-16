import React from 'react'

import './styles.css'
import User from '../../components/User'

interface IUser {
	id: number
	username: string
	name: string
	avatar_url: string
	language_main: string
}

interface Props {
	users: Array<IUser>
}

const Users: React.FC<Props> = ({ users }) => (
	<section className="users">
		{users.map((user: User) => (
			<User user={user} key={user.id} />
		))}
	</section>
)

export default Users
