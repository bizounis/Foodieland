import axios from 'axios'

export const baseUrl = 'https://tasty.p.rapidapi.com'

export const fetchApi = async(url) => {
const { data } = await axios.get((url),{
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': '6e448cea41msh2aedbe3f04205b7p1d77b3jsnad62131be430'
  }
})

return data;
}