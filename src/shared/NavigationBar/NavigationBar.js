import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ShowDate from "../../pages/Home/ShowDate/ShowDate";

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleCategory = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };
  return (
    <div>
      <Navbar className="mb-3" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            প্রথম আলো
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                হোম
              </Nav.Link>

              <Nav.Link as={Link} to="/latest_news">
                সর্বশেষ
              </Nav.Link>
              <Nav.Link onClick={() => handleCategory("খেলা")}>খেলা</Nav.Link>
              <Nav.Link onClick={() => handleCategory("বিশেষ")}>বিশেষ</Nav.Link>
              <Nav.Link as={Link} to="/add_news">
                সংবাদ পোস্ট করুন
              </Nav.Link>
              <Nav.Link>
                <p>
                  <ShowDate />
                </p>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
