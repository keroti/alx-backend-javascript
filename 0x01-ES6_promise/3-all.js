import { uploadPhoto, createUser } from '../utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((func) => {
      console.log(`${func[0]} ${func[1].firstName} ${func[1].lastName}`);
    })
    .catch(() => {
      console.log(`Signup system offline`);
    });
}




