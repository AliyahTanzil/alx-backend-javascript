export default function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
      // Simulating an error case
      const error = new Error(`$${fileName} cannot be processed`);
      reject(error);
    });
  }