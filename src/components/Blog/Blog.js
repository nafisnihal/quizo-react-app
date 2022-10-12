import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-slate-900 my-6 text-center p-4 rounded-lg w-2/3 mx-auto">
        <h1 className="mt-3 mb-6 py-5 mx-2  bg-yellow-400 rounded-md ">
          What is the purpose of react router?
        </h1>
        <p className="bg-white text-black my-3 p-2 w-4/5 mx-auto rounded-md">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="bg-slate-900 my-6 text-center p-4 rounded-lg w-2/3 mx-auto">
        <h1 className="mt-3 mb-6 py-5 mx-2  bg-yellow-400 rounded-md ">
          How does context API works?
        </h1>
        <p className="bg-white text-black my-3 p-2 w-4/5 mx-auto rounded-md">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="bg-slate-900 my-6 text-center p-4 rounded-lg w-2/3 mx-auto">
        <h1 className="mt-3 mb-6 py-5 mx-2  bg-yellow-400 rounded-md ">
          What is useref hook?
        </h1>
        <p className="bg-white text-black my-3 p-2 w-4/5 mx-auto rounded-md">
          The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue.The object can persist a value for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
