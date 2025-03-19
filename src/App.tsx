import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./containers";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
