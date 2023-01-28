import { Select } from "antd";

const OptionsSelector = ({ setsuffixText }) => {
	const handleChange = (value) => {
		setsuffixText(value);
	};

	return (
		<>
			<Select
				defaultValue={"Leonardo da Vinci"}
				style={{ width: "200px" }}
				onChange={handleChange}
				options={[
					{
						label: "Leonardo da Vinci",
						value: "in the art style of Leonardo da Vinci",
					},
					{
						label: "Michelangelo",
						value: "in the art style of Michelangelo di Lodovico Buonarrot",
					},
					{
						label: "Raphael",
						value: "in the art style of Raphael Sanzio da Urbino",
					},
					{
						label: "Artemisia Gentileschi",
						value: "in the art style of Artemisia Gentileschi",
					},
					{
						label: "Caravaggio",
						value: "in the art style of Michelangelo Merisi da Caravaggio",
					},
					{
						label: "Rembrandt",
						value: "in the art style of Rembrandt Harmenszoon van Rijn",
					},
					{
						label: "Katsushika Hokusai",
						value: "in the art style of Katsushika Hokusai",
					},
					{
						label: "Utagawa Hiroshige",
						value: "in the art style of Utagawa Hiroshige",
					},
					{
						label: "Eugene Delacroix",
						value: "in the art style of Eugene Delacroix",
					},
					{
						label: "Claude Monet",
						value: "in the art style of Oscar-Claude Monet",
					},
					{
						label: "Mary Cassatt",
						value: "in the art style of Mary Stevenson Cassatt",
					},
					{
						label: "Paul Gauguin",
						value: "in the art style of Paul Gauguin",
					},
					{
						label: "Vincent Van Gogh",
						value: "in the art style of Vincent Willem Van Gogh",
					},
					{
						label: "Pablo Picasso",
						value: "in the art style of Pablo Picasso",
					},
					{
						label: "Georgia O'Keefe",
						value: "in the art style of Georgia O'Keefe",
					},
					{
						label: "Rene Magritte",
						value: "in the art style of Ren Magritte",
					},
					{
						label: "Frida Kahlo",
						value: "in the art style of Frida Kahlo",
					},
					{
						label: "Jackson Pollock",
						value: "in the art style of Jackson Pollock",
					},
					{
						label: "Andy Warhol",
						value: "in the art style of Andy Warhol",
					},
					{
						label: "Jean-Michel Basquiat",
						value: "in the art style of Jean-Michel Basquiat",
					},

					{
						label: "Mauritius Escher",
						value: "in the art style of Mauritius Escher",
					},
				]}
			/>
		</>
	);
};

export default OptionsSelector;
