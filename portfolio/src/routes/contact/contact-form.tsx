import { FormEvent, ChangeEventHandler, useState } from "react"

export default function ContactForm( to: string ) {
	const [ name, setName ] = useState( "" )
	const [ email, setEmail ] = useState( "" )
	const [ message, setMessage ] = useState( "" )

	async function handleSubmit( event: FormEvent<HTMLFormElement> ): Promise<void> {
		event.preventDefault()

		const res = await fetch( to, {
			method: "POST"
		} )

		if ( res.status === 200 ) {
			//Notification
		}
	}

	async function handleChange( event: FormEvent<HTMLFormElement> ): Promise<void> {
		event.preventDefault()


	}


	return <form className="contact-form" onSubmit={ handleSubmit }>
		<label>Name:
			<input type="text" name="name" value={ name } onChange={ handleChange } />
		</label>
		<label>Email:
			<input type="email" name="email" value={ email } onChange={ handleChange } />
		</label>
		<label>Message:
			<input type="text" name="message" value={ message } onChange={ handleChange } />
		</label>

		<input type="submit" value="Submit" />
	</form>
}


