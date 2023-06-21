import './App.css';
import Carrousel from './components/Carrousel';
import imagenesSalado from './exports/imagenesSalado';

function App() {
	return (
		<>
			<Carrousel images={imagenesSalado} />
		</>
	);
}

export default App;
