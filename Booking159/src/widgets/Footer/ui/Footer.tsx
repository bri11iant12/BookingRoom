import React from 'react'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<span className='footer-copyright'>
					© {new Date().getFullYear()} Booking159. Все права защищены
				</span>
                <nav className='footer-link'>
                    <a href="/about">О нас</a>
                    <a href="/contact">Нащи контакты</a>
                    <a href="/privacy">Политика конфиденциальности</a>
                </nav>
			</div>
		</footer>
	)
}
