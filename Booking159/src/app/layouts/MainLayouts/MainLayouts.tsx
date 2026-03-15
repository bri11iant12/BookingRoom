import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../../widgets/Footer'
import { Header } from '../../../widgets/Header'
import './MainLayouts.css'

export const MainLayout: React.FC = () => {
	return (
		<div className='main-layout'>
			<Header logo={<span className='main-layout__logo'>Booking159</span>} />
			<main className='main-layout__content'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}