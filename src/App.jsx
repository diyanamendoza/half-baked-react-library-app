import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import Home from './views/Home/Home'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  return (
    <main className="container">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" exact>
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App
