import React from 'react'
import {
  MDBFooter
} from 'mdb-react-ui-kit';
import './Footer.css';
import GoogleMap from './GoogleMap';

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor='dark' className='text-center text-lg-start' color='white' id='footerContact'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/OsaVera-Salon-103363625713008' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          
          <a href='https://www.instagram.com/osaverasalon/?hl=en' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>


      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            


         

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact-info'>
              <h6 className='text-uppercase fw-bold mb-4 text-center'>Contact</h6>
              <p className='contact text-center'>
                <i className='fas fa-home me-3'></i> 640 W Debbie Ln. Unit 160 <br/>Mansfield, TX. 76063
              </p>
              <p className='text-center'>
                <i className='fas fa-envelope me-3'></i>
                osaverasalon21@gmail.com
              </p>
              <div className='text-center'>
              <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
    </>
  )
}

export default Footer