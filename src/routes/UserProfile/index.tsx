import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import UserProfileCard from '../../containers/UserProfileCard'
import Repositories from '../../containers/Repositories'

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
}

const UserProfile: React.FC<Props> = ({ users }) => {
	const { username } = useParams()

	const [user, setUser] = useState<IUser>()

	useEffect(() => {
		const [userFiltered] = users.filter((user) => user.username === username)

		console.log(userFiltered)

		setUser(userFiltered)
	}, [username, users])

	return (
		<main className="container center-column">
			<UserProfileCard user={user || users[0]} />
			<Repositories repositories={user?.repositories || []} />
		</main>
	)
}

export default UserProfile
