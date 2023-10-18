import React, { useEffect} from 'react';
import { Form, Field, ErrorMessage, useFormikContext } from 'formik';
import  fetchAPI  from '../api/availableTimes'; // Import the fetchAPI function from the API library
import { toast } from 'react-toastify';

function BookingForm({ availableTimes, availableOccasions, dispatchTimes, isSubmitting, isValid }) {

  const { values } = useFormikContext();

  useEffect(() => {
    if (values.date) {
      // Function to update available times based on the selected date
      const updateTimes = async () => {
        try {
          const selectedDate = values.date;
          const availableTimes = await fetchAPI.fetchAvailableTimes(selectedDate);
          dispatchTimes({ type: 'UPDATE_TIMES', times: availableTimes });
        } catch (error) {
          toast.error(error.message, {
            position: "top-left",
            autoClose: 5000,
            });
        }
      };
  
      updateTimes();
    }
  }, [values.date, dispatchTimes]); // Watch for changes in the 'date' field

  return (

      <Form className="booking-form">
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <Field type="date" id="date" name="date" required />
          <ErrorMessage name="date" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <Field as="select" id="time" name="time" required>
            {availableTimes ? (
              availableTimes.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))
            ) : (
              <option>No available times</option>
            )}
          </Field>
          <ErrorMessage name="time" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <Field type="number" id="guests" name="guests" min="1" required />
          <ErrorMessage name="guests" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <Field as="select" id="occasion" name="occasion" required>
            {availableOccasions.map((occasionOption, index) => (
              <option key={index} value={occasionOption}>
                {occasionOption}
              </option>
            ))}
          </Field>
          <ErrorMessage name="occasion" component="div" className="error" />
        </div>
        <button
          type="submit"
          className={!isValid ? 'disabled-button' : 'submit-button'}
          disabled={isSubmitting}
          aria-label="Submit Reservation"
        >
          Submit Reservation
        </button>
      </Form>

  );
}

export default BookingForm;
