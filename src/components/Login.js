import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username === "admin" && password === "password") {
      this.props.history.push("/home");
    } else {
      this.setState({
        error: "Invalid username or password",
      });
    }
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;

    this.setState({
      [id]: value,
      error: "", // Clear the error message when the user makes changes
    });
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={this.handleInputChange}
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
