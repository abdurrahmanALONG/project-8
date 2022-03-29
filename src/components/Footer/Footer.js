

import React from 'react';

const Footer = () => {
  return (
    <div className="Footer">
        <div>
            <h4>How React Works ?</h4>
            <p><small>Ans:</small>Some facebook developers, when they are  building client-side apps. They think that the DOM is slow as an application programming interface for HTML and XML documents. And they define the logical structure of documents and the way a document is accessed and manipulated.So, react implements a virtual DOM,that is basically a DOM tree.If it needs to read or write to the DOM, it use  virtual DOM.Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React elements are plain objects and cheap to create as well.DOM takes care of updating the DOM to match the React elements.Because of this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. React can also be used on the server with Node.js. </p>
        </div>
        <div>
            <h4>How useState Works ?</h4>
            <p><small>Ans:</small>The useState() is a Hook that allows you to have state variables in functional components.The useState() enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</p>
        </div>
   
    </div>
  );
}

export default Footer;