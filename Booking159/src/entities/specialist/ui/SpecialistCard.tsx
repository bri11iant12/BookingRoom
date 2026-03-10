import React from 'react'
import { Specialist } from '../types'

interface SpecialistCardProps {
	specialist: Specialist
}

export const SpecialistCard: React.FC<SpecialistCardProps> = ({
	specialist,
}) => {
	return (
		<div className='specialist-card'>
			<div className='specialist-card__main'>
				<img
					src={specialist.avatar || '/default-avatar.png'}
					alt={specialist.name}
					className='specialist-card__avatar'
				/>
				<div className='specialist-card__info'>
					<h3 className='specialist-card__name'>{specialist.name}</h3>
					<p className='specialist-card__specialty'>{specialist.specialty}</p>
					<div className='specialist-card__meta'>
						{specialist.rating && (
							<span className='specialist-card__rating'>
								Рейтинг: {specialist.rating} ★
							</span>
						)}
						{specialist.experience && (
							<span className='specialist-card__experience'>
								Опыт: {specialist.experience} лет
							</span>
						)}
					</div>
				</div>
			</div>
			{specialist.descriptions && (
				<p className='specialist-card__description'>{specialist.descriptions}</p>
			)}
		</div>
	)
}
