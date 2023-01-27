import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
	//let firstName;
	//let lastName;
	//let body;

  const photo = uploadPhoto();
  const user = createUser();
	//const object = JSON.parse(photo)

  return Promise.all([photo, user])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
