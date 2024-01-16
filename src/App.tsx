import Hero from 'pages/Home/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
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
                            <Hero />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
