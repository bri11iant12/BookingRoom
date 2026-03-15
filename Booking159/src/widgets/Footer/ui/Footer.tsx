import React from 'react'
import './Footer.css'

export const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-top'>
					<div className='footer-brand'>
						<div className='footer-logo'>Booking159 Beauty</div>
						<p className='footer-description'>
							Салон красоты в центре Перми. Забота о деталях, комфорт и сервис,
							который хочется повторить.
						</p>
					</div>

					<div className='footer-block'>
						<h4 className='footer-title'>Контакты</h4>
						<ul className='footer-list'>
							<li>
								<a href='tel:+79121234567'>tel: +7 (912) 123-45-67</a>
							</li>
							<li>
								<a href='mailto:hello@booking159.ru'>mail: hello@booking159.ru</a>
							</li>
							<li>
								<a href='https://t.me/booking159' target='_blank' rel='noreferrer'>
									tg: @booking159
								</a>
							</li>
							<li>
								<a
									href='https://instagram.com/booking159'
									target='_blank'
									rel='noreferrer'
								>
									inst: @booking159
								</a>
							</li>
							<li>
								<a href='https://vk.com/booking159' target='_blank' rel='noreferrer'>
									vk: booking159
								</a>
							</li>
						</ul>
					</div>

					<div className='footer-block'>
						<h4 className='footer-title'>Адрес и время</h4>
						<ul className='footer-list'>
							<li>г. Пермь, ул. Ленина, 159</li>
							<li>Пн-Вс: 10:00-21:00</li>
							<li>Запись ежедневно, без выходных</li>
						</ul>
					</div>

					<div className='footer-block'>
						<h4 className='footer-title'>Навигация</h4>
						<ul className='footer-list'>
							<li>
								<a href='#services'>Услуги</a>
							</li>
							<li>
								<a href='/about'>О нас</a>
							</li>
							<li>
								<a href='/privacy'>Политика конфиденциальности</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer-bottom'>
					<span>© {year} Booking159. Все права защищены.</span>
					<span>Сделано с любовью к красоте</span>
					<span>Сделано Максимом Ли</span>
				</div>
			</div>
		</footer>
	)
}
