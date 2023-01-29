import axios from 'axios';

const API_KEY = '31187962-e7df80d652d1f0f281ee6ae38';
const BASE_URL = 'https://pixabay.com/api/';
const PARAMS = 'image_type=photo&orientation=horizontal';

axios.defaults.baseURL = BASE_URL;

 const getPhoto = async ( query, page, per_Page) => {
    
    try {
        const {data} = await axios.get(
          `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${PARAMS}&per_page=${per_Page}`
        );
        // console.log('DATA', data);
        return data;
        
    } 
    catch (error) {
        console.log(error);
    }
};

export default getPhoto;
