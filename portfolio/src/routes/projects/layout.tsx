
import Project from "./projext"

interface ProjectInterface {
	title: string
	description: string
	image: string
	link?: string
}

const projects: Array<ProjectInterface> = [
	{
		title: "The Owl Cafe",
		description: "A gaming community",
		image: "assets/images/owlcafe.webp",
		link: "https://theowl.cafe"
	}
]

export default function Projects() {
	return <ul>
		{ projects.map( ( project: ProjectInterface, index: number ) => <Project key={ index } image={ project.image } title={ project.title } description={ project.description } to={ project.link } /> ) }
	</ul>
}


