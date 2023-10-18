// Mock API to simulate submitting a reservation form
const reservationAPI = {
    // Function to submit the reservation form data
    submitForm: (formData) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful form submission
          resolve({ success: true, message: 'Reservation submitted successfully.' });
          // In a real-world scenario, you would handle form submissions to a server here.
        }, 1000); // Simulating an asynchronous API call with a delay
      });
    },
  };
  
  export default reservationAPI;
  