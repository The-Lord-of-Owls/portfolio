import ContactForm from "./contact-form"
import Social from "./social"

interface SocialInterface {
	title: string
	icon: string
	link: string
}

const socials: Array<SocialInterface> = [
	{ title: "LinkedIn", icon: "assets/images/linkedin.webp", link: "https://linkedin.com" },
	{ title: "GitHub | Personal", icon: "assets/images/github.webp", link: "https://github.com/The-Lord-of-Owls" },
	{ title: "GitHub | Owl Cafe", icon: "assets/images/github.webp", link: "https://github.com/The-Owl-Cafe" },
	{ title: "GitHub | Old Personal", icon: "assets/images/github.webp", link: "https://github.com/VaasKahnGrim" }
]

export default function Contact() {
	return <div className="contact">
		<ContactForm to="/contact/submit" />
		<ul className="social">
			{ socials.map( ( social: SocialInterface, index: number ) => <Social key={ index } title={ social.title } icon={ social.icon } to={ social.link } /> ) }
		</ul>
	</div>
}


