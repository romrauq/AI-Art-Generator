import { Input } from "antd";

const InputText = ({ setUserInput }) => {
	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<Input
			style={{ marginTop: "25px", width: "300px" }}
			placeholder="Enter your image description here"
			onChange={handleInputChange}
		/>
	);
};

export default InputText;
