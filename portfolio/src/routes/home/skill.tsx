import './skill.css'

export default function Skill( title: string, competency: number ) {
	return <div>
		<p className="skill-title">{ title }</p>
		<div className="skill-bar" style={ { width: `${ competency }%` } }></div>
	</div>
}


