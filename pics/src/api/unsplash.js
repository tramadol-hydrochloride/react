import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID uLuF0LHL-c1RP2XJ7sPC13iQdO5d1t4mGUCXIB8BhHk'
    }
});

/*
onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
        params: { query: term },
        headers: {
            Authorization: 'Client-ID 34e39e5c2f447ce52009a515846ca2b6ccc35552bb63de59cf4a6d06728f3f7e'
        }
    });
};
*/