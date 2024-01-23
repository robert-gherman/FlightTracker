import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
export default function ThemeButton() {
    const isDark = () => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme === 'light') {
            return false;
        }

        return true;
    };
    const [darkTheme, setDarkTheme] = useState(isDark());

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkTheme]);

    const handleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <>
            <button onClick={handleTheme} className="m-4 rounded hover:bg-gray-700">
                {!darkTheme ? (
                    <MdDarkMode style={{ height: '30px', width: '30px' }} />
                ) : (
                    <MdLightMode style={{ height: '30px', width: '30px' }} />
                )}
            </button>
        </>
    );
}
