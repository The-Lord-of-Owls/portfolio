export default function Notification( title: string, description: string, buttons: Array<string> ) {
	function handleButtonClick(): void {

	}

	return <div className="notify">
		<p className="notify-title">{ title }</p>
		<p className="notify-description">{ description }</p>
		{ buttons.map( ( btn: string, index: number ) => <button className="notify-btn" onClick={ handleButtonClick } key={ index }>{ btn }</button> ) }
	</div>
}


