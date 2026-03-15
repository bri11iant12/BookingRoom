import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState, AuthActions } from '../types'
import { User } from '../../../entities/user/types'

/** Фейковые значения для проверки */

const fakeLogin = async (email: string, password: string): Promise<User> => {
	await new Promise((resolve) => setTimeout(resolve, 500))

	if (!email || !password) {
		throw new Error('Email и пароль обязательны')
	}

	const login = email.split('@')[0] || 'Client'
	const normalizedName = login.charAt(0).toUpperCase() + login.slice(1)
	return { id: '1', name: normalizedName, email }
}

const fakeRegister = async (
	name: string,
	phone: string,
	email: string,
	password: string
): Promise<User> => {
	await new Promise((resolve) => setTimeout(resolve, 700))

	if (!name || !phone || !email || !password) {
		throw new Error('Заполните все поля')
	}

	return {
		id: Date.now().toString(),
		name: name.trim(),
		email: email.trim().toLowerCase(),
		phone: phone.trim(),
	}
}
/** Фейковый выход из системы */
const fakeLogout = async (): Promise<void> => {
	await new Promise((resolve) => setTimeout(resolve, 300))
}
/** Тип для хранения данных о пользователе */
type AuthStore = AuthState & AuthActions
/** Хранилище для данных о пользователе */
export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			/** Начальные значения */
			user: null,
			isAuth: false,
			isLoading: false,
			/** Ошибки */
			error: null,
			login: async (email: string, password: string) => {
				set({ isLoading: true, error: null })
				/** Попытка входа в систему */
				try {
					const user = await fakeLogin(email, password)
					set({ user, isAuth: true, isLoading: false, error: null })
				} catch (error) {
					/** Обработка ошибок */
					const message =
						error instanceof Error
							? error.message
							: 'Не удалось выполнить вход'
					set({ isLoading: false, isAuth: false, error: message, user: null })
				}
			},
			register: async (
				name: string,
				phone: string,
				email: string,
				password: string
			) => {
				set({ isLoading: true, error: null })
				try {
					const user = await fakeRegister(name, phone, email, password)
					set({ user, isAuth: true, isLoading: false, error: null })
				} catch (error) {
					const message =
						error instanceof Error
							? error.message
							: 'Не удалось выполнить регистрацию'
					set({ isLoading: false, isAuth: false, error: message, user: null })
				}
			},
			logout: async () => {
				set({ isLoading: true, error: null })
				await fakeLogout()
				set({ user: null, isAuth: false, isLoading: false, error: null })
			},
			setUser: (user: User | null) => {
				set({ user, isAuth: Boolean(user), error: null })
			},
		}),
		{
			name: 'booking159-auth',
			partialize: (state) => ({
				user: state.user,
				isAuth: state.isAuth,
			}),
		}
	)
)