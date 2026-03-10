export interface Specialist {
	id: string  //ID специалиста
	name: string    //Имя
	surname: string;    //Фамилия
    specialty: string;  //Специализация
    avatar?: string;    //Аватарка
    rating?: number;    //Рейтинг
    experience?: string;    //Кол-во опыта
    descriptions?: string;  //Описание
}