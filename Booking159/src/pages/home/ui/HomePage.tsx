import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export const HomePage: React.FC = () => {
	return (
		<section className='home-page'>
			<div className='home-page__container'>
				<p className='home-page__brand'>Booking159 Beauty</p>
				<h1 className='home-page__title'>Booking159</h1>

				<div className='home-page__info'>
					<div className='home-page__item'>
						<span>Время работы</span>
						<strong>Пн-Вс: 10:00 - 21:00</strong>
					</div>
					<div className='home-page__item'>
						<span>Адрес</span>
						<strong>г. Пермь, ул. Ленина, 159</strong>
					</div>
					<div className='home-page__item'>
						<span>Поддержка</span>
						<strong>+7 (912) 123-45-67</strong>
					</div>
				</div>

				<div className='home-page__actions'>
					<Link to='/services' className='home-page__button'>
						Услуги
					</Link>
					<Link to='/masters' className='home-page__button home-page__button--ghost'>
						Мастера
					</Link>
				</div>
			</div>
		</section>
	)
}
