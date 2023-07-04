import { styled } from 'styled-components'
import { themeTypeApp } from '../../context/ThemeContext'

interface HeaderContainerType {
	'theme-app': themeTypeApp
}

export const HeaderContainer = styled.div<HeaderContainerType>`
	width: 100%;
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	padding: 1rem;
	-webkit-box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	-moz-box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
`

export const Header = styled.header<HeaderContainerType>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	flex-wrap: wrap;
		
		h2 {
			font-size: 2rem;
			font-weight: 800;
		};

		svg {
			position: relative;
			top: 3px;
			width: 1rem;
			height: 1rem;
		};

		button {
			display: flex;
			text-align: center;
			justify-content: center;
			background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
			border: 0;
			cursor: pointer;

			font-size: 1.125rem;

			gap: 0.5rem;
		}
`