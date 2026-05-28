import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Read cached preference on mount. Default to dark mode.
    const savedTheme = localStorage.getItem('rds-theme');

    if (savedTheme === 'light') {
      setIsLight(true);
      document.body.classList.add('light-mode');
    } else {
      setIsLight(false);
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);

    if (nextState) {
      document.body.classList.add('light-mode');
      localStorage.setItem('rds-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('rds-theme', 'dark');
    }
  };

  return (
    <button
      id="rds-theme-toggle"
      onClick={toggleTheme}
      className="relative w-[60px] h-[28px] rounded-full bg-neutral-900 border border-[var(--border-color)] transition-colors duration-400 focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] cursor-pointer"
      aria-label="Toggle mode"
    >
      {/* Sliding thumb */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isLight ? 'translate-x-1 bg-[#F8F5F0]' : 'translate-x-[32px] bg-[#111111]'
        }`}
      >
        {isLight ? (
          <span className="text-xs">☀️</span>
        ) : (
          <span className="text-xs">🌙</span>
        )}
      </div>
    </button>
  );
}
