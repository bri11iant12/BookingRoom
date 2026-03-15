import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
	
	return (
		<div className='home-page'>
				<h1 className='home-page__title'>Booking159</h1>
				<div className='home-page__container'>
					<a className='home-page__link' href='#'>Наши специлисты</a>
					<a className='home-page__link' href='#'>Наши услуги</a>
				</div>
		</div>
	)
}
