function uploadPhoto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ body: "photo-profile-1" });
      }, 100);
    });
  }
  
  function createUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ firstName: "Peter", lastName: "Keroti" });
      }, 200);
    });
  }
  
export { uploadPhoto, createUser };
  