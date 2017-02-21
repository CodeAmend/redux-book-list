# Redux - Book List project.

**reducers**: is a function that returns a piece of the app state. Produce the value of the state.

![basic skeleton](book_list.png)
<br/>

![model diagram](model_diagram_books.png)

![model diagram](react-redux-booklist-diagram.png)

<br>
![events of Redux](events.png)

We have two reducers here: Books and ActiveBooks.


Created React-Redux component BookList

components/app.js
* We import BookList and return that component using React

containers/book_list.js
* we import react-redux
* we create a React style class without exporting it
* This BookList returns a map of props.Books

* The 'glue' function mapStateToProps() to return the state.books

* We use redux connect & wrap mapStateToProps & utilize BookList reducer

reducers/reducer_books.js <br>
We just create reducer data for BookList


## Review:
* Redux is in charge of managing our application state
  + state is a javasscript object
* components are completly different from application state.
* App state is formed by reducers
  + reducers are tied together by combineReducers()
  + each key gets one reducer
    + which is responsible for each state
  + reducers are changed by an application
    + each time an action occurs it flows through entire project.
* Actions and ActionCreators
  + ActtionCreators are simple functions that return a ActionCreators
  + Action is just a plain javascript object
    + must have a 'type'
    + 'payload' is optional


We tied an actionCreator to the book-list-items. When user clicked on a
book list item it called a action creator which dispatched out action

action was seent to all different reducers
reducers that cared return a piece of state

global application state is injected into each container in the application
containers are updated and rerendered
