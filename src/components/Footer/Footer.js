import React from "react";

const Footer = (props) => {
	return (
		<footer className="footer">
			<p className="footer__message">{props.message}</p>
		</footer>
	);
};

export default Footer;
