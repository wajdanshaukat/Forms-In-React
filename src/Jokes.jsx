import { useState } from "react";

export default function Jokes() {
  const getJoke = async () => {
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        console.log("New joke:", data);
      });
  };

  let [joke, setJoke] = useState(getJoke);

  return (
    <div>
      <h1>Jokes!</h1>
      <button onClick={getJoke}>Get Joke</button>
      <h3>{joke.value}</h3>
    </div>
  );
}
