import React from 'react'

const Company = () => {
  return (
        <div className="companies">
            <div className="company_title">
                <h2>Trusted by developers at</h2>
            </div>
            <div className="marquee">
                <div className="track">
                    <h1>Alphabet</h1>
                    <h1>OpenAI</h1>
                    <h1>AWS</h1>
                    <h1>Microsoft</h1>
                    <h1>Anthropic</h1>
                    <h1>IBM</h1>

                    {/* duplicate */}
                    <h1>Alphabet</h1>
                    <h1>OpenAI</h1>
                    <h1>AWS</h1>
                    <h1>Microsoft</h1>
                    <h1>Anthropic</h1>
                    <h1>IBM</h1>
                </div>
            </div>
        </div>
    )
}

export default Company