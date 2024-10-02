import { Link } from 'react-router-dom'

export default function Header() {
	return <div className='header'>
		<Link className='header-title' to="/">MY PORTFOLIO</Link>
		<Link className='header-link' to="/">Home</Link>
		<Link className='header-link' to="/projects">Projects</Link>
		<Link className='header-link' to="/contact">Contact</Link>
	</div>
}


