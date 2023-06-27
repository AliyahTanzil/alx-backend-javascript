function signUpUser(firstName, lastName) {
    const userObject = {
      firstName: firstName,
      lastName: lastName
    };

    return Promise.resolve(userObject);
  }