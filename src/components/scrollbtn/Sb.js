
import React, {Component} from 'react'
import './Sb.css'

class Sb extends Component
{
	state = {s: false}

    check_scroll = _ =>
    {
        (window.scrollY >= 200) ? this.setState({s: true}): this.setState({s: false})
    }

    handle_click = _ =>
    {
        window.scroll(0, 0)
    }

    componentDidMount()
    {
        window.addEventListener('scroll', event =>
        {
            this.check_scroll()
        })

        document.addEventListener('DOMContentLoaded', event =>
        {
            this.check_scroll()
        })
    }

	render()
	{
		return (
			<button className = {`btn btn-danger rounded-circle btn-sm position-fixed ${this.state.s ? 'd-block': 'd-none'}`} id = 'btn-up' onClick = {this.handle_click}><i className="fas fa-arrow-up"></i></button>

		)
	}
}

export default Sb