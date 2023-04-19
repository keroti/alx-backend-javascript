import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((func) => {
    const arr = [];
    // eslint-disable-next-line
    for (const item of func) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
