import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/hooks/useAuth'
import { HeaderProps } from '../model/types'
import { AuthModal } from './AuthModal'
import './Header.css'

export const Header = ({ logo, actions }: HeaderProps) => {
	const { isAuth, user, logout } = useAuth()
	const [authMode, setAuthMode] = React.useState<'login' | 'register' | null>(null)

	React.useEffect(() => {
		if (isAuth && authMode) {
			setAuthMode(null)
		}
	}, [isAuth, authMode])

	const closeModal = () => setAuthMode(null)

	return (
		<>
			<header className='header'>
				<Link to='/' className='logo' aria-label='На главную'>
					{logo ?? (
						<>
							<span className='logoMark' aria-hidden='true'>
								B159
							</span>
							<span className='logoText'>Booking159</span>
						</>
					)}
				</Link>

				<div className='actions'>
					{actions ??
						(isAuth ? (
							<>
								<Link to='/profile' className='accountButton'>
									{user?.name ? `Личный кабинет: ${user.name}` : 'Личный кабинет'}
								</Link>
								<button
									className='ghostButton'
									type='button'
									onClick={() => void logout()}
								>
									Выйти
								</button>
							</>
						) : (
							<>
								<button
									className='ghostButton'
									type='button'
									onClick={() => setAuthMode('login')}
								>
									Login
								</button>
								<button
									className='primaryButton'
									type='button'
									onClick={() => setAuthMode('register')}
								>
									Register
								</button>
							</>
						))}
				</div>
			</header>

			{authMode && (
				<AuthModal
					mode={authMode}
					onClose={closeModal}
					onSwitchMode={(mode) => setAuthMode(mode)}
				/>
			)}
		</>
	)
}