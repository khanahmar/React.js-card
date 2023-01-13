import React from "react"

function Info() {
  return (
    <div className="info">
      <img src="https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <small>laurasmith.website</small>
      <div className="btns">
        <button className="email">
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="link">
          <i class="fa-brands fa-linkedin"></i> linkedIn
        </button>
      </div>
    </div>
  )
}

export default Info
