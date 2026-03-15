import { useAuthStore } from '../../../../features/auth'

export const useAuth = () => {
	const { user, isAuth, isLoading, login, logout } = useAuthStore((state) => ({
		user: state.user,
		isAuth: state.isAuth,
		isLoading: state.isLoading,
		login: state.login,
		logout: state.logout,
	}))

	return { user, isAuth, isLoading, login, logout }
}