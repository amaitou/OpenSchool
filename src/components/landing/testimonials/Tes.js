
import React, {Component} from 'react'
import './Tes.css'
import {tes} from './Data'

class Tes extends Component
{
	display_tes = _ =>
	{
		let items = tes.map((item, index) =>
		{
			return (
				<div className = {`item item${index}  me-lg-0 me-md-4 me-sm-0 mb-lg-0 mb-5`} key = {Math.random()}>
					<div className = 'p-profile mb-3 text-center'>
						<img className = 'pic rounded-circle shadow-lg' alt = 'testimonials' src = {item.img.default} />
					</div>
					<div className = 'user-info text-center mb-4'>
						<h5 className = 'name text-capitalize'>{item.name}</h5>
						<h6 className = 'skill text-muted mb-4'>{item.skill}</h6>
						<p className = 'testimonial'>
							<span><i className="fas fa-quote-left me-4"></i></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span><i className="fas fa-quote-right ms-3"></i></span>
						</p>
					</div>
					<div className = 'accounts text-center'>
						<a href = 'https://www.linkedin.com/' className = 'p-2' target = '_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
						<a href = 'https://www.twitter.com/' className = 'p-2' target = '_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
						<a href = 'https://www.facebook.com/' className = 'p-2' target = '_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a>
					</div>
				</div>
			)
		})
		return items
	}

	render()
	{
		return (
			<div className = 'tes py-5 mb-5' id = 'testimonials'>
				<div className = 'container'>
					<div className = 'title py-5 text-md-start text-center'>
						<h4 className = 'sub-title text-capitalize'>recent <span>testimonials</span></h4>
					</div>
					<div className = 'box d-flex justify-content-lg-between justify-content-center flex-wrap'>
						{this.display_tes()}
					</div>
				</div>
			</div>
		)
	}
}

export default Tes