const parent = React.createElement("div",
    { id: 'parent' },
    React.createElement("div", { id: 'children' }, [
        React.createElement('h1', {}, "I'm an h1 tag"),
        React.createElement('h2', {}, "I'm an h2 tag")]))

console.log(parent)

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world form react");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)