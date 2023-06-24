import Slider from './component/Slider';
import imagenesDulce from './exports/imagenesDulce.js';
import imagenesSalado from './exports/imagenesSalado.js';

function App() {
	return (
		<>
			<Slider images={imagenesDulce} />
		</>
	);
}

export default App;
