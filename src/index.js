import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./Components/Expenses/Expenses";
import Invoices from "./Components/Invoices/Invoices";
import Invoice from "./Components/Invoices/Invoice";
import AppDrawer from "./Components/Drawer/Drawer";
import Page from "./Components/Drawer/Page";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/*<Route path="drawer" element={<AppDrawer />} >*/}
                {/*<Route path={":pageUrl"} element={<Page />}/>*/}
                {/*</Route>*/}
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);