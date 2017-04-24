import React, { Component } from 'react'
import '../../src/styles/cssgrid1.scss'
export default class CssGrid1 extends Component {
  render () {
    return <div className='flex1'>
      <div className='wrapper1'>
        <div className='box1 1a'>A</div>
        <div className='box1 1b'>B</div>
        <div className='box1 1c'>C</div>
        <div className='box1 1d'>D</div>
        <div className='box1 1e'>E</div>
        <div className='box1 1f'>F</div>
      </div>
      <div className='wrapper2'>
        <div className='box2 2a'>A</div>
        <div className='box2 2b'>B</div>
        <div className='box2 2c'>C</div>
        <div className='box2 2d'>D</div>
        <div className='box2 2e'>E</div>
        <div className='box2 2f'>F</div>
      </div>
    </div>
  }
}
