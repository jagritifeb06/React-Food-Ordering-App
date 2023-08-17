{
  /* <div id="parent">
  <div id="child">
    <h1>i 'm an H1 tag</h1>
      <h2>i 'm an H2 tag</h2>

  </div>
</div> */
}
// ReactElement(object)==>HTML(Browser Understand)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I 'm an h1 tag"),
    React.createElement("h2", {}, "I 'm an h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
