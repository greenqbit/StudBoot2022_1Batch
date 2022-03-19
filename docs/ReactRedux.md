
React Redux: better use thunk style patter from the start as it support synchronous and manily ashynchrnous part
https://redux.js.org/usage/writing-logic-thunks

What is a "thunk"?
The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

Using thunks requires the redux-thunk middleware to be added to the Redux store as part of its configuration.

Thunks are the standard approach for writing async logic in Redux apps, and are commonly used for data fetching. However, they can be used for a variety of tasks, and can contain both synchronous and asynchronous logic.

Writing Thunks?
A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method. Thunk functions are not directly called by application code. Instead, they are passed to store.dispatch():

Dispatching thunk functions
const thunkFunction = (dispatch, getState) => {
// logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction)
A thunk function may contain any arbitrary logic, sync or async, and can call dispatch or getState at any time.
---
https://redux-toolkit.js.org/introduction/getting-started

This demo example looks good:
https://github.com/reduxjs/redux-toolkit/tree/master/examples/action-listener/counter
gist is also pretty good:
https://gist.github.com/danielepolencic/21ec48fe1d829fb853abbec3f5d4b06b

This https://github.com/reduxjs/redux-toolkit/blob/master/examples/action-listener/counter/src/store.ts
have lots of thing about redux store

The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.

QUICK:
This intro have lots of good link and useful explaination, also create-react-app with redux template quicly create complete counter ex :) which is cool
https://redux.js.org/introduction/getting-started
react-redux(without toolkit) style redux syntax: simple ex: mapStateToProps, connect function
https://codesandbox.io/s/943yr0qp3o

This guy Dave have detail tutorials:
Beginner-friendly redux tutorial: one of the best tutorial to teach:
https://daveceddia.com/redux-tutorial/

Redux vs context API best tutorial:
https://daveceddia.com/context-api-vs-redux/

React Complete tutorial:
https://daveceddia.com/react-getting-started-tutorial/
6 react fun project ideas:
https://daveceddia.com/react-practice-projects/

redux use react context API internally;
How to use the React Context API
Redux vs context API best tutorial:
https://daveceddia.com/context-api-vs-redux/

https://blog.isquaredsoftware.com/2020/01/blogged-answers-react-redux-and-context-behavior/
https://egghead.io/lessons/react-pass-props-through-multiple-levels-with-react-s-context-api (short video)

There are 3 important pieces to the context API:
const UserContext = React.createContext();
The React.createContext function which creates the context
<UserContext.Provider value={this.state.user}>
</UserContext.Provider>
The Provider (returned by createContext) which establishes the “electrical bus” running through a component tree
<UserContext.Consumer>
{user => (
    <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
    />
    )}
</UserContext.Consumer>
The Consumer (also returned by createContext) which taps into the “electrical bus” to extract the data
https://codesandbox.io/s/q9w2qrw6q4

Provider and Consumer are a Pair
The Provider and Consumer are bound together. Inseperable. And they only know how to talk to each other. If you created two separate contexts, say “Context1” and “Context2”, then Context1’s Provider and Consumer would not be able to communicate with Context2’s Provider and Consumer.
Context Holds No State
Notice how the context does not have its own state. It is merely a conduit for your data. You have to pass a value to the Provider, and that exact value gets passed down to any Consumers that know how to look for it (Consumers that are bound to the same context as the Provider).
When you create the context, you can pass in a “default value” like this:
const Ctx = React.createContext(yourDefaultValue);
This default value is what the Consumer will receive when it is placed in a tree with no Provider above it. If you don’t pass one, the value will just be undefined. Note, though, that this is a default value, not an initial value. A context doesn’t retain anything; it merely distributes the data you pass in.

Consumer Uses the Render Props Pattern
Redux’s connect function is a higher-order component (or HoC for short). It wraps another component and passes props into it.

The context Consumer, by contrast, expects the child component to be a function. It then calls that function at render time, passing in the value that it got from the Provider somewhere above it (or the context’s default value, or undefined if you didn’t pass a default).
Provider Accepts One Value
Just a single value, as the value prop. But remember that the value can be anything. In practice, if you want to pass multiple values down, you’d create an object with all the values and pass that object down.

That’s pretty much the nuts and bolts of the Context API.

--
Turn the Consumer into a Higher-Order Component
Not fond of the idea of adding the UserContext.Consumer around every place that needs it? Well, it’s your code! You can do what you want. You’re an adult.

If you’d rather receive the value as a prop, you could write a little wrapper around the Consumer like this:

function withUser(Component) {
return function ConnectedComponent(props) {
return (
<UserContext.Consumer>
{user => <Component {...props} user={user}/>}
</UserContext.Consumer>
);
}
}
And then you could rewrite, say, UserAvatar to use this new withUser function:

const UserAvatar = withUser(({ size, user }) => (
<img
className={`user-avatar ${size || ""}`}
alt="user avatar"
src={user.avatar}
/>
));
And BOOM, context can work just like Redux’s connect. Minus the automatic purity.
========
Hold State in the Provider
The context’s Provider is just a conduit, remember. It doesn’t retain any data. But that doesn’t stop you from making your own wrapper to hold the data.
https://codesandbox.io/s/jpy76nm1v

Read:
https://reactjs.org/docs/react-component.html#componentdidupdate
https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


