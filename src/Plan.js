function Plan(props) {
	return (
		<div className="d-flex p-0 shadow mb-3">
			<li className="p-2 col-11">
				{props.i + 1}. {props.value}
			</li>
			<button
				className="btnd col-1"
				onClick={() => {
					props.handleDelete(props.i);
				}}>
				X
			</button>
		</div>
	);
}

export default Plan;
