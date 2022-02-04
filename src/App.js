import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import Store from "./Redux/redux-store"
import MainContainer from "./Components/Containers/MainContainer"



function App() {

    return (
        <BrowserRouter>
            <Provider store={Store}>
                <MainContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;

