import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../../widgets/Footer'
import { Header } from '../../../widgets/Header'
import './MainLayouts.css'

export const MainLayout: React.FC = () => {
	return (
		<div className='main-layout'>
			<Header />
			<main className='main-layout__content'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}