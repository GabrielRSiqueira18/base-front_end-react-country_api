import styled from "styled-components"
import { themeTypeApp } from "../../context/ThemeContext"

interface ThemeTypesStyle {
	'theme-app': themeTypeApp
}

export const ColorDefault = styled.div<ThemeTypesStyle>`
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.background_white : props.theme.background_black };
`