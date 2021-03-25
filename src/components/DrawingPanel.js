import { useRef } from "react"
import "../styles/DrawingPanel.scss"
import Row from "./Row"
import { exportComponentAsPNG } from "react-component-export-image"

function DrawingPanel({ width, height, selectedColor }) {
	const panelRef = useRef()

	const rows = []

	for (let i = 0; i < height; i++) {
		rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
	}

	return (
		<div id="drawingPanel">
			<div id="pixels" ref={panelRef}>
				{rows}
			</div>
			<button onClick={() => exportComponentAsPNG(panelRef)} className="button">
				Export As PNG
			</button>
		</div>
	)
}

export default DrawingPanel
