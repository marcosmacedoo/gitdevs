import React, { useState, FormEvent, ChangeEvent } from 'react'

import { useHistory } from 'react-router-dom'

import './styles.css'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import api from '../../services/api'

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
	setUsers(value: IUser[]): void
}

const Form: React.FC<Props> = ({ users, setUsers }) => {
	const [username, setUsername] = useState<string>('')
	const [loadingNewUser, setLoadingNewUser] = useState<boolean>(false)

	const history = useHistory()

	const handleInputUsername = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		setUsername(value)
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setLoadingNewUser(true)

		const responseUser = await api
			.get(`${username}`)
			.then((response) => response.data)
			.catch((error) => console.error(error))

		if (!responseUser) {
			setLoadingNewUser(false)
			setUsername('')

			alert(`${username} not found`)

			return
		}

		const {
			id,
			name,
			avatar_url,
			followers,
			following,
			created_at,
			location,
		} = responseUser

		const responseRepository = await api
			.get(`${username}/repos`)
			.then<IRepository[]>((response) => response.data)
			.catch((error) => console.log(error))

		if (!responseRepository) {
			alert('Error fetching repositories')

			setLoadingNewUser(false)
			setUsername('')

			return
		}

		const repositories = responseRepository.map((repo) => {
			return {
				id: repo.id,
				name: repo.name,
				html_url: repo.html_url,
				stargazers_count: repo.stargazers_count,
				created_at: repo.created_at,
				language: repo.language,
				default_branch: repo.default_branch,
			}
		})

		if (repositories.length > 0) {
			const languages = repositories.map((repo) => repo.language)
			const languagesWihoutRepetitions = Array.from(new Set(languages)).filter(
				(language) => language !== null
			)

			const languagesCount = languagesWihoutRepetitions.map((language) => {
				const count = languages.reduce(
					(acc, value) => (value === language ? (acc += 1) : acc),
					0
				)

				return {
					name: language,
					count,
				}
			})

			const languagesCountOrder = languagesCount.sort(
				(languageA, languageB) => languageB.count - languageA.count
			)

			const language_main = languagesCountOrder[0].name

			const newUser: IUser = {
				id,
				username,
				name,
				avatar_url,
				followers,
				following,
				created_at,
				location,
				language_main,
				repositories,
			}

			setUsers([newUser, ...users])

			setLoadingNewUser(false)
			setUsername('')

			history.push('/')

			return
		}

		setLoadingNewUser(false)
		setUsername('')

		history.push('/')

		return
	}

	return (
		<form className="form center-column" onSubmit={handleSubmit}>
			<div className="container-form center-column">
				<div className="form-group">
					<label htmlFor="input-username">
						<h2 className="form-group__label">Username</h2>
					</label>
					<InputText
						name={'input-username'}
						value={username}
						handleOnChange={handleInputUsername}
					/>
				</div>
				<Button text={loadingNewUser ? 'Searching' : 'Search'}></Button>
			</div>
		</form>
	)
}

export default Form
