import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logoexample from '../images/logoexample.png';
import navIcon1 from '../images/linkedIn.png';
import navIcon2 from '../images/facebook.png';
import navIcon3 from '../images/instagram.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logoexample} alt="Logo" style={{width: "120px", height: "auto"}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" style={{width: "30px", height: "auto"}} /></a>
              <a href="#"><img src={navIcon2} alt="Icon" style={{width: "30px", height: "auto"}}/></a>
              <a href="#"><img src={navIcon3} alt="Icon" style={{width: "30px", height: "auto"}}/></a>
            </div>

            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}