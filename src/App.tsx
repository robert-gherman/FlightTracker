import ThemeButton from 'components/ThemeButton/ThemeButton';
import Flights from 'pages/Home/Flights';
import Hero from 'pages/Home/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <ThemeButton />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="h-screen">
                            <Hero />
                        </div>
                    }
                />
                <Route
                    path="/search/:airline/:number"
                    element={
                        <div className="h-screen">
                            <Flights />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
