import React, { useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import  fetchAPI  from '../api/availableTimes'; // Import the fetchAPI function from the API library
import { useNavigate } from 'react-router-dom';
import  submitAPI  from '../api/submitForm';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';



function BookingPage() {

   // Initial available times
   const initialAvailableTimes = [
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    // Add more time options here
  ];

  const availableOccasions = [
    'Birthday',
    'Anniversary',
    'Other',
    // Add more occasion options here
  ];

  const initialValues = {
    date: '',
    time: '12:00 PM',
    guests: 1,
    occasion: 'Birthday',
  };
  
  const validationSchema = Yup.object().shape({
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().min(1, 'Number of guests must be at least 1').required('Guests is required'),
    occasion: Yup.string().required('Occasion is required'),
  });



   // Reducer to update available times based on the selected date
   const timesReducer = (state, action) => {
    if (action.type === 'INITIALIZE') {
      // Initialize available times
      return action.times;
    }
    if (action.type === 'UPDATE_TIMES') {
      // Update available times based on the selected date
      return action.times;
    }
    return state;
  };

  const navigate = useNavigate();

  const submitReservationForm = async (formData) => {
    try {
      // Use the mock API to submit the form data
      const response = await submitAPI.submitForm(formData);

      // Handle the response (e.g., display success message)
      toast.success(response.message, {
        position: "top-left",
        autoClose: 5000,
        });
        navigate('/confirmation');
    } catch (error) {
      // Handle form submission error (e.g., display an error message)
      toast.error('Form Submission Error', {
        position: "top-left",
        autoClose: 5000,
        });
    }
  };

  const handleSubmit = async (values) => {
    await submitReservationForm(values);
};


  const [availableTimes, dispatchTimes] = useReducer(timesReducer, initialAvailableTimes);

  useEffect(() => {
    // Function to initialize available times based on today's date
    const initializeTimes = async () => {
      try {
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10);
        const availableTimes = await fetchAPI.fetchAvailableTimes(formattedDate);
        dispatchTimes({ type: 'INITIALIZE', times: availableTimes });
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    initializeTimes();
  }, []); // Run once on component mount

  return (
    <section className='main'>
      <div className='form-sec'>
    <div>
    <h2 className='sec-title'>Make a Reservation</h2>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
           <BookingForm availableTimes={availableTimes} availableOccasions={availableOccasions} dispatchTimes={dispatchTimes} submitForm={submitReservationForm} isSubmitting={isSubmitting} isValid={isValid} />
        )}
      </Formik>
    {/* Additional content can go here */}
    </div>
    <div className='booking-slots'>
    <div>
      <h3>Existing Booked Slots</h3>
      {/* Implement logic to display existing booked slots here */}
      <BookingSlot time="7:00 PM" isBooked={true} />
      <BookingSlot time="8:00 PM" isBooked={true} />
    </div>
    <div>
      <h3>Available Booking Slots</h3>
      {availableTimes.map((time, index) => (
        <BookingSlot key={index} time={time} isBooked={false} />
      ))}
    </div>
    </div>
    </div>
  </section>
  );
}

export default BookingPage;
