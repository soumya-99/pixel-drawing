import "../styles/Row.scss"
import Pixel from "./Pixel"

function Row({ width, selectedColor }) {
	const pixels = []

	for (let i = 0; i < width; i++) {
		pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
	}

	return <div className="row">{pixels}</div>
}

export default Row
