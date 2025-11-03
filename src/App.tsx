import { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';

type Select = 'Main' | 'About us' | 'Autorization';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Select>('Main');

  return (
    <div>
      <Header select={selectedPage} setSelect={setSelectedPage} />
      <MainPage current={selectedPage} />
    </div>
  );
}