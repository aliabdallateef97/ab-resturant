import { authActions } from "./auth";



export const signup = (email,password) => {
  return async (dispatch) => {
    try{
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpETMdxKT7zyjLCUMW2PJktAy2lFuej4Y", {
      method: "Post",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json().then((dataToken) => {
      if (dataToken && dataToken.error) {
        alert(dataToken.error.message);
      } else {
        dispatch(authActions.login(dataToken))
      }
    });
    }catch(error){
      alert(error.message)
     }
  };
};

export const login = (email,password) => {
  return async (dispatch) => {
      try{
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpETMdxKT7zyjLCUMW2PJktAy2lFuej4Y", {
        method: "Post",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(!response.ok){
        throw new Error('there is something wrong')
      }
      const data = await response.json().then((dataToken) => {
        if (dataToken && dataToken.error) {
          alert(dataToken.error.message);
        } else {
          dispatch(authActions.login(dataToken))
        }
      });
    }catch(error){
      alert(error.message)
     }
   }
  };
