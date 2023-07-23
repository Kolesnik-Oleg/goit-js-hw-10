import Notiflix from 'notiflix';

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_G1x74VEfu87pgKzZyMNtvA7INyGZg3A3OpJZO3MBNQhZY51AiLN4jdrvtxYZBVcv';
 axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  return axios
    .get(`breeds/`)
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.status);
      }
      return resp.data;
    })
    .catch(() => {
      Notiflix.Report.failure('Щось пышло не так. Маємо помилку в catch!');
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.status);
      }
      return resp.data[0];
    })
    .catch(() => {
      Notiflix.Report.failure('Щось пышло не так. Маємо помилку в catch!');
    });
}

export { fetchBreeds, fetchCatByBreed };