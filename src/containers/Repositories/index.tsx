import React from 'react'

import './styles.css'

interface IRepository {
	id: number
	name: string
	html_url: string
	stargazers_count: number
	created_at: Date
	language: string
	default_branch: string
}

interface Props {
	repositories: IRepository[]
}

const Repositories: React.FC<Props> = ({ repositories }) => {
	return <div />
}

export default Repositories
