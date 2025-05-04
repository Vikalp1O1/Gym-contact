import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div className="content">
        <div className="title">
          <h1>Let's</h1>
          <h1>Do</h1>
          <h1>Exercise</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts here...</p>
          <p>Build and Grow</p>
          <p>With Fitness Hub</p>
        </div>
        <div className="buttons">
          <a href="#contact">
          <button Link to='/Contact'>
            Start Now
          </button>
          </a>
          <a href='#pricing'>
          <button>
            Discover Your Plan
          </button>
          </a>

        </div>
      </div>
      </section>
  )
}

export default Hero