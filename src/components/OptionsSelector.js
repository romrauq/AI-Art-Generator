import { Select } from "antd";

const OptionsSelector = ({ setsuffixText }) => {
	const handleChange = (value) => {
		setsuffixText(value);
	};

	return (
		<>
			<Select
				defaultValue={"Van Gogh"}
				style={{ width: "200px" }}
				onChange={handleChange}
				options={[
					{
						label: "Van Gogh",
						value: "in the art style of Van Gogh",
					},
					{
						label: "Monet",
						value: "in the art style of Monet",
					},
					{
						label: "Picasso",
						value: "in the art style of Piccasso",
					},
				]}
			/>
		</>
	);
};

export default OptionsSelector;
