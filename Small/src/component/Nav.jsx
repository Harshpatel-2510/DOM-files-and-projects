import React from 'react'

const Nav = () => {
  return (
    <div className="navbar">
        <div className="title"><i class="ri-expand-left-right-line"></i>AgentQL</div>
        <div className="menu">
            <div className="menu_item">Docs</div>
            <div className="menu_item">Pricing</div>
            <div className="menu_item">Quick Start</div>
            <div className="menu_item">Playground</div>
        </div>
        <div className="button"><button>Get API key</button></div>
    </div>
  )
}

export default Nav