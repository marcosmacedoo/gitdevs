import React from 'react'

import { useHistory } from 'react-router-dom'

import './styles.css'

interface User {
	id: number
	username: string
	name: string
	avatar_url: string
	language_main: string
}

interface Props {
	user: User
}

const User: React.FC<Props> = ({ user }) => {
	const history = useHistory()

	return (
		<article
			className="user center-column"
			onClick={() => history.push(`profile/${user.username}`)}
		>
			<div className="user__body center-column">
				<img
					src={user.avatar_url}
					alt={user.name}
					className="user__body__avatar"
				/>
				<h2 className="user__body__name">{user.name}</h2>
				<p className="user__body__username">@{user.username}</p>
				<h3 className="user__body__language">{user.language_main}</h3>
			</div>
		</article>
	)
}

export default User
