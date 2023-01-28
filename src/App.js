import React, { useState } from "react";
import DisplayImage from "./components/DisplayImage";
import InputText from "./components/InputText";
import OptionsSelector from "./components/OptionsSelector";
import GenerateButton from "./components/GenerateButton";
import { Layout, Menu, Typography, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
	const [userInput, setUserInput] = useState("");
	const [suffixText, setsuffixText] = useState("in the art style of Van Gogh");
	const [imagePath, setImagePath] = useState("");

	return (
		<Layout className="layout">
			<Header>
				<div className="logo">AI Art Generator</div>
				<Menu theme="dark" mode="horizontal" />
			</Header>

			<Title style={{ textAlign: "center" }}>AI Art Generator</Title>

			<Content
				style={{
					padding: "5px",
					margin: "0 auto 85px",
					width: "fit-content",
					height: "fit-content",
				}}
			>
				<Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<DisplayImage imagePath={imagePath} />
				</Row>

				<Row>
					<InputText setUserInput={setUserInput} />
				</Row>

				<Row
					style={{
						padding: "5px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Col>
						<center>
							<OptionsSelector setsuffixText={setsuffixText} />
						</center>
					</Col>
				</Row>

				<Row
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Col>
						<GenerateButton
							userInput={userInput}
							suffixText={suffixText}
							setImagePath={setImagePath}
						/>
					</Col>
				</Row>
			</Content>

			<Footer style={{ textAlign: "center" }}>
				<small>
					AI Art Generator ©2023 Created by John Q. (
					<a href="https://twitter.com/romrauq">@romrauq</a>)
				</small>
			</Footer>
		</Layout>
	);
};

export default App;
