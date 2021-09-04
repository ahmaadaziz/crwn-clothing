import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            name="email"
            label="Email"
            requierd
            value={this.state.email}
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            label="Password"
            requierd
            value={this.state.password}
          />

          <CustomButton type="submit">sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
