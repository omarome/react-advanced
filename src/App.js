import React, { Component } from 'react'
import Login from './context/Login';
import MoviePage from './context/MoviePage'
import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import AnotherContext from './context/anotherContext';

export default class App extends Component {
  //
  handleLoggedIn = (username) =>{
    console.log("Getting the user: " + username);
    const user = {name: "Mosh"};
    const greeting ={name: "Hi"}
    this.setState({currentUser: user});
    this.setState({greeting:greeting})
  };
  

  state = {currentUser: null ,  greeting :null};

  render() {
    return (
      <CartContext.Provider value={{cartItem:[]} }>
        <AnotherContext.Provider value={{greeting:this.state.greeting}}>
        <UserContext.Provider value={{currentUser:this.state.currentUser, onLoggedIn: this.handleLoggedIn}}>
          <div>
            <MoviePage/>
            <Login/>
          </div>
        </UserContext.Provider>
        </AnotherContext.Provider>
      </CartContext.Provider>

   
    )
  }
}
