import DishApp from './components/DishApp';
import './App.css';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`
function App() {
  return (
    <div >
      <GlobalStyles />
      <DishApp />
    </div>
  );
}

export default App;
