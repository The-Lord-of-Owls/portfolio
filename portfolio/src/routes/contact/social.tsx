export default function Social( title: string, icon: string, to: string ) {
	return <a className="social-link" href={ to }><img className="social-icon" src={ icon } />{ title }</a>
}


