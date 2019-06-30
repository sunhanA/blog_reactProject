import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from '../Home/home'
import Resume from '../Resume/resume'
import Work from '../Work/work'
import Main from '../Main/main'
import Book from '../Book/book'
import Topic from '../Topic/topic'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/work" component={Work} />
        <Route path="/main" component={Main} />
        <Route path="/book" component={Book} />
        <Route path="/topic" component={Topic} />
      </BrowserRouter>
    )
  }
}

export default App