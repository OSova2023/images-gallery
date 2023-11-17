import React from "react";

import { Card, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Card>
      {/* <Card.Header as="h5">Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>Imageeez Gallery</Card.Title>
        <Card.Text>This is the simple application</Card.Text>
        <Button target="_blank" href="https://unsplash.com" variant="primary">
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
