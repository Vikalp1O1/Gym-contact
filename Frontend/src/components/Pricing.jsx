import { Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function Pricing() {
  const pricing=[
    {
      imgUrl:'/pricing.jpg',
      title:'Basic Plan',
      price:4500,
      length:3
    },{
      imgUrl:'/pricing.jpg',
      title:'Gold Plan',
      price:7500,
      length:6
    },{
      imgUrl:'/pricing.jpg',
      title:'Premium Plan',
      price:13000,
      length:12
    }
  ]
  return (
  <section className='pricing' id='pricing'>
    <h1>Our Fitness Plans</h1>
    <div className="wrapper">
      {
        pricing.map((item) => (
          <div className="card" key={item.title}>

            <img src={item.imgUrl} alt="pricing" />
            <div className='title'>
            <h1>{item.title}</h1>
            <h1>Package</h1>
            <h3>Rs {item.price}</h3>
            <p>For {item.length} Months</p>
            </div>
            <div className="description">
              <p>
                <Check/> Equipment
              </p>
              <p>
                <Check/> Personal Trainer
              </p>
              <p>
                <Check/> Free Rest Room
              </p>
              <p>
                <Check/> Free Parking
              </p>
              <p>
                <Check/> Nutrition Plan
              </p>
              <p>
                <Check/> Supporting Trainer
              </p>
              <Link to="/">Join Now</Link>
            </div>
            
          </div>
        ))
      }
    </div>
  </section>
  )
}

export default Pricing