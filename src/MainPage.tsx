import ImagePage from "./ImagePage";

type Select = 'Main' | 'About us' | 'Autorization';

interface MainPageProps {
  current: Select;
}

const MainPage = ({ current }: MainPageProps) => {
  switch (current) {
    case 'Main': return <ImagePage />
    case 'About us': return <div className="p-4 mt-15"><h1>Здесь могла быть ваша реклама)</h1></div>;
    case 'Autorization': return <div className="p-4 mt-15">Форма авторизации</div>;
    default:
      return null;
  }
};

export default MainPage;