// DOM - document object model
// Object {} that represents that page you see in the web browser and provides you with an API to interact 
// with. Web browser constructs the DOM when it loads an HTML document, and structures all the elements in
// a tree-like representation. Javascript can access the DOM to dynamically change the content, structure,
// and style of a web page.

document.title = "My Website";

//change theme to dark mode
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.dir(document);

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;