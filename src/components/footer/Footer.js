import React from 'react'
import "./Foote.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {TfiLocationPin} from "react-icons/tfi"
import {HiOutlinePhone} from "react-icons/hi"
import {CgMail} from "react-icons/cg"

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container style={{ backgroundColor: 'black' }} text="white">
        <Row>
          <Col lg='4'>
              <div>
                <h1 className='text-white fs-5 fw-800'>Fitness App</h1>
              </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim omnis quae aperiam excepturi voluptas dolores adipisci, quos in vero!
            </p>
          </Col>
          <Col lg='3'>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Login</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Privacy Policy</Link></p>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacts</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><TfiLocationPin/></span>
                <p>XXXXXXXXX</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><HiOutlinePhone/></span>
                <p>+91 XXXXXXXXXXX</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><CgMail/></span>
                <p>test@hotmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright text-center"><span>&#169;</span> copyright {year} developed by Div_test All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
