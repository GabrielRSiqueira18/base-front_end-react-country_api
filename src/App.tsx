import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import { GlobalStyle } from "./styles/global"
import { ThemeContextProvider } from "./context/ThemeContext"

export function App() {
	
	return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
				<GlobalStyle />
			</ThemeContextProvider>
    </ThemeProvider>
  )
}