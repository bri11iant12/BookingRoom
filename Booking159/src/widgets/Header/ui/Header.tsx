import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/hooks/useAuth'
import { HeaderProps } from '../model/types'
import styles from './Header.module.css'

export const Header = ({ logo, actions }: HeaderProps) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logo} aria-label='На главную'>
				{logo ?? (
					<>
						<span className={styles.logoMark} aria-hidden='true'>
							B159
						</span>
						<span className={styles.logoText}>Booking159</span>
					</>
				)}
			</Link>

			<div className={styles.actions}>
				{actions ??
					(isAuth ? (
						<Link to='/profile' className={styles.accountButton}>
							Личный кабинет
						</Link>
					) : (
						<>
							<Link to='/login' className={styles.ghostButton}>
								Login
							</Link>
							<Link to='/register' className={styles.primaryButton}>
								Register
							</Link>
						</>
					))}
			</div>
		</header>
	)
}