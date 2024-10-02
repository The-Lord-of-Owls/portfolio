export default function Project( image: string, title: string, description: string, to?: string ) {
	return <li>
		<img src={ image } />
		<h1>{ title }</h1>
		<p>{ description }</p>
		{ to ? <a href={ to }>Learn More</a> : null }
	</li>
}


