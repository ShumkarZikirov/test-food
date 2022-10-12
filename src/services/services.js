import axios from 'axios'
import product from '../components/main/main'
axios.defaults.baseURL = 'https://themealdb.com/api/json/v1/1/'

 const getCategory = () => {
    return axios.get('filter.php?i')
}
const getSearch = (value) => {
    return axios.get(`search.php?s=${value}`)
}
const getCountry = (value) => {
    return axios.get(`filter.php?a=${value}`)
}
const getLetter = (value) => {
    return axios.get(`search.php?f=${value}`)
}
const getDetalis = (id) => {
    return axios.get(`lookup.php?i=${id}`)
}

const post = (products) => {
    const token = '5021816572:AAFeHhlrsZ4MfkDZa3ko7JmDyr91YylOpJ8';
    const chat_id = '1009620283';
    const api = `https://api.telegram.org/bot${token}/sendMessage`;
    return axios.post(api, {
        parse_mode: 'HTML',
        text: `Имя: ${products.name}\n\ Фамилия: ${products.lastName}\n\ Номер телефона: ${products.number} \n\ Название товара:${products.title}`,chat_id
    })
}
export const services = {
    getCategory,
    getSearch,
    getCountry,
    getLetter,
    post,
    getDetalis
}