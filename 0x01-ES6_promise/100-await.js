// Import the necessary functions from utils.js
const { uploadPhoto, createUser } = require('./utils.js')

// Define the asyncUploadUser function
async function asyncUploadUser () {
  try {
    // Call the uploadPhoto and createUser functions asynchronously
    const photoPromise = uploadPhoto()
    const userPromise = createUser()

    // Await the resolutions of both promises
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise])

    // Return an object with the responses
    return { photo: photoResponse, user: userResponse }
  } catch (error) {
    console.error('Error uploading user:', error)
    return {} // Return an empty object if there was an error
  }
}

// Call the asyncUploadUser function
asyncUploadUser()
  .then((result) => {
    console.log('Upload user result:', result)
  })
  .catch((error) => {
    console.error('Error in asyncUploadUser:', error)
  })

const test = async () => {
  const value = await asyncUploadUser()
  console.log(value)
}

test()
