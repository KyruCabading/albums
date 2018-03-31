import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email:"
            placeholder="user@gmail.com"
            value={this.state.email.toLowerCase()}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password:"
            placeholder="password"
            secureTextEntry
            value={this.state.password.toLowerCase()}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  rowStyle: {
    flexDirection: 'row'
  },
  rowTextStyle: {
    width: 100,
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default LoginForm;
