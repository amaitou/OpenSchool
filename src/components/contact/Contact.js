
import React, {Component} from 'react'
import contact from '../../images/sections/contact.svg'
import './Contact.css'

class Contact extends Component
{
	render()
	{
		return (
			<div className = 'getintouch mb-5'>
				<div className = 'container'>
					<div className = 'title pt-1 pb-4 text-center'>
						<h4 className = 'sub-title text-capitalize'>contact <span>us</span></h4>
					</div>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12 mb-lg-0 mb-5'>
							<div className = 'left-side text-lg-start text-center'>
								<img className = 'img-fluid w-75' src = {contact} alt = 'contact' />
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'right-side'>
								<div className = 'row'>
									<div className = "form-group c col-md-6 col-12 mb-3">
								      	<label htmlFor = "last_name" className = 'mb-2 text-capitalize'>first name</label>
								      	<input type = "text" className = "form-control py-2 px-3" id = "first_name" placeholder="First Name" required/>
								    </div>
								    <div className = "form-group c col-md-6 col-12 mb-3">
								      	<label htmlFor = "last_name" className = 'mb-2 text-capitalize'>last name</label>
								      	<input type = "text" className = "form-control py-2 px-3" id = "last_name" placeholder="Last Name" required/>
								    </div>
								    <div className = "form-group c col-12 mb-3">
								      	<label htmlFor = "e-mail" className = 'mb-2 text-capitalize'>Email</label>
								      	<input type = "email" className = "form-control py-2 px-3" id = "e-mail" placeholder="Email Address" required/>
								    </div>
								    <div className = "form-group c col-12 mb-4">
								      	<label htmlFor = "textarea" className = 'mb-2 text-capitalize'>write your message down here</label>
								      	<textarea className = "form-control py-2 px-3" id = "textarea" rows = '4'></textarea>
								    </div>
								    <button className = 'btn btn-outline-danger text-capitalize w-25 mx-auto'>send</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact