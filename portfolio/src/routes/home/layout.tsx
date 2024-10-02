import Bio from "./bio"
import Avatar from "./avatar"
import Skill from "./skill"

interface SkillInterface {
	title: string
	competency: number
}

const skills: Array<SkillInterface> = [
	{ title: "React", competency: 90 },
	{ title: "Javascript", competency: 85 },
	{ title: "CSS", competency: 75 },
	{ title: "HTML", competency: 100 },
	{ title: "C++", competency: 75 },
	{ title: "PHP", competency: 50 },
	{ title: "Fortran", competency: 35 },
	{ title: "Java", competency: 50 },
	{ title: "MySQL", competency: 75 },
	{ title: "MongoDB", competency: 75 },
	{ title: "Redis", competency: 75 },
]

const bioText: string = "Bio goes here"

export default function Home() {
	return <>
		<div>
			<Avatar />
			<Bio text={ bioText } />
		</div>
		<ul>
			{ skills.map( ( skill: SkillInterface, index: number ) => <Skill key={ index } title={ skill.title } competency={ skill.competency } /> ) }
		</ul>
	</>
}


