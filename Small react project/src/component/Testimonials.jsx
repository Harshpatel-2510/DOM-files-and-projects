import React from 'react'

const Testimonials = () => {
  return (

    <div className="testimonials" data-aos="zoom-in">

      <div className="test_top">

        <h1>Loved By Developers</h1>

        <p>
          Thousands of developers use AgentQL for AI-powered automation.
        </p>

      </div>

      <div className="test_cards">

        {/* CARD 1 */}

        <div className="test_card">

          <div className="profile">

            <div className="circle">
                <img src="https://i.pinimg.com/736x/af/ec/5f/afec5fd5f1b41e103947872f46669be6.jpg" alt="" />
            </div>

            <div>
              <h3>Axay Yadav</h3>
              <span>Frontend Developer</span>
            </div>

          </div>

          <p>
            “AgentQL completely changed the way we automate web scraping.”
          </p>

        </div>

        {/* CARD 2 */}

        <div className="test_card active_test">

          <div className="profile">

            <div className="circle">
                <img src="https://i.pinimg.com/1200x/7a/a1/db/7aa1dbae860dd50acb959ae6a180177f.jpg" alt="" />
            </div>

            <div>
              <h3>Priya Sharma</h3>
              <span>Startup Founder</span>
            </div>

          </div>

          <p>
            “The AI selectors are insanely accurate.
            Saved us hundreds of hours.”
          </p>

        </div>

        {/* CARD 3 */}

        <div className="test_card">

          <div className="profile">

            <div className="circle">
                <img src="https://i.pinimg.com/1200x/de/aa/f7/deaaf7812a6a7258ac5b45a4cf9cb65c.jpg" alt="" />
            </div>

            <div>
              <h3>Tara Mehta</h3>
              <span>Automation Engineer</span>
            </div>

          </div>

          <p>
            “Best developer tool I’ve used
            this year. Super smooth API.”
          </p>

        </div>

      </div>

    </div>

  )
}

export default Testimonials