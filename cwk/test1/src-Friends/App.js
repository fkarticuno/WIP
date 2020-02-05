import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json.js";

function App() {
  friends.map(item => (
    console.log(item)
  ))
  return (
    <ul className="list-group">
      <Title>Friends List</Title>
    {friends.map(item => (
      <li key={item.id}>
        <Wrapper>
          <FriendCard
          name={item.name}
          image={item.image}
          occupation={item.occupation}
          location={item.location}
          />
        </Wrapper>
      </li>
      ))}
    </ul>
  //   <Wrapper>
  //   <Title>Friends List</Title>
  //   <FriendCard
  //     name={friends.map(x =>(x)).name}
  //     image={friends[0].image}
  //     occupation={friends[0].occupation}
  //     location={friends[0].location}
  //   />
  // </Wrapper>
  );
}

export default App;
