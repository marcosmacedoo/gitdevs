import React from 'react'

import './styles.css'

interface Props {
	name: string
	value: string
}

const UserProfileData: React.FC<Props> = ({ name, value }) => {
	return (
		<div className="user-profile-card__datas__data">
			<div className="user-profile-card__datas__data__barra-vertical"></div>
			<h2 className="user-profile-card__datas__data__name">{name}</h2>
			<h3 className="user-profile-card__datas__data__value">{value}</h3>
		</div>
	)
}

export default UserProfileData
