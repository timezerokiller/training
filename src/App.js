import style from './App.module.css';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes.jsx"
import NavHeader from "./Components/NavHeader/NavHeader"
import Store from "./Redux/redux-store"
import {Container, Row} from "react-bootstrap";
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function App() {

    const options = {
        timeout: 4000,
        offset: '30px',
    }


    return (
        <BrowserRouter>
            <Provider store={Store}>
                <div className={style.App}>
                    <header className={style.AppHeader}>
                        <Container>
                            <Row>
                                <NavHeader/>
                            </Row>
                        </Container>
                    </header>
                    <main>
                        <Container>
                            <Row>
                                <AlertProvider template={AlertTemplate} {...options}>
                                    <MyRoutes/>
                                </AlertProvider>
                            </Row>
                        </Container>
                    </main>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;

