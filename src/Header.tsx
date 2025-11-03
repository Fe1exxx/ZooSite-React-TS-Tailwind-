// Header.tsx
import { useState, useEffect } from 'react';

type Select = 'Main' | 'About us' | 'Autorization';

interface HeaderProps {
  select: Select;
  setSelect: (page: Select) => void;
}

export default function Header({ setSelect }: HeaderProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="flex justify-between bg-gray-600 items-center fixed w-screen p-3 top-0">
        <button onClick={() => setSelect('Main')} className="text-3xl font-bold">
          Logo
        </button>

        <button
          onClick={() => setVisible(!visible)}
          className="block md:hidden cursor-pointer"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => setSelect('Main')} className="hover:text-blue-300">
            Главная
          </button>
          <button onClick={() => setSelect('About us')} className="hover:text-blue-300">
            О нас
          </button>
          <button onClick={() => setSelect('Autorization')} className="hover:text-blue-300 mr-4">
            Авторизация
          </button>
        </nav>
      </header>

      {/* Мобильное меню */}
      {visible && (
        <nav className="fixed top-[60px] left-0 right-0 bg-gray-800 text-white z-50 p-4">
          <button
            onClick={() => {
              setVisible(false);
              setSelect('Main');
            }}
            className="block mb-3 hover:text-blue-400"
          >
            Главная
          </button>
          <button
            onClick={() => {
              setVisible(false);
              setSelect('About us');
            }}
            className="block mb-3 hover:text-blue-400"
          >
            О нас
          </button>
          <button
            onClick={() => {
              setVisible(false);
              setSelect('Autorization');
            }}
            className="block mb-3 hover:text-blue-400"
          >
            Авторизация
          </button>
        </nav>
      )}
    </>
  );
}