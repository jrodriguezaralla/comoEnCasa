import Slider from './component/Slider';
import imagenesDulce from './exports/imagenesDulce.js';
import imagenesSalado from './exports/imagenesSalado.js';
import imagenesTorta from './exports/imagenesTorta.js';

function App() {
	return (
		<>
			<Slider images={imagenesDulce} />
			<Slider images={imagenesSalado} />
			<Slider images={imagenesTorta} />
		</>
	);
}

export default App;
