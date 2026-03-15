import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../widgets/Header/model/hooks/useAuth'
import './ProfilePage.css'

export const ProfilePage: React.FC = () => {
	const { user, isAuth, logout } = useAuth()

	if (!isAuth || !user) {
		return (
			<section className='profile-page profile-page--guest'>
				<div className='profile-page__container'>
					<h1 className='profile-page__title'>Личный кабинет</h1>
					<p className='profile-page__text'>
						Вы не авторизованы. Войдите в аккаунт через кнопку в шапке.
					</p>
					<Link to='/' className='profile-page__link'>
						На главную
					</Link>
				</div>
			</section>
		)
	}

	return (
		<section className='profile-page'>
			<div className='profile-page__container'>
				<h1 className='profile-page__title'>Личный кабинет</h1>

				<div className='profile-page__card'>
					<div className='profile-page__avatarWrap'>
						<img
							className='profile-page__avatar'
							src={user.avatar}
							alt={user.name}
						/>
					</div>
					<div className='profile-page__info'>
						<p className='profile-page__row'>
							<span>Имя</span>
							<strong>{user.name}</strong>
						</p>
						<p className='profile-page__row'>
							<span>Почта</span>
							<strong>{user.email}</strong>
						</p>
						<p className='profile-page__row'>
							<span>Телефон</span>
							<strong>{user.phone || 'Не указан'}</strong>
						</p>
					</div>
				</div>

				<div className='profile-page__actions'>
					<Link to='/' className='profile-page__link'>
						Вернуться на главную
					</Link>
					<button className='profile-page__logout' type='button' onClick={() => void logout()}>
						Выйти из аккаунта
					</button>
				</div>
			</div>
		</section>
	)
}
