import { useState, useEffect } from "react";

function Search({ cb = Function.prototype }) {
	const [value, setValue] = useState("");

	const handleKey = (e) => {
		if ((e.key = "Enter")) {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		cb(value);
	};

	useEffect(() => {
		cb(value);
		//eslint-disable-next-line
	}, [value]);

	return (
		<div className="row">
			<div className="input-field col s12">
				<input
					type="search"
					placeholder="Введите поиск"
					onKeyDown={handleKey}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<button className="btn" onClick={handleSubmit}>
					Искать
				</button>
			</div>
		</div>
	);
}

export { Search };
