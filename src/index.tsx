import React, { FC, useState } from "react"
import { transformCyrillicToArabic, transformCyrillicToHapin } from "hapin-utils"

interface IHapinBoxProps {
	cyrillic: string
	arabic?: string
	hapin?: string
	style?: React.HTMLAttributes<HTMLDivElement>["style"]
	// voice?: string
}

const listStyle: React.HTMLAttributes<HTMLDivElement>["style"] = {
	margin: "0 5px",
	padding: "10px",
	borderRadius: "5px",
	backgroundColor: "transparent",
	position: "relative"
}

const activeStyle: React.HTMLAttributes<HTMLSpanElement>["style"] = {
	height: "4px",
	width: "20px",
	position: "absolute",
	bottom: 0,
	left: "50%",
	right: "50%",
	transform: "translateX(-50%)",
	backgroundColor: "rgb(16, 139, 150)",
	borderRadius: "2px"
}

const choice: ["cyrillic" | "arabic" | "hapin", string][] = [
	["cyrillic", "西里尔文字"],
	["arabic", "老文字"],
	["hapin", "哈拼"]
]

export const HapinBox: FC<IHapinBoxProps> = ({ cyrillic, arabic, hapin, style }) => {
	const [stat, setStat] = useState<"cyrillic" | "arabic" | "hapin">("cyrillic")

	return <div style={
		{
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			backgroundColor: "transparent",
			boxShadow: "0 0 2px rgba(0, 0, 0, 0.4)",
			borderRadius: "5px",
			...style
		}}>
		<ul style={
			{
				width: "100%",
				margin: 0,
				padding: "10px",
				listStyle: "none",
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center"
			}
		}>
			{
				choice.map(([tag, label]) => <li
					style={{
						...listStyle
					}}
				>
					<span>{label} </span>
					{
						tag === stat
							? <span style={{ ...activeStyle }}> </span>
							: <span></span>
					}
				</li>)}
		</ul>
		< div >
			{stat === "cyrillic" && cyrillic}
			{stat === "arabic" && !!arabic ? arabic : transformCyrillicToArabic(cyrillic)}
			{stat === "cyrillic" && !!hapin ? hapin : transformCyrillicToHapin(cyrillic)}
		</div>
	</div>

}
