
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from "./Styles/theme";
import {Header,Footer} from "./Components"
import Home from './Pages/Home';
import Product from './Pages/Product';
import store from "./Redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ChakraProvider theme={theme}>
      <Header />
        <Home/>
        <Product/>
      <Footer />
        </ChakraProvider>
    </div>
    </Provider>
  );
}

export default App;
