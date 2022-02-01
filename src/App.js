import style from './App.module.css';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes.jsx"
import NavHeader from "./components/NavHeader/NavHeader"
import Store from "./redux/redux-store"
import {Container, Row} from "react-bootstrap";
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function App() {

    const options = {
        // you can also just use 'bottom center'
        position: positions.TOP_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE,
        type: "success"
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

