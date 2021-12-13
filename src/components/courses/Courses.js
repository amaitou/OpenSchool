
import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import Section1 from './sections/section1/Section1'
import Section2 from './sections/section2/Section2'
import './Courses.css'

class Courses extends Component
{
	state = {
		array: [
			{
				path: '/courses/',
				number: 1
			},
			{
				path: '/courses/section2',
				number: 2
			}
		]
	}
	render()
	{
		return (
			<>
				<div className = 'container'>
					<div className = 'title py-3 text-center'>
						<h4 className = 'sub-title text-capitalize'>browse our <span>courses</span></h4>
					</div>
				</div>
				<Pagination array = {this.state.array}/>
				<Routes>
					<Route exact path = '/' element = {<Section1 />} />
					<Route exact path = '/section2' element = {<Section2 />} />
				</Routes>
				<Pagination array = {this.state.array}/>
			</>
		)
	}
}

export default Courses