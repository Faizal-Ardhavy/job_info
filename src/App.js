import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import index from './theme';

function App() {
	return (
		<ChakraProvider theme={index}>
			<div className='App'>
				<Navbar className='position-fixed' />
				<Main />
			</div>
		</ChakraProvider>
	);
}

export default App;
