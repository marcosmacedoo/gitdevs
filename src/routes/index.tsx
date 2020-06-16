import React, { useState } from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import NewUser from './NewUser'
import UserProfile from './UserProfile'

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

const Routes: React.FC = () => {
	const [users, setUsers] = useState<IUser[]>([])

	return (
		<Switch>
			<Route path="/" exact>
				<Home users={users} />
			</Route>

			<Route path="/new-user">
				<NewUser users={users} setUsers={setUsers} />
			</Route>

			<Route path="/profile/:username">
				<UserProfile users={users} />
			</Route>
		</Switch>
	)
}
export default Routes
