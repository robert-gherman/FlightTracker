import Hero from 'pages/Home/Hero';
import { useCounterStore } from './store';

function App() {
    const counter = useCounterStore((state) => state.count);
    return (
        <div className="h-screen">
            {counter}
            <Hero />
        </div>
    );
}

export default App;
