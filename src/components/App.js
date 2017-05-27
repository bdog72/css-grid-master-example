import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CssGrid1 from './CssGrid1'
import CssGrid2 from './CssGrid2'
import CssGrid3 from './CssGrid3'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li className='list'><Link to='/'>Css Grid Example 1</Link></li>
        <li><Link to='/ex2'>Css Grid Example 2</Link></li>
        <li><Link to='/ex3'>Css Grid Example 3</Link></li>
        <li><Link to='/ex4'>Css Grid Example 4</Link></li>
        <li><Link to='/ex5'>Css Grid Example 5</Link></li>
        <li><Link to='/ex6'>Css Grid Example 6</Link></li>
        <li><Link to='/ex7'>Css Grid Example 7</Link></li>
        <li><Link to='/ex8'>Css Grid Example 8</Link></li>
        <li><Link to='/ex9'>Css Grid Example 9</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Ex1} />
      <Route path='/ex2' component={Ex2} />
      <Route path='/ex3' component={Ex3} />
      <Route path='/ex4' component={Ex4} />
      <Route path='/ex5' component={Ex5} />
      <Route path='/ex6' component={Ex6} />
      <Route path='/ex7' component={Ex7} />
      <Route path='/ex8' component={Ex8} />
      <Route path='/ex9' component={Ex9} />
    </div>
  </Router>
)
export default class App extends Component {
  render () {
    return <div>
      <BasicExample />
    </div>
  }
}

const Ex1 = () => (
  <div>
    <h2><CssGrid1 /></h2>
  </div>
)

const Ex2 = () => (
  <div>
    <h2><CssGrid2 /></h2>
  </div>
)

const Ex3 = () => (
  <div>
    <h2><CssGrid3 /></h2>
  </div>
)

const Ex4 = () => (
  <div>
    <h2>4</h2>
  </div>
)

const Ex5 = () => (
  <div>
    <h2>5</h2>
  </div>
)

const Ex6 = () => (
  <div>
    <h2>6</h2>
  </div>
)

const Ex7 = () => (
  <div>
    <h2>7</h2>
  </div>
)

const Ex8 = () => (
  <div>
    <h2>8</h2>
  </div>
)

const Ex9 = () => (
  <div>
    <h2>9</h2>
  </div>
)
