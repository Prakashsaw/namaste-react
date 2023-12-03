// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React..."
// );
/* props: 
    children: "Hello World from React..."
    id: "heading"
*/
// First and second things are props.
// inside {} we keeps attributes like id = "heading-id"
// Third things are children

// console.log(heading); //Object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/***
 *
 * creatr following html using react:-
 *
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I am h1 tag</h1>
 *      </div>
 *  </div>
 *
 * ReactElement(Object) => HTML (Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag of child1..."),
    React.createElement("h2", {}, "I am h2 tag of child1..."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag of child2..."),
    React.createElement("h2", {}, "I am h2 tag of child2..."),
  ]),
]);

console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
