import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'
import { ReactComponent as LogoSvg } from '../../assets/logo-github.svg'

const Header = () => (
	<header className="header center-row">
		<Link to="/" className="header__container center-row">
			<LogoSvg />
			<h1 className="header__container__title">GitDevs</h1>
		</Link>
	</header>
)

export default Header
