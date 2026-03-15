import React from 'react'
import './HomePage.css'

export const HomePage: React.FC = () => {
	return (
		<div className='home-page'>
			<section className='home-page__hero'>
				<div className='home-page__overlay'>
					<p className='home-page__brand'>Booking159 Beauty</p>
					<h1 className='home-page__title'>Найди свой идеальный образ</h1>
					<p className='home-page__subtitle'>
						Современный салон красоты для тех, кто ценит качество, уют и
						профессиональных мастеров.
					</p>
					<a className='home-page__button' href='#services'>
						Выбрать услугу
					</a>
				</div>
			</section>

			<section className='home-page__features'>
				<div className='home-page__feature'>
					<span className='home-page__feature-title'>Время работы</span>
					<p className='home-page__feature-text'>Пн-Вс: 10:00 - 21:00</p>
				</div>
				<div className='home-page__feature'>
					<span className='home-page__feature-title'>Адрес</span>
					<p className='home-page__feature-text'>г. Пермь, ул. Ленина, 159</p>
				</div>
				<div className='home-page__feature'>
					<span className='home-page__feature-title'>Поддержка</span>
					<p className='home-page__feature-text'>+7 (912) 123-45-67</p>
				</div>
			</section>

			<section className='home-page__section home-page__section--rooms' id='services'>
				<div className='home-page__section-head'>
					<h2 className='home-page__section-title'>Популярные услуги</h2>
					<p className='home-page__section-subtitle'>
						Подбор процедур под ваш стиль и настроение
					</p>
				</div>
				<div className='home-page__cards'>
					<article className='home-page__card'>
						<span className='home-page__card-tag'>Хит</span>
						<h3 className='home-page__card-title'>Брови и ресницы</h3>
						<p className='home-page__card-text'>
							Коррекция формы, окрашивание и ламинирование для выразительного
							взгляда.
						</p>
						<a className='home-page__card-link' href='#'>
							Подробнее
						</a>
					</article>
					<article className='home-page__card'>
						<span className='home-page__card-tag'>Топ</span>
						<h3 className='home-page__card-title'>Маникюр и педикюр</h3>
						<p className='home-page__card-text'>
							Классика, аппаратный уход и современные дизайны с премиум
							материалами.
						</p>
						<a className='home-page__card-link' href='#'>
							Подробнее
						</a>
					</article>
					<article className='home-page__card'>
						<span className='home-page__card-tag'>Новый</span>
						<h3 className='home-page__card-title'>Макияж и укладка</h3>
						<p className='home-page__card-text'>
							Дневные и вечерние образы, свадебный макияж и укладки любой
							сложности.
						</p>
						<a className='home-page__card-link' href='#'>
							Подробнее
						</a>
					</article>
				</div>
			</section>

			<section className='home-page__experience'>
				<div className='home-page__experience-gallery'>
					<div className='home-page__experience-image home-page__experience-image--one' />
					<div className='home-page__experience-image home-page__experience-image--two' />
				</div>
				<div className='home-page__experience-content'>
					<h2 className='home-page__section-title'>
						Премиальный сервис, который хочется повторить
					</h2>
					<p className='home-page__experience-text'>
						Каждая запись в Booking159 - это внимание к деталям, стерильность,
						современные техники и мастера с сильным портфолио. Мы создаем
						красоту, которая подчеркивает вашу индивидуальность.
					</p>
					<a className='home-page__button home-page__button--ghost' href='#'>
						Записаться сейчас
					</a>
				</div>
			</section>

			<section className='home-page__testimonials'>
				<div className='home-page__overlay'>
					<h2 className='home-page__section-title'>Отзывы клиентов</h2>
					<blockquote className='home-page__quote'>
						"Очень уютная атмосфера и мастера, которые действительно слышат
						клиента. Результат превзошел ожидания!"
					</blockquote>
					<p className='home-page__quote-author'>Максим Л., Пермь</p>
				</div>
			</section>
		</div>
	)
}
