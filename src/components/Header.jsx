import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSignUp } from "../features/applicationSlice";
import { authSignIn } from "../features/applicationSlice";
import Category from "./Category/Category";

const Header = () => {
  const [openLog, setOpenLog] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [openAccount, setOpenAccount] = useState(false);  

  const signIn = useSelector((state) => state.applicationSlice.signIn);     
  const signUp = useSelector((state) => state.applicationSlice.signUp);      

  const error = useSelector((state) => state.applicationSlice.error);

  const handleSignUpp = () => {
    dispatch(authSignUp({ login, password })); 
  };

  const handleSignIn = () => {
    dispatch(authSignIn({ login, password }));  
  };

  const handleSetopen = () => {  
    setLogin("");
    setPassword("");
    setOpenAccount(false); 
  };

  const handleDontOpen = () => {  
    setLogin("");
    setPassword("");
    setOpenAccount(true); 
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);  
  };

  const handleUserLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSignUp = (e) => {
    setLogin(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1lEUyLtD_tK_xBDHPxT0Evw-ye-8R60-Pa6VMBJAjukJVwWLj3BE1i9hW449m-zBig&usqp=CAU"></img>
      </Link>
      <ul>
        <list className="category">
          <Category />
          <button onClick={() => setOpenLog(!openLog)} className="autoriz">  
            LOG IN
          </button>
          {openLog ? (
            openAccount ? (
              <div className="blockLogin">
                <div>Sig in</div>
                <div className="inputLogin">
                  <input
                    onChange={handleUserLogin}
                    value={login}
                    className="username"
                    type="text"
                    placeholder="username"
                  />
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <button
                  disabled={!login || !password}
                  onClick={handleSignIn} 
                  className="signup"
                >
                  Sign in
                </button>

                {signIn && <div className="loged-in">logged in </div>} 
                {error && <div className="loged">{error} </div>}   

                <button onClick={handleSetopen} className="signin">   
                  i don't have an account
                </button>
              </div>
            ) : (
              <div className="blockLogin">
                <div>Login</div>
                <div className="inputLogin">
                  <input
                    onChange={handleSignUp}   
                    value={login}
                    className="login"
                    type="text"
                    placeholder="login"
                  />
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="password"
                    type="password"
                    placeholder="password"
                  />
                  <button
                    disabled={!login || !password}  
                    className="signup"
                    onClick={() => handleSignUpp()}
                  >
                    Sign up
                  </button>
                  {signUp && <div className="thunk">you signed up </div>}  
                  <button onClick={handleDontOpen} className="account">
                    i have an account
                  </button>
                </div>
              </div>
            )
          ) : (
            ""
          )}
        </list>
      </ul>
    </div>
  );
};

export default Header;
