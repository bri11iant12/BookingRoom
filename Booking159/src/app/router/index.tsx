import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayouts'
import { HomePage } from '../../pages/home/ui/HomePage'
import { ProfilePage } from '../../pages/profile/ui/ProfilePage'
import { ServicesPage } from '../../pages/services/ui/ServicesPage'

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
			{
				path: 'services',
				element: <ServicesPage />,
			},
		],
	},
])
