const Questions = [
    {
        qust: "How does React work?",
        ans: "React creates a virtual DOM. When state changes in a component it firstly runs a diffing algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of the difference."
    },
    {
        qust: "What is the use of refs?",
        ans: "Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when we need direct access to the DOM element or an instance of a component."
    },
    {
        qust: "What are props in React?",
        ans: "Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component."
    },
    {
        qust: "What is Context API in ReactJS?",
        ans: "Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, we can avoid passing props through intermediate elements."
    },
    {
        qust: "What are React Hooks?",
        ans: "With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community."
    },
    {
        qust: "What are the features of ReactJS?",
        ans: "With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community."
    },
]
export default Questions