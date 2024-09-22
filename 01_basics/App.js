// TAsk-1: Manipulate the HTML DOM using Javscript

// const heading = document.createElement("h1")
// document.write(heading .innerHTML="Hello ji kaise hai Sare")
// const root = document.getElementById("root");
// root.appendChild(heading);


//Now we will Manipulate the HTML DOM using React

//Task-2: Create nested React Elements
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"#37df",
        padding:25
      },
      className:"title"
    },
    "Welcome to the React series"
  );
 
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);