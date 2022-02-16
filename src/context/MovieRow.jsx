import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";
import AnotherContext from "./anotherContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const anotherContext = useContext(AnotherContext);

  console.log("context", userContext);
  console.log("Cart Context", cartContext);
  console.log("another Context", anotherContext);

  return (
    <div>
      Movie Row {anotherContext.greeting ? anotherContext.greeting.name : ""}{" "}
      {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
