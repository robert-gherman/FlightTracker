import ThemeButton from 'components/ThemeButton/ThemeButton';
import Flights from 'pages/Home/Flights';
import Hero from 'pages/Home/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageSelect } from 'components/LanguageSelect';

function App() {
    return (
        <Router>
            <div className="flex items-center justify-end">
                <LanguageSelect />
                <ThemeButton />
            </div>

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
                    path="/search/:number"
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
