import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currVal) => currVal + 1);
  };
  let incCounty = () => {
    setCounty((currVal) => currVal + 1);
  };
  useEffect(function printSomething() {
    console.log("this is side-effect");
  },
  [county]
);
  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={incCountx}>+ 1</button>

      <h3>County = {county}</h3>
      <button onClick={incCounty}>+ 1</button>
    </div>
  );
}
