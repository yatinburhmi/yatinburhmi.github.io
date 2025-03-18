import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import Home from "./containers";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease-in-out;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
