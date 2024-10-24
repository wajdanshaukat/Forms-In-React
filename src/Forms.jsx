import { useState } from "react";
export default function Forms() {
  let [formData, setformData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   let handleName = (event) => {
  //     setformData({
  //       ...formData,
  //       fullName: event.target.value,
  //     });
  //   };

  //   let handleUserName = (event) => {
  //     setformData({
  //       ...formData,
  //       userName: event.target.value,
  //     });
  //   };

  let handleInput = (event) => {
    let fieldName = event.target.id;
    let newValue = event.target.value;
    setformData({
      ...formData,
      [fieldName]: newValue,
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setformData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Forms in React</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="FullName">Name:</label>&nbsp;
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={handleInput}
          id="fullName"
          name="fullName"
        />
        &nbsp;
        <br /> <br />
        <label htmlFor="userName">User-Name:</label>&nbsp;
        <input
          type="text"
          placeholder="Enter Username"
          value={formData.userName}
          onChange={handleInput}
          id="userName"
          name="username"
        />
        <br /> <br />
        <label htmlFor="password">Password:</label>&nbsp;
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInput}
          id="password"
          name="password"
        />
        &nbsp;
        <button>Submit</button>
      </form>
    </>
  );
}