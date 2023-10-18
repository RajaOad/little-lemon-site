// bookingUtils.js

// Import the fetchAPI function or other dependencies as needed
import fetchAPI from './api/availableTimes';

// Function to initialize available booking times
export const initializeTimes = async (dispatchTimes) => {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
    const availableTimes = await fetchAPI.fetchAvailableTimes(formattedDate);
    dispatchTimes({ type: 'INITIALIZE', times: availableTimes });
  } catch (error) {
    console.error('Error fetching available times:', error);
  }
};

// Function to update available booking times based on the selected date
export const updateTimes = async (dispatchTimes, formData) => {
  try {
    const selectedDate = formData.date;
    const availableTimes = await fetchAPI.fetchAvailableTimes(selectedDate);
    dispatchTimes({ type: 'UPDATE_TIMES', times: availableTimes });
  } catch (error) {
    console.error('Error fetching available times:', error);
  }
};
