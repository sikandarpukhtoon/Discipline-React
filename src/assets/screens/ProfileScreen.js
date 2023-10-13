import { Icon, Typography } from "@mui/material";
import React, { useState } from "react";
import { Card, input, Col, Container, Image, Row } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AccountBoxRounded } from "@mui/icons-material";
function ProfileScreen() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "700px",
        }}
      >
        <Button onClick={toggle}>
          <AccountBoxRounded />
        </Button>
        <p
          style={{ marginLeft: "10px", marginTop: "10px", fontWeight: "bold" }}
        >
          Profile
        </p>

        <p
          style={{
            marginLeft: "400px",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Disciplinary Committee Assistant
        </p>
        <Button
          className="btn btn-primary"
          style={{ marginLeft: "250px", fontWeight: "" }}
        >
          Logout
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <Col lg="6" className="mb-4 mb-lg-0">
          <Card
            className="mb-3"
            style={{ borderRadius: ".5rem", width: "200%" }}
          >
            <Row className="g-0">
              <Col
                md="4"
                className="gradient-custom text-center text-white"
                style={{
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem",
                }}
              >
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  className="my-5"
                  style={{ width: "80px" }}
                  fluid
                />
                <Typography tag="h5">Marie Horwitz</Typography>
                <Card.Text>Web Designer</Card.Text>
                <Icon far icon="edit mb-5" />
              </Col>
              <Col md="8">
                <Card.Body className="p-4">
                  <Typography tag="h6">PROFILE</Typography>
                  <hr className="mt-0 mb-4" />
                  <Row className="pt-1">
                    <Col size="6" className="mb-3">
                      <Typography tag="h6">Email</Typography>
                      <Card.Text className="text-muted">
                        info@example.com
                      </Card.Text>
                    </Col>
                    <Col size="6" className="mb-3">
                      <Typography tag="h6">Phone</Typography>
                      <Card.Text className="text-muted">123 456 789</Card.Text>
                    </Col>
                  </Row>

                  <Typography tag="h6">Information</Typography>
                  <hr className="mt-0 mb-4" />

                  <Col size="6" className="mb-3">
                    <Typography tag="h6">Email</Typography>
                    <Card.Text className="text-muted">
                      Card.Bodyinfo@example.com
                    </Card.Text>
                  </Col>
                  <Col size="6" className="mb-3">
                    <Typography tag="h6">Phone</Typography>
                    <Card.Text className="text-muted">123 456 789</Card.Text>
                  </Col>

                  <div className="d-flex justify-content-start">
                    <a href="#!">
                      <Icon fab icon="facebook me-3" size="lg" />
                    </a>
                    <a href="#!">
                      <Icon fab icon="twitter me-3" size="lg" />
                    </a>
                    <a href="#!">
                      <Icon fab icon="instagram me-3" size="lg" />
                    </a>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProfileScreen;
