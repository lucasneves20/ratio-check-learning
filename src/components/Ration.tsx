import React, { useState } from "react";

type Props = {};

export default function Ration({}: Props) {
	const [select, setSelect] = useState("");
	return (
		<div>
			<div className="radio-container">
				<div>
					<input
						type="radio"
						className="radio-element"
						checked={select === "foo"}
						value="foo"
						onClick={() => setSelect("foo")}
						id="radio1"
					/>
					<label>Basic</label>
				</div>
				<span>5 tb of space whith easy-to-use</span>
			</div>
			<div className="radio-container">
				<div>
					<input
						type="radio"
						className="radio-element"
						checked={select === "bar"}
						value="bar"
						onClick={() => setSelect("bar")}
						id="radio2"
					/>
					<label>Advanced</label>
				</div>
				<span>As much space as your team needs with</span>
			</div>
		</div>
	);
}
