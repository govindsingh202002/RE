import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos.jsx"
import { store } from "./app/store.js"

function App() {

  return (
    <Provider store={store} >
    <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
