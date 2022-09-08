import axios from 'axios'

const BASE_URL='https://youtube-v31.p.rapidapi.com/search';

const options = {
  url: BASE_URL,
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '75a3161b47msh6d6be0e179b4cd6p1b99bejsn7b2b46e92dab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});