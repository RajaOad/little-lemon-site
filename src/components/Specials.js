import React from 'react';

const specialsData = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description: "Experience the flavors of the Mediterranean with our delicious Greek salad. Fresh vegetables, tangy feta cheese, Kalamata olives, and a zesty vinaigrette dressing.",
    deliveryLink: "Order a Delivery",
    imgSrc: "../../greek salad.jpg",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$8.99",
    description: "Savor the taste of Italy with our authentic bruschetta. Ripe tomatoes, fragrant basil, garlic, and a drizzle of balsamic glaze on toasted Italian bread.",
    deliveryLink: "Order a Delivery",
    imgSrc: "../../bruchetta.svg",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$6.99",
    description: "Indulge in the delight of our lemon dessert. A lemon cake with a lemon glaze, garnished with fresh lemon zest, and served with a scoop of creamy vanilla ice cream.",
    deliveryLink: "Order a Delivery",
    imgSrc: "../../lemon dessert.jpg",
  },
];

function Specials() {
  return (
    <div className='main'>
    <div className="specials">
      <div className="specials-title">
      <h1 className='sec-title'>This weeks specials!</h1>
      <div className="order-button">
        <button>Order Online</button>
      </div>
      </div>
      <div className="specials-container">
        {specialsData.map((special) => (
          <div className="special-card" key={special.id}>
            <img src={special.imgSrc} alt={special.title} />
            <div className="card-content">
              <h2 className='card-title'>{special.title} <span className='highlight-text'>{special.price}</span></h2>
              <p className="price"></p>
              <p className='card-desc'>{special.description}</p>
              <a href="#">{special.deliveryLink}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Specials;
