import React from 'react';
import './index.css';
import Medicines from './routes/medicines/medicines';
import Cabinet from './routes/cabinet/cabinet'
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import AppBar from './components/appbar'
/* react router */
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

/* react store */
import store from './store/store'
import { Provider } from 'react-redux'

/* Mui theme provider */
import {createTheme, ThemeProvider} from "@mui/material";

// custom app styling to manage how much top-spacing there is
const appStyling = (topSpacing) => {return {
    position: 'absolute',
    top: topSpacing,
    left: "50%",
    transform: "translateX(-50%)"
}}

// My own material UI theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: '#ADF5FF'
        },
        black: {
            main: '#000000'
        },
        grey: {
            main: '#E1E1E1'
        }
    }
});

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Medicines />} />
                        <Route path="/cabinet" element={<Cabinet />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    </Provider>,
    rootElement
);

// If you want to start measuring performance in your medicine_list, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
