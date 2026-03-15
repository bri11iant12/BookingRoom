import { useAuthStore } from '../../../../features/auth'

export const useAuth = () => {
	const user = useAuthStore((state) => state.user)
	const isAuth = useAuthStore((state) => state.isAuth)
	const isLoading = useAuthStore((state) => state.isLoading)
	const error = useAuthStore((state) => state.error)
	const login = useAuthStore((state) => state.login)
	const register = useAuthStore((state) => state.register)
	const logout = useAuthStore((state) => state.logout)

	return { user, isAuth, isLoading, error, login, register, logout }
}