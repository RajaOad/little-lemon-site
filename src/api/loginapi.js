// Mock API to simulate submitting a login form
const loginAPI = {
    // Function to submit the login form data
    login: (userData) => {
        const random = Math.random();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful login
          if (random < 0.5) {
            resolve({ success: true, message: 'Login successful.' });
          } else {
            // Simulate a failed login
            reject({ success: false, message: 'Invalid email or password.' });
          }
          // In a real-world scenario, you would handle logins with a server here.
        }, 1000); // Simulating an asynchronous API call with a delay
      });
    },
  };
  
  export default loginAPI;
  