export default function getResponseFromAPI() {
  const response = true;
  return new Promise((resolve, reject) => {
    if (response) {
      resolve();
    } else {
      reject();
    }
  });
}
