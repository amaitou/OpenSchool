
import React, {Component} from 'react'
import {section3} from '../Data'
import '../Sections.css'

class Section3 extends Component
{
	display_blogs = _ =>
	{
		let items = section3.map((item, index) =>
		{
			return (
				<div className = 'c col-lg-4 col-md-6 col-12' key = {index}>
					<div className = 'card mx-auto shadow-lg mb-5' key = {index}>
						<img className = "img-fluid mb-3" src = {item.default} alt = {`blog number ${index}`} />
						<div className = 'card-body p-4'>
							<h5 className = 'card-img-top card-title mb-'>Sed ut perspiciatis unde omnis iste</h5>
							<p className = 'card-text mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
							<div className = '_footer d-flex flex-wrap justify-content-between align-items-center'>
								<button className = 'btn btn-danger text-capitalize mb-3'>read more <i className = 'fas fa-chevron-right ms-2'></i></button>
								<p className = 'date text-muted '>November 30, 2021</p>
							</div>
						</div>
					</div>
				</div>
			)
		})
		return items
	}

	render()
	{
		return (
			<div className = 'sections section3 py-5'>
				<div className = 'container'>
					<div className = '_s row justify-content-start'>
						{this.display_blogs()}
					</div>
				</div>
			</div>
		)
	}
}

export default Section3