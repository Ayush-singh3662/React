// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child1" }, [
//       React.createElement("h1", {}, "I'm a h1 tag"),
//       React.createElement("h2", {}, "I'm a h2 tag"),
//     ],
//     React.createElement("div",
//     { id: "child2" }, [
//       React.createElement("h1", {}, "I'm a h1 tag"),
//       React.createElement("h1", {}, "I'm a h2 tag"),
//     ])
//   ),
// ]);

//React element
const parent = (
  <div id="child1">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
);

//React component
// const Comp = () => {
//   return <div>
//     <h1>React Component</h1>
//   </div>
// };

const Comp2 = () => (
  <div>
    {/* {comp} */}
    <h1>Ayush</h1>
  </div>
);

const comp = (
  <div>
    <h1>React Component</h1>
    <Comp2 />
    <Comp2></Comp2>
    {Comp2()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering React element
// root.render(parent);

//Rendering React component
root.render(comp);
