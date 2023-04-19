export default function getFullResponseFromAPI(success) {
  const body = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve(body);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
