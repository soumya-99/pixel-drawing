import { useState } from "react"
import "../styles/Pixel.scss"

function Pixel({ selectedColor }) {
	// bg color of the pixel
	const [pixelColor, setPixelColor] = useState("#fff")

	// the color when we hover the mouse pointer over the pixel
	const [oldColor, setOldColor] = useState(pixelColor)

	// switching the pixel color
	const [canChangeColor, setCanChangeColor] = useState(true)

	const applyColor = () => {
		setPixelColor(selectedColor)

		// you can't change the color after above setPixelColor(selectedColor)
		setCanChangeColor(false)
	}

	const changeColorOnHover = () => {
		setOldColor(pixelColor)
		setPixelColor(selectedColor)
	}

	const resetColor = () => {
		if (canChangeColor) setPixelColor(oldColor)
		setCanChangeColor(true)
	}

	return (
		<div
			className="pixel"
			onClick={applyColor}
			onMouseEnter={changeColorOnHover}
			onMouseLeave={resetColor}
			style={{ backgroundColor: pixelColor }}
		></div>
	)
}

export default Pixel
