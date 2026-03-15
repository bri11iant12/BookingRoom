import { useAuthStore } from '../../../../features/auth'

export const useAuth = () => {
	const user = useAuthStore((state) => state.user)
	const isAuth = useAuthStore((state) => state.isAuth)
	const isLoading = useAuthStore((state) => state.isLoading)
	const login = useAuthStore((state) => state.login)
	const logout = useAuthStore((state) => state.logout)

	return { user, isAuth, isLoading, login, logout }
}