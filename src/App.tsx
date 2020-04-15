import 'typeface-roboto';
import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ItemList from './components/ItemList';
import SignupPage from './components/SignupPage';

interface LoginPropsInterface {
  loginState: boolean;
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface SignupPropsInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const App: React.FC= (): JSX.Element => {
  const [loginState, setLoginState]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [name, setName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');
  const [username, setUsername]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');
  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');
  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const loginProps: LoginPropsInterface = {
    loginState,
    setLoginState,
    username,
    setUsername,
    password,
    setPassword
  };


  const signupProps: SignupPropsInterface = {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail
  };

  const message: JSX.Element = <h1>Welcome {username}!</h1>;

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage {...loginProps}>{message}</HomePage>
          </Route>
          <Route path="/login">
            <LoginPage {...loginProps}>
              <p>Please log in or go away!</p>
            </LoginPage>
          </Route>
          <Route path="/signup">
            <SignupPage {...signupProps}>
              <p>Sign up so your dad doesn't mess up again!</p>
            </SignupPage>
          </Route>
          <Route path="/list/:groupID">
            <ItemList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
