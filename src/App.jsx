import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import "./index.css"

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  // console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  // console.log(featuredPup)

  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        <p>{featPupId}</p>
      </div>

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
