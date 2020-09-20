import React, { Component } from "react";
import "./App.css";
import Customer from "./Components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: 911127,
    gender: "male",
    job: "student",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "왓더",
    birthday: 911127,
    gender: "male",
    job: "student",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              Key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
