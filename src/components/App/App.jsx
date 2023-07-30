import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//========================================
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Gallery from '../Gallery/Gallery';
import Pagination from '../Pagination/Pagination';
//========================================
import { Container, Wrapper } from './styled-components';
import GlobalStyles from './global-styles';
//========================================
import { persistor, store } from '../../redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Container>
                        <Wrapper>
                            <Header />
                            <Filter />
                            <Gallery />
                            <Pagination />
                        </Wrapper>
                    </Container>
                </PersistGate>
                <GlobalStyles />
            </Provider>
        </>
    );
}

export default App;