import { Button, Space } from "antd";
import { useState } from "react";

const GenerateButton = ({ userInput, suffixText, setImagePath }) => {
	let user_input = userInput + " " + suffixText;

	const fetchData = async (_prompt) => {
		try {
			const response = await fetch(
				"https://smart-design-api.herokuapp.com/openai/generateimage",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						prompt: _prompt,
						size: "medium",
					}),
				}
			);

			const data_response = await response.json();
			setImagePath(data_response.data);
		} catch (err) {
			console.error(err);
		}
	};

	const [loadings, setLoadings] = useState([]);
	const enterLoading = (index) => {
		setLoadings((prevLoadings) => {
			fetchData(user_input);
			// console.log(user_input);

			const newLoadings = [...prevLoadings];
			newLoadings[index] = true;
			return newLoadings;
		});

		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings];
				newLoadings[index] = false;
				return newLoadings;
			});
		}, 12000);
	};
	return (
		<Space direction="vertical">
			<Space wrap>
				<Button
					type="primary"
					loading={loadings[1]}
					onClick={() => enterLoading(1)}
					style={{ display: "block", width: "200px" }}
				>
					Generate Art
				</Button>
			</Space>
		</Space>
	);
};
export default GenerateButton;
