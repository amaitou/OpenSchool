
import React, {Component} from 'react'
import Hero from './hero/Hero'
import Teachers from './teachers/Teachers'
import Leaders from './leaders/Leaders'

class About extends Component
{
	render()
	{
		return (
			<>
				<Hero />
				<Teachers />
				<Leaders />
			</>
		)
	}
}

export default About