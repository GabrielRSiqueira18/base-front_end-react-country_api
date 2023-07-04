import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContexts } from '../../context/ThemeContext'
import { Header, HeaderContainer } from "./styles";
import { useContext } from "react";

export function HeaderComponent() {
	const { theme, handleChangeTheme } = useContext(ThemeContexts)
  
	return (
	<HeaderContainer theme-app={theme}>
		<Header theme-app={theme}>
			<h2>Where in the world</h2>
			<button onClick={() => handleChangeTheme(theme === 'light' ? 'black' : 'light')}>
				{ theme === 'light' ? (
					<>
						<FontAwesomeIcon icon={faMoon} />
						<p>Dark Mode</p>
					</>
				) : (
					<>
						<FontAwesomeIcon icon={faSun} />
						<p>Light Mode</p>
					</>
				) }
			</button>
		</Header>
	</HeaderContainer>
)
}