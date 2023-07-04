import { styled } from "styled-components";
import { themeTypeApp } from "../../context/ThemeContext";
import * as Collapsible  from "@radix-ui/react-collapsible";

interface ThemeTypesStyle {
	'theme-app': themeTypeApp
}

export const HomeColor = styled.div<ThemeTypesStyle>`
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.background_white : props.theme.background_black };
`

export const Form = styled.form<ThemeTypesStyle>`
	padding: 0.75rem;
	width: 100%;
	max-width: 1440px;
	margin: 3rem auto;
	display: flex;
	justify-content: space-between;  
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
	};

	svg {
		width: 1rem;
		height: 1rem;
	};

	section {
		max-width: 30rem;
		width: 100%;
		height: 4rem;
		padding: 1rem;
		background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
		display: flex;
		align-items: center;
		border-radius: 8px;
		gap: 0.5rem;

		button {
			background-color: transparent;
			border: 0;
			cursor: pointer;
		};

		input {
			max-height: 2rem;
			padding: 0 0.5rem;
			color: ${props => props['theme-app'] === 'light' ? props.theme.text_white : props.theme.text_black };;
			border: 0;
			flex: 1;
			font-size: 1rem;
			background-color: transparent;

			&::placeholder {
				color: ${props => props['theme-app'] === 'light' ? props.theme.input_white : props.theme.input_black };
			};
			
			&::-webkit-search-cancel-button {
				cursor: pointer;
			};
		}
}
`

export const ButtonFilter = styled.button<ThemeTypesStyle>`
	padding: 1rem;
	width: 10rem;
	height: 4rem;
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 0;
	border-radius: 8px;
	font-size: 1rem;
	cursor: pointer;
`

export const CollapsibleContentCustom = styled(Collapsible.Content)<ThemeTypesStyle>`
	width: 10rem;
	margin-top: 0.5rem;
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	padding: 1rem;
	border: 0;
	border-radius: 8px;
	font-size: 1rem;
	position: absolute;
`

export const CountriesWrapper = styled.main<ThemeTypesStyle>`
	width: 100%;
	max-width: 1440px;
	margin: 3rem auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 3rem;
	padding: 1rem;
	justify-content: center;

	a {
		text-decoration: none;
	}
`

export const CountriesSingle = styled.div<ThemeTypesStyle>`
	width: 100%;
	height: 26rem;
	max-width: calc((1440px / 4) - 2.75rem);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	border-radius: 8px;
	transition: 0.2s;

	&:hover {
		transform: scale(1.05);
	};

	img {
		width: 100%;
		height: 15rem;
		object-fit: cover;
	};

	h2 {
		font-size: 1.25rem;
		color: ${props => props['theme-app'] === 'light' ? props.theme.text_white : props.theme.text_black };
	};

	div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		
		p {
			color: ${props => props['theme-app'] === 'light' ? props.theme.text_white : props.theme.text_black };;
			font-size: 0.875rem;
			display: flex;
			gap: 0.25rem;
		}
	};
`

export const CountriesSingleTextContainer = styled.div`
	width: 100%;
	padding: 1rem;
`

export const ButtonFilteredRegion = styled.span<ThemeTypesStyle>`
	width: auto;
	height: auto;
	background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
	display: flex;
	border-radius: 8px;
	border: 0;
	cursor: pointer;

	&:not(:first-child) {
		margin-top: 0.75rem;
	};

	&:hover {
		color: ${props => props['theme-app'] === 'light' ? props.theme.input_white : props.theme.input_black };
	}
`