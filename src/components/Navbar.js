import React from "react";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="navbar-content">
					<div className="navbar-logo display-flex">
						<img src="./src/images/logo.png" alt="" />
					</div>
					<div className="navlink-items">
						<ul className="display-flex">
							<li>Hello World</li>
							<li>Hello World</li>
							<li>Hello World</li>
						</ul>
					</div>
					<div className="input-search">
						<input
							className="field-input search"
							type="text"
							placeholder="Bạn muốn tìm chủ đề gì?"
						/>
						<i class="fas fa-search"></i>
					</div>
				</div>
				<div className="navbar-content">
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
