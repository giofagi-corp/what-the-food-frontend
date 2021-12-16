import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const API_URI = process.env.REACT_APP_API_URI;

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URI}/auth/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    <div className="NotificationsPage">

      {/* <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form> */}

      <GenericPageTitle text="Sign Up" />
      <Box component="form" sx={{ '& > :not(style)': { mb: 2, width: '100%' },}} noValidate autoComplete="off">
      
          <TextField type="text" 
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
            id="outlined-basic" label="Email" variant="outlined" />
          <TextField type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
            id="outlined-basic" label="Password" variant="outlined" />
          <TextField type="text"
            name="name"
            value={name}
            onChange={handleName}
            placeholder="Name"
            id="outlined-basic" label="Name" variant="outlined" />
      </Box>

      <Button onClick={handleSignupSubmit} sx={{ width: '100%', height: '56px' }} type="submit" variant="contained">Sign Up</Button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
    </div>
    <div className="TagLine">
        <p>Already have account? <Link to={"/login"}> Login</Link></p>
    </div>
    </>
  );
}

export default SignupPage;
