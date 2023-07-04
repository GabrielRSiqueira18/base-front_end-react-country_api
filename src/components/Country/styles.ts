import { styled } from "styled-components";
import { themeTypeApp } from "../../context/ThemeContext";

interface ThemeTypeColors {
	'theme-app': themeTypeApp
}

export const CountryContainerHeight = styled.div`
	height: 100vh;
`

export const CountryContainer = styled.div<ThemeTypeColors>`
	padding: 1rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  a {
    text-decoration: none;

    button {
      width: 7.5rem;
      height: 2.25rem;
      font-weight: 300;

      border: 0;
      border-radius: 4px;
      -webkit-box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.background_white : props.theme.background_black };
      -moz-box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.background_white : props.theme.background_black };
      box-shadow: 0px 0px 5px 0px ${props => props['theme-app'] === 'light' ? props.theme.background_white : props.theme.background_black };
      background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };

      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    
    }
  };
`

export const CountryInformationsContainer = styled.div`
	width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  height: 20rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 75%;
    margin: 0 auto;
    gap: 2rem;
  };

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  };
`

export const CountryInformationsAboutContainer = styled.div`
	display: flex;
  flex-direction: column;
  padding: 2rem 0;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  };

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    alignItems: center;
  }
`

export const CountryInformationsAboutWrapper = styled.div`
	display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const CountryInformationsAboutOneLeft = styled.div`
	display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const CountryInformationsAboutOneRight = styled.div`
	display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      display: flex;
      gap: 0.25rem;
    };
  };
`

export const BorderCountryInformations = styled.div<ThemeTypeColors>`
	margin-top: 3rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  };

  h2 {
    font-size: 1rem;
  };

  button {
    width: 5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props['theme-app'] === 'light' ? props.theme.elements_white : props.theme.elements_black };
    color: ${props => props['theme-app'] === 'light' ? props.theme.text_white : props.theme.text_black };

    border: 0;
  }
`