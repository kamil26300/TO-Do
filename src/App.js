import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";

import React, { Component } from "react";

class App extends Component {
	state = {
		items: [],
		text: "",
	};

	handleChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	handleAdd = (e) => {
		if (this.state.text !== "") {
			const item = [...this.state.items, this.state.text];
			this.setState({
				items: item,
				text: "",
			});
		}
	};

	handleDelete = (id) => {
		const old = [...this.state.items];
		const item = old.filter((e, i) => {
			return i !== id;
		});
		this.setState({
			items: item,
		});
	};

	handleEnter = (e) => {
        if (e.keyCode === 13) {
          this.handleAdd();
        }
    }

	render() {
		return (
			<div className="container-fluid my-5">
				<div className="row">
					<div className="col-sm-7 mx-auto shadow-lg p-3">
						<h1 className="text-center">
							To-Do List
						</h1>
						<div className="row">
							<div className="col-9">
								<input
                                    autoFocus
                                    ref={(ip) => this.myInp = ip}
									type="text"
									className="form-control"
									placeholder="Write Plan here"
									value={this.state.text}
									onChange={this.handleChange}
                                    onKeyDown={this.handleEnter}
								/>
							</div>
							<div className="col-3">
								<button
									className="btn btn-warning px-3 fw-bold"
									onClick={() => {
                                        this.handleAdd()
                                        this.myInp.focus()
                                    }}>
									Add
								</button>
							</div>
							<div className="container-fluid">
								<ul className="list-unstyled row m-5">
									{this.state.items.map(
										(value,i) => {
											return (
												<Plan
													value={value}
													key={i}
													i={i}
													handleDelete={
														this.handleDelete
													}
                                                />
											);
										}
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
