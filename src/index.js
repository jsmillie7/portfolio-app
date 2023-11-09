import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";


const rootElement = document.getElementById("root");
render(
    // <BrowserRouter>
        // <Routes>
            // <Route path="/" element={<App />}>
            <App />,
                // {/*<Route path="drawer" element={<AppDrawer />} >*/}
                // {/*<Route path={":pageUrl"} element={<Page />}/>*/}
                // {/*</Route>*/}
                // {/* <Route
                //     path="*"
                //     element={
                //         <main style={{ padding: "1rem" }}>
                //             <p>There's nothing here!</p>
                //         </main>
                //     }
                // /> */}
            // </Route>
        // </Routes>
    // </BrowserRouter>,
    rootElement
);