// Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginAPI from '../api/loginapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
  });

  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    // Call the login API with the form data
    loginAPI.login(values)
      .then((response) => {
          // Handle successful login, e.g., redirect or set user state
          toast.success(response.message, {
            position: 'top-left',
            autoClose: 5000,
          });
          resetForm();
          navigate('/');
      })
      .catch((error) => {
        // Handle errors from the API call, e.g., network issues
        toast.error(error.message, {
          position: "top-left",
          autoClose: 5000,
          });
      });
  };

  return (
    <section className='login-sec'>
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
  enableReinitialize={true}
>
  {({ isValid }) => (
    <Form>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" className="error" />
      </div>

      {/* Conditionally render the "Log In" button */}
      <button type="submit" className={isValid ? 'login-button' : 'disabled-button'} disabled={!isValid}>
        Log In
      </button>
    </Form>
  )}
</Formik>

      </div>
    </div>
    </section>
  );
};

export default Login;
