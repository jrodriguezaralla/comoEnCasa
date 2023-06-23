import Slider from './component/Slider';
import imagenesSalado from './exports/imagenesSalado.js';

function App() {
	return (
		<>
			<Slider images={imagenesSalado} />
		</>
	);
}

export default App;
