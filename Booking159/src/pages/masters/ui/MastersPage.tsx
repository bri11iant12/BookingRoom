import React from 'react'
import { Specialists } from '../../../entities/specialist/api'
import './MastersPage.css'

export const MastersPage: React.FC = () => {
	return (
		<section className='masters-page'>
			<div className='masters-page__container'>
				<h1 className='masters-page__title'>Наши мастера</h1>
				<p className='masters-page__subtitle'>
					Выбирайте мастера по специализации, опыту и рейтингу.
				</p>

				<div className='masters-page__grid'>
					{Specialists.map((specialist) => (
						<article className='masters-page__card' key={specialist.id}>
							<img
								className='masters-page__avatar'
								src={specialist.avatar || '/ava-id2.jpg'}
								alt={`${specialist.name} ${specialist.surname}`}
							/>
							<h2 className='masters-page__name'>
								{specialist.name} {specialist.surname}
							</h2>
							<p className='masters-page__specialty'>{specialist.specialty}</p>
							<p className='masters-page__meta'>
								Рейтинг: {specialist.rating || '-'} | Опыт: {specialist.experience || '-'}
							</p>
							<p className='masters-page__description'>
								{specialist.descriptions || 'Профессиональный мастер салона'}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
