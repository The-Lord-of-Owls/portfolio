export default function ContactForm( to: string ) {

	async function handleSubmit(): Promise<void> {
		const res = await fetch( to, {
			method: "POST"
		} )

		if ( res.status === 200 ) {
			//Notification
		}
	}

	return <form className="contact-form">
		
	</form>
}


