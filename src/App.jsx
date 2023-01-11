import {  RootReducer } from './redux/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  IndexPage  from './pages/Index'
const store = createStore(RootReducer)

function App() {


  return (
    <Provider store={store} >
      <div className="App">
        <IndexPage/>
      </div>
    </Provider>
  )
}

export default App
