import React, {useState, useEffect} from 'react';
import firebase from './Components/Firebase';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
//import { UnauthenticatedSessionControl, LogoutTypes} from 'react-session-control';
import './App.css';


const App = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  //Login function
  const handleLogin = () =>{
    clearErrors();
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      };
    });
  };

  //Signup function
  const handleSignup = () => {
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      };
    });
  };

  //Logout function
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  //Listener (to check if a user exists or not)
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      };
    });
  };

  //a function to automatically display signed in user
  const handleCheckUser = () => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        //this user is signed
        console.log('This user is logged in:', user);
        setEmail(user);
      }else{
        //this user is not signed
        console.log('There is no logged in user');
      };
    });
  };
  

  //Add useEffect
  useEffect(() => {
    authListener();
    //handleCheckUser();
  },[]);

  //a sidebar
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
      <div className="App">

            {user ? (
              <Homepage handleLogout={handleLogout}
                openMenu = {openMenu}
                closeMenu = {closeMenu}
                email = {email}
                setEmail = {setEmail}
                handleCheckUser={handleCheckUser}

              />
            ):(
              <Login 
              email = {email}
              setEmail = {setEmail}
              password = {password}
              setPassword ={setPassword}
              handleLogin ={handleLogin}
              handleSignup ={handleSignup}
              hasAccount = {hasAccount}
              setHasAccount = {setHasAccount}
              emailError = {emailError}
              passwordError = {passwordError}
            />
            )}
            
      </div>
  );
}

export default App;
