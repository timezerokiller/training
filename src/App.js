import style from './App.module.css';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./Routes/MyRoutes.jsx"
import NavHeader from "./components/NavHeader/NavHeader"
import Store from "./redux/redux-store"
import {Container, Row} from "react-bootstrap";


function App() {

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
                                <MyRoutes/>
                            </Row>
                        </Container>
                    </main>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;

