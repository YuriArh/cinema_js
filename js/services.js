const API_KEY = '8232974f7f4a55def2dbff9d4495ae3a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error(err));



export const getTrends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url)

};