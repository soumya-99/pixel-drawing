import { useState } from "react"
import { CirclePicker } from "react-color"
import "../styles/Editor.scss"
import DrawingPanel from "./DrawingPanel"

function Editor() {
	const [panelWidth, setPanelWidth] = useState(16)
	const [panelHeight, setPanelHeight] = useState(16)
	const [hideOptions, setHideOptions] = useState(false)
	const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
	const [buttonText, setButtonText] = useState("start drawing")
	const [selectedColor, setSelectedColor] = useState("#f44336")

	// onClick event for the start drawing state button
	const initializeDrawingPanel = () => {
		// when the button is pressed, we revert the pre-defined states to hide options and show the drawing panel.
		setHideOptions(!hideOptions) // false to true
		setHideDrawingPanel(!hideDrawingPanel) // true to false

		buttonText === "start drawing"
			? setButtonText("reset")
			: setButtonText("start drawing")
	}

	// after clicking a color
	const changeColor = (color) => {
		setSelectedColor(color.hex)
	}

	return (
		<div id="editor">
			<h1>Pixel Editor</h1>
			{hideDrawingPanel && <h2>Enter Panel Dimentions</h2>}
			{hideDrawingPanel && (
				<div id="options">
					<div className="option">
						<input
							type="number"
							className="panelInput"
							defaultValue={panelWidth}
							onChange={(e) => setPanelWidth(e.target.value)}
						/>
						<span>Width</span>
					</div>
					<div className="option">
						<input
							type="number"
							className="panelInput"
							defaultValue={panelHeight}
							onChange={(e) => setPanelHeight(e.target.value)}
						/>
						<span>Height</span>
					</div>
				</div>
			)}
			<button className="button" onClick={initializeDrawingPanel}>
				{buttonText}
			</button>

			{hideOptions && (
				<CirclePicker color={selectedColor} onChangeComplete={changeColor} />
			)}
			{hideOptions && (
				<DrawingPanel
					width={panelWidth}
					height={panelHeight}
					selectedColor={selectedColor}
				/>
			)}
		</div>
	)
}

export default Editor
