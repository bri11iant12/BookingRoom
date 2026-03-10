import React from 'react'
import { useSpecialists, SpecialistCard } from '../../../entities/specialist'

export const HomePage: React.FC = () => {
	const { data: specialist, isLoading, error } = useSpecialists()

	if (isLoading) {
		return <div className='home-page__loading'>Загрузка специалистов...</div>
	}

	if (error) {
		return <div className='home-page__error'>Ошибка загрузки</div>
	}

	return (
		<div className='home-page'>
			<div className='home-page__container'>
				<h1 className='home-page__title'>Наши специалисты</h1>
				<div className='home-page__list'>
					{specialist?.map(specialist => (
						<SpecialistCard key={specialist.id} specialist={specialist} />
					))}
				</div>
			</div>
		</div>
	)
}
