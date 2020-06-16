import React from 'react'

import Dayjs from 'dayjs'

import './styles.css'
import UserProfileData from '../../components/UserProfileData'

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
	user: IUser
}

const UserProfileCard: React.FC<Props> = ({ user }) => {
	return (
		<section className="user-profile-card">
			<article className="user-profile-card__profile">
				<img
					src={user.avatar_url}
					alt={user.name}
					className="user-profile-card__avatar"
				/>
				<h2 className="user-profile-card__name">{user.name}</h2>
				<p className="user-profile-card__username">@{user.username}</p>
			</article>
			<div className="user-profile-card__datas">
				<div className="user-profile-card__datas__column">
					<UserProfileData
						name={'Since'}
						value={String(Dayjs(user.created_at).get('year'))}
					/>
					<UserProfileData name={'Language'} value={user.language_main} />
				</div>
				<div className="user-profile-card__datas__column">
					<UserProfileData name={'Followers'} value={String(user.followers)} />
					<UserProfileData name={'Following'} value={String(user.following)} />
				</div>
				<div className="user-profile-card__datas__column">
					<UserProfileData
						name={'Location'}
						value={String(user.location || `Doesn't have`)}
					/>
					<UserProfileData
						name={'Repositories'}
						value={String(user.repositories.length)}
					/>
				</div>
			</div>
		</section>
	)
}

export default UserProfileCard
