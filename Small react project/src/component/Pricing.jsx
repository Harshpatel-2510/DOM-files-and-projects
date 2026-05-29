import React from 'react'

const Pricing = () => {
  return (

    <div className="pricing" data-aos="fade-right">

      <div className="pricing_top">

        <h1>Simple Pricing</h1>

        <p>
          Flexible plans for individuals, startups and enterprises.
        </p>

      </div>

      <div className="pricing_cards">

        {/* CARD 1 */}

        <div className="price_card">

          <h2>Free</h2>

          <h1>$0</h1>

          <span>Perfect for beginners</span>

          <div className="line"></div>

          <p>✔ 1K Requests</p>
          <p>✔ AI Extraction</p>
          <p>✔ Community Support</p>

          <button>Get Started</button>

        </div>

        {/* CARD 2 */}

        <div className="price_card active">

          <div className="popular">
            MOST POPULAR
          </div>

          <h2>Pro</h2>

          <h1>$29</h1>

          <span>For modern developers</span>

          <div className="line"></div>

          <p>✔ Unlimited Requests</p>
          <p>✔ Fast AI Automation</p>
          <p>✔ Priority Support</p>
          <p>✔ API Access</p>

          <button>Start Pro</button>

        </div>

        {/* CARD 3 */}

        <div className="price_card">

          <h2>Enterprise</h2>

          <h1>Custom</h1>

          <span>For large companies</span>

          <div className="line"></div>

          <p>✔ Dedicated Infrastructure</p>
          <p>✔ Enterprise Security</p>
          <p>✔ 24/7 Monitoring</p>

          <button>Contact Sales</button>

        </div>

      </div>

    </div>

  )
}

export default Pricing