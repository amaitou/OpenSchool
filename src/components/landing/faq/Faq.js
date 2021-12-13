
import React, {Component} from 'react'
import './Faq.css'
import {faq_items} from './Data'

class Faq extends Component
{

	display_arrocdion_items = _ =>
	{
		let items = faq_items.map(item =>
		{
			return (
				<div className="accordion-item" key = {Math.random()}>
					<h2 className="accordion-header" id={item.id_one}>
  						<button className="accordion-button text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={item.data_bs_target} aria-expanded="true" aria-controls={item.aria_controls}>{item.title}</button>
					</h2>
					<div id={item.id_two} className={`accordion-collapse collapse ${item.show ? 'show': ''}`} aria-labelledby={item.aria_labelledby} data-bs-parent="#accordionExample">
  						<div className="accordion-body">
    						<strong className = 'text-danger'>Sed ut perspiciatis unde omnis iste.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
			<section className = 'faq py-5' id = 'faq'>
				<div className = 'container'>
					<div className = 'title py-5 text-md-start text-center'>
						<h4 className = 'sub-title text-capitalize'>frequently asked <span>questions</span></h4>
					</div>

					<div className="accordion shadow-lg" id="accordionExample">
						{this.display_arrocdion_items()}
					</div>
				</div>
			</section>
		)
	}
}

export default Faq