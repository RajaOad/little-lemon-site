// Mock API to simulate fetching available reservation times
const availableTimesAPI = {
    // Define available times for different dates (in a real-world scenario, this data would come from a database)
    availableTimes: {
      '2023-10-17': ['12:00 PM', '1:00 PM', '3:00 PM'],
      '2023-10-18': ['12:00 PM', '2:00 PM', '4:00 PM'],
    },
  
    // Function to fetch available times for a given date
    fetchAvailableTimes: (date) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (availableTimesAPI.availableTimes[date]) {
            resolve(availableTimesAPI.availableTimes[date]);
          } else {
            reject(new Error('No available times for this date.'));
          }
        }, 1000); // Simulating an asynchronous API call with a delay
      });
    },
  };
  
  export default availableTimesAPI;
  