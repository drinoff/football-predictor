const API_KEY = process.env.FOOTBALL_API_KEY;

const getApiKey = () => {
    console.log(API_KEY)
    return API_KEY;
}

export default getApiKey;