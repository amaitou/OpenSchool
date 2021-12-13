
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Pagination extends Component
{
	display_items = _ =>
	{
		let items = this.props.array.map((item, index) =>
		{
			return (
				<li className="page-item" key = {index}><NavLink className="page-link" to={item.path}>{item.number}</NavLink></li>
			)
		})
		return items
	}
	render()
	{
		return (
			<div className = 'pagination py-3 mb-3'>
				<div className = 'container'>
					<nav aria-label="Page navigation example">
					  	<ul className="pagination justify-content-center">
					    	{this.display_items()}
					  	</ul>
					</nav>
				</div>
			</div>
		)
	}
}

export default Pagination