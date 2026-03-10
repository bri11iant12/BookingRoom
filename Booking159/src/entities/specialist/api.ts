//Тут тестовые значения Специалистов которые будут браться с реального API и с БД

import { Specialist } from './types'

export const Specialists: Specialist[] = [
	{
		id: '0',
		name: 'Мария',
		surname: 'Петрова',
		specialty: 'Бровист',
		avatar: '',
		rating: 4.8,
		experience: '10 лет',
		descriptions: 'Опытный бровист, делает красивый перманент и макияж',
	},
	{
		id: '1',
		name: 'Кристина',
		surname: 'Иванова',
		specialty: 'Мастер по маникюру',
		avatar: '',
		rating: 4.7,
		experience: '5 лет',
		descriptions: 'Делаем красивый маникюр, наращивание',
	},
	{
		id: '2',
		name: 'Ольга',
		surname: 'Кильянова',
		specialty: 'Визажист',
		avatar: '',
		rating: 4.9,
		experience: '6 лет',
		descriptions: 'Создаем красивый стиль для вас',
	},
]

export async function fetchSpecialists(): Promise<Specialist[]> {
	/**Тут я просто имитирую сеть */
    return new Promise(resolve => {
		setTimeout(() => resolve(Specialists), 500)
	})
}
