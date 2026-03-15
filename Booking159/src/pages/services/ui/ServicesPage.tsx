import React from 'react'
import { Specialists } from '../../../entities/specialist/api'
import { Services } from '../../../entities/service'
import './ServicesPage.css'

const slotsByServiceId: Record<string, string[]> = {
	'0': ['Сегодня 13:00', 'Сегодня 17:30', 'Завтра 12:00'],
	'1': ['Сегодня 15:00', 'Завтра 11:30', 'Завтра 18:00'],
	'2': ['Сегодня 14:30', 'Завтра 10:30', 'Сб 16:00'],
}

export const ServicesPage: React.FC = () => {
	const pairs = Services.map((service, index) => {
		const specialist = Specialists[index % Specialists.length]
		return { service, specialist }
	})

	return (
		<section className='services-page'>
			<div className='services-page__container'>
				<h1 className='services-page__title'>Услуги и запись к мастерам</h1>
				<p className='services-page__subtitle'>
					Выберите услугу, познакомьтесь с мастером и выберите удобное время записи.
				</p>

				<div className='services-page__grid'>
					{pairs.map(({ service, specialist }) => (
						<article className='services-page__card' key={`${service.id}-${specialist.id}`}>
							<div className='services-page__tag'>Мастер-Услуга</div>
							<h2 className='services-page__serviceName'>{service.name}</h2>
							<p className='services-page__serviceDescription'>
								{service.descriptions || 'Индивидуальный подход и премиальные материалы.'}
							</p>

							<div className='services-page__master'>
								<img
									className='services-page__avatar'
									src={specialist.avatar || '/ava-id2.jpg'}
									alt={`${specialist.name} ${specialist.surname}`}
								/>
								<div className='services-page__masterInfo'>
									<strong>{specialist.name + ' ' + specialist.surname}</strong>
									<span>{specialist.specialty}</span>
									<span>
										Рейтинг {specialist.rating || '-'} | Опыт {specialist.experience || '-'}
									</span>
								</div>
							</div>

							<div className='services-page__slotsBlock'>
								<h3 className='services-page__slotsTitle'>Ближайшие записи</h3>
								<ul className='services-page__slotsList'>
									{(slotsByServiceId[service.id] || []).map((slot) => (
										<li className='services-page__slot' key={slot}>
											{slot}
										</li>
									))}
								</ul>
							</div>

							<button className='services-page__bookButton' type='button'>
								Записаться
							</button>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
