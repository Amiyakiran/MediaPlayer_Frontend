import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%', height:'300px'}} className='d-flex align-items-center justify-content-center flex-column'>
      <div className="footer d-flex align-items-center justify-content-evenly w-100">
        <div className="website" style={{width:'400px'}}>
          <h4><i className="fa-solid fa-video fa-beat text-warning me-3"></i>{' '}
            Video Player</h4>
            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni, molestias</h6>
            <h6>similique? Nesciunt, aspernatur?</h6>
        </div>
        <div className="link d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'}style={{textDecoration:'none', color:'white'}} >Home Page</Link>
          <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}} >Watch History</Link>

        </div>
        <div className="guides  d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>React</Link>
          <Link to={'/home'}style={{textDecoration:'none', color:'white'}} >React Bootstrap</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none', color:'white'}} >Bootswatch</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex mb-3'>
              <input type="text" className='form-control' placeholder='Enter your EmailID' />
              <button className='btn btn-warning text-white ms-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly'>
            <Link to={'www.linkedin.com/in/amiya-kiran-703b9a259'} style={{textDecoration:'none', color:'white'}} ><i className="fa-brands fa-instagram fa-2x "></i></Link>
            <Link to={'www.linkedin.com/in/amiya-kiran-703b9a259'} style={{textDecoration:'none', color:'white'}} ><i className="fa-brands fa-twitter fa-2x "></i></Link>

            <Link to={'www.linkedin.com/in/amiya-kiran-703b9a259'} style={{textDecoration:'none', color:'white'}} ><i className="fa-brands fa-linkedin fa-2x  "></i></Link>

            <Link to={'www.linkedin.com/in/amiya-kiran-703b9a259'} style={{textDecoration:'none', color:'white'}} ><i className="fa-brands fa-facebook fa-2x  "></i></Link>


          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer