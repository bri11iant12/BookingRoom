import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayouts'
import { HomePage } from '../../pages/home/ui/HomePage'
import { ProfilePage } from '../../pages/profile/ui/ProfilePage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
		],
	},
])
