import { useState } from "react";
export default function CommentsFrom() {
  let [formData, setformData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInput = (event) => {
       setformData((currData) => {
      return {...currData, [event.target.name]: event.target.value};
    });
  };
  
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setformData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h1>CommentsFrom!</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>&nbsp;
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInput}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks:</label>&nbsp;
        <textarea
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInput}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>&nbsp;
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInput}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
