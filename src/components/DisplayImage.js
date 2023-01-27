import React from "react";
import { Image } from "antd";
import image_path from "../resources/snooze_bot.png";

const DisplayImage = ({ imagePath }) => (
	<div>
		{imagePath ? (
			<Image width={100} style={{ borderRadius: "10px" }} src={imagePath} />
		) : (
			<div>
				<center>
					<Image width={100} style={{ borderRadius: "10px" }} src={image_path} />
				</center>
			</div>
		)}
	</div>
);

export default DisplayImage;
