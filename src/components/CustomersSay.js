import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icons from react-icons

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      imgSrc: 'customer1.jpg',
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum.',
    },
    {
      id: 2,
      rating: 4,
      imgSrc: 'customer2.jpg',
      name: 'Jane Smith',
      review: 'Vestibulum in leo sit amet urna tincidunt tincidunt in nec justo.',
    },
    {
      id: 3,
      rating: 5,
      imgSrc: 'customer3.jpg',
      name: 'Alice Johnson',
      review: 'Suspendisse non lectus et justo dignissim sodales. Cras et ligula sit amet.',
    },
    {
      id: 4,
      rating: 4,
      imgSrc: 'customer4.jpg',
      name: 'Bob Johnson',
      review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
    },
  ];

  return (
    <section className='testimonial-sec'>
    <div className="customer-say-container">
      <h2 className="sec-title">What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="rating">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
            <div className="testimonial-image">
              <img src={testimonial.imgSrc} alt={testimonial.name} />
              <div className="name">{testimonial.name}</div>
            </div>
            <div className="details">
              <div className="review">{testimonial.review}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CustomersSay;
