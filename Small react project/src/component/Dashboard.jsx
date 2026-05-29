import React from 'react'

const Dashboard = () => {
  return (

    <div className="future" data-aos="fade-up">

      <div className="future_top">

        <h1>
          AI Automation Built For Modern Developers
        </h1>

        <p>
          Extract data, automate workflows and control the web with powerful AI tools.
        </p>

      </div>

      <div className="future_box">

        {/* LEFT SIDE */}
        <div className="future_left">

          <div className="glass_card">
            <h2>99.9%</h2>
            <span>Automation Accuracy</span>
          </div>

          <div className="glass_card">
            <h2>1M+</h2>
            <span>API Requests Daily</span>
          </div>

          <div className="glass_card">
            <h2>24/7</h2>
            <span>Cloud Monitoring</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="future_right">

          <div className="code_box">

            <div className="top_bar">

              <div className="circles">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <h4>agentql.js</h4>

            </div>

<pre>
{`const result = await agentql.extract({

 website: "amazon.com",

 data: [
  "title",
  "price",
  "rating"
 ]

})`}
</pre>

          </div>

          <div className="floating">
            ⚡ AI Running
          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard