
import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import Section1 from './sections/section1/Section1'
import Section2 from './sections/section2/Section2'
import Section3 from './sections/section3/Section3'
import './Blogs.css'

class Blogs extends Component
{
	state = {
		array: [
			{
				path: '/blogs/',
				number: 1
			},
			{
				path: '/blogs/section2',
				number: 2
			},
			{
				path: '/blogs/section3',
				number: 3
			}
		]
	}
	render()
	{
		return (
				<>
					<div className = 'container'>
						<div className = 'title py-3 text-center'>
							<h4 className = 'sub-title text-capitalize'>read our <span>blogs</span></h4>
						</div>
					</div>
					<Pagination array = {this.state.array}/>
					<Routes>
						<Route exact path = '/' element = {<Section1 />} />
						<Route path = '/section2' element = {<Section2 />} />
						<Route path = '/section3' element = {<Section3 />} />
					</Routes>
					<Pagination array = {this.state.array}/>
				</>
		)
	}
}

export default Blogs