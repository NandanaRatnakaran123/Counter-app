import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor:'rgba(236, 236, 133, 0.56)' }}>
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: 'bolder',
              textDecoration: 'none',
              fontSize: '23px',
              display: 'flex',
            
            }}
          >
            <img
              alt=""
              src="https://cdn.dribbble.com/userupload/41669677/file/original-ef0821e44688600fb1c0943be3ef53f0.gif"
              width="63"
              height="63"
              style={{ marginRight: '15px' ,padding:'9px' }}
              className="d-inline-block align-top"
            />
            <span style={{ color: 'rgba(0, 0, 0, 0.76)',paddingTop:'14px',fontSize:'32px' }}>Counter Application</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
