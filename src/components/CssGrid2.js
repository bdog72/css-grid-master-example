import React, { Component } from 'react'
import '../styles/cssgrid2.scss'
export default class CssGrid2 extends Component {
  render () {
    return <div>
      <div className='wrap1'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <h1>RESIZE THE WINDOW</h1>
      <div className='wrap2'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </div>
  }
}
