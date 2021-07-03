import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Header } from './components/Header'
import { Text } from './components/Text'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'light' ? '' : 'layout-dark'}>
      <Header />
      <Text text="Teste" />
      <Text text="Teste 1" />
      <Text text="Teste 2" />
      <Text text="Teste 3" />
      <Text text="Teste 4" />
      <Text text="Teste 5" />
    </div>
  );
}

export default App;
