import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      console.log('body:', userResponse.body);
      console.log('firstName:', userResponse.firstName);
      console.log('lastName:', userResponse.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
