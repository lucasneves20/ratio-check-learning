import React from "react";
import Check from "./Check";
import Ration from "./Ration";
import "./style-modal.css";

type Props = {};

export default function Modal({}: Props) {
	return (
		<div>
			<Ration />
			<Check />
			<button className="Button-styled">Accert</button>
		</div>
	);
}
