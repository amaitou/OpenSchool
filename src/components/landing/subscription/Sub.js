
import React, {Component} from 'react'
import './Sub.css'
import sub_img from '../../../images/sub/sub.svg'

class Sub extends Component
{
	render()
	{
		return (
			<div className = 'sub py-5 mb-5'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'left-side text-lg-start text-center mb-lg-0 mb-5'>
								<img className = 'img-fluid w-75' src = {sub_img} alt = 'sub'/>
							</div>
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'right-side text-lg-start text-center'>
								<h3 className = 'big-title text-capitalize mb-4'>get weekly courses and news are sent to your inbox</h3>
								<p className = 'text text-capitalize mb-4'>
									<span className = 'sub-word'>OpenSchool</span> offers new courses and lessons weekly in all fields, if you are interested then you might desire to register via your email in order to get our offers directly in your inbox
								</p>
								<div className = 'row'>
									<div className = 'col-lg-8 col-12'>
										<div className="input-group mb-3">
										  	<input type="text" className="form-control py-2 px-3 border border-danger rounded-3 shadow-lg text-lg-start text-center" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
										</div>
									</div>
									<div className = 'col-lg-4 col-12'>
										<button className = 'btn btn-danger shadow-lg w-100'>Register</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Sub