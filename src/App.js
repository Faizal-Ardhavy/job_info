import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Navbar className='position-fixed' />
				<Main />
			</div>
		</ChakraProvider>
	);
}

export default App;
