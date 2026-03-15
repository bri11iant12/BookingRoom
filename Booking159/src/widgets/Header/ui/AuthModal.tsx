import React, { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../model/hooks/useAuth'
import './AuthModal.css'

type AuthMode = 'login' | 'register'

interface AuthModalProps {
	mode: AuthMode
	onClose: () => void
	onSwitchMode: (mode: AuthMode) => void
}

export const AuthModal: React.FC<AuthModalProps> = ({
	mode,
	onClose,
	onSwitchMode,
}) => {
	const { isLoading, error, login, register } = useAuth()

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [localError, setLocalError] = useState<string | null>(null)

	useEffect(() => {
		setLocalError(null)
		setPassword('')
		setConfirmPassword('')
	}, [mode])

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [onClose])

	const submitLabel = mode === 'login' ? 'Войти' : 'Зарегистрироваться'
	const title = mode === 'login' ? 'Вход в аккаунт' : 'Создание аккаунта'

	const validationError = useMemo(() => {
		if (mode === 'register' && password !== confirmPassword) {
			return 'Пароли не совпадают'
		}

		return null
	}, [mode, password, confirmPassword])

	const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		setLocalError(null)

		if (mode === 'register' && validationError) {
			setLocalError(validationError)
			return
		}

		if (mode === 'login') {
			await login(email, password)
			return
		}

		await register(name, phone, email, password)
	}

	return (
		<div className='overlay' onClick={onClose}>
			<div
				className='modal'
				role='dialog'
				aria-modal='true'
				aria-labelledby='auth-modal-title'
				onClick={(event) => event.stopPropagation()}
			>
				<button className='closeButton' onClick={onClose} type='button'>
					×
				</button>
				<h3 className='title' id='auth-modal-title'>
					{title}
				</h3>

				<form className='form' onSubmit={handleSubmit}>
					{mode === 'register' && (
						<>
							<label className='label'>
								Ваше имя
								<input
									className='input'
									value={name}
									onChange={(event) => setName(event.target.value)}
									autoComplete='name'
									required
								/>
							</label>
							<label className='label'>
								Номер телефона
								<input
									className='input'
									value={phone}
									onChange={(event) => setPhone(event.target.value)}
									autoComplete='tel'
									required
								/>
							</label>
						</>
					)}

					<label className='label'>
						Почта
						<input
							className='input'
							type='email'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							autoComplete='email'
							required
						/>
					</label>

					<label className='label'>
						Пароль
						<div className='passwordWrap'>
							<input
								className='input'
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
								required
							/>
							<button
								className='toggle'
								type='button'
								onClick={() => setShowPassword((value) => !value)}
							>
								{showPassword ? 'Скрыть' : 'Показать'}
							</button>
						</div>
					</label>

					{mode === 'register' && (
						<label className='label'>
							Повтор пароля
							<div className='passwordWrap'>
								<input
									className='input'
									type={showConfirmPassword ? 'text' : 'password'}
									value={confirmPassword}
									onChange={(event) => setConfirmPassword(event.target.value)}
									autoComplete='new-password'
									required
								/>
								<button
									className='toggle'
									type='button'
									onClick={() => setShowConfirmPassword((value) => !value)}
								>
									{showConfirmPassword ? 'Скрыть' : 'Показать'}
								</button>
							</div>
						</label>
					)}

					{(localError || error) && (
						<p className='error'>{localError ?? error}</p>
					)}

					<button className='submit' disabled={isLoading} type='submit'>
						{isLoading ? 'Подождите...' : submitLabel}
					</button>
				</form>

				<div className='switcher'>
					{mode === 'login' ? (
						<>
							<span>Нет аккаунта?</span>
							<button
								className='switchButton'
								type='button'
								onClick={() => onSwitchMode('register')}
							>
								Регистрация
							</button>
						</>
					) : (
						<>
							<span>Уже есть аккаунт?</span>
							<button
								className='switchButton'
								type='button'
								onClick={() => onSwitchMode('login')}
							>
								Войти
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
