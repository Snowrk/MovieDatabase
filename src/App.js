import {Route, Switch} from 'react-router-dom'
import Sample from './components/Sample'
import Test1 from './components/Test1'
// import Card from './components/Card'
import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Test1} />
    <Route exact path="/" component={Sample} />
    <Route exact path="/top-rated" component={Sample} />
    <Route exact path="/upcoming" component={Sample} />
    <Route exact path="/movie/:id" component={Sample} />
    <Route exact path="/search" component={Sample} />
  </Switch>
)

export default App
