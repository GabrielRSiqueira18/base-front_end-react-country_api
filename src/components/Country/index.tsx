import { api } from "../../lib/axios";
import { CountryContainer, CountryInformationsAboutWrapper, CountryInformationsAboutContainer, CountryInformationsContainer, CountryInformationsAboutOneLeft, CountryInformationsAboutOneRight, BorderCountryInformations, CountryContainerHeight } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContexts } from "../../context/ThemeContext";

interface Country {
  area: number | null
  borders: string[] | null
  capital: string | null
  flagUrl: string | null
  currencyName: { name: string } | null
  name: string | null
  languages: string[] | null
  native: { common: string } | null
  region: string | null
  subregion: string | null
  population: number | null
  topLevelDomain: string[] | null
}

export function Country() {
  const params = useParams()
  const { id } = params
  const [countryInformations, setCountryInformations] = useState<Country | undefined>()
  const { theme } = useContext(ThemeContexts)

  async function getCountry() {
    const response = await api.get(`/name/${id}?fullText=true`)
    const data = response.data[0]

    const countryInformations: Country = {
      area: data.area ?? null,
      borders: data.borders ?? null,
      capital: data.capital ?? null,
      flagUrl: data.flags?.svg ?? null,
      languages: data.languages?.svg ?? null,
      native: data.native?.common ?? null,
      name: data.name?.common ?? null,
      region: data.region ?? null,
      subregion: data.subregion ?? null,
      population: data.population ?? null,
      topLevelDomain: data.tld ?? null,
      currencyName: data.currencyName?.name ?? null,
    }

    setCountryInformations(countryInformations)
  }

  useEffect(() => {
    async function fetchData() {
      await getCountry()
    }

    fetchData()
  }, [])

  if (!countryInformations) {
    return <p>Carregando...</p>
  }

  return (
    <CountryContainerHeight>
      <CountryContainer theme-app={theme}>
        <Link to={"/"}>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
            Voltar
          </button>
        </Link>

        <CountryInformationsContainer>
          <img src={countryInformations.flagUrl ?? ""} alt="" />
          <CountryInformationsAboutContainer>
            <h2>{countryInformations.name ?? ""}</h2>
            <CountryInformationsAboutWrapper>
              <CountryInformationsAboutOneLeft>
                <p>
                  <strong>Native Name: </strong>
                  {countryInformations.native?.common ?? ""}
                </p>
                <p>
                  <strong>Population: </strong>
                  {countryInformations.population ?? ""}
                </p>
                <p>
                  <strong>Region: </strong>
                  {countryInformations.region ?? ""}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {countryInformations.subregion ?? ""}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {countryInformations.capital ?? ""}
                </p>
              </CountryInformationsAboutOneLeft>
              <CountryInformationsAboutOneRight>
                <p>
                  <strong>Top Level Domain</strong>
                  {countryInformations.topLevelDomain?.join(", ") ?? ""}
                </p>
                <p>
                  <strong>Currencies</strong>
                  {countryInformations.currencyName?.name ?? ""}
                </p>
                <p>
									<strong>Languages</strong>
									{(countryInformations.languages ?? []).map((language: string, index: number) =>
										index === countryInformations.languages!.length - 1 ? (
											<span key={language}>{language}</span>
										) : (
											<span key={language}>{language},</span>
										)
									)}
								</p>

              </CountryInformationsAboutOneRight>
            </CountryInformationsAboutWrapper>

            <BorderCountryInformations theme-app={theme}>
              <h2>Border Countries: </h2>
              {countryInformations.borders?.map((border: string) => (
                <button key={border}>{border}</button>
              ))}
            </BorderCountryInformations>
          </CountryInformationsAboutContainer>
        </CountryInformationsContainer>
      </CountryContainer>
    </CountryContainerHeight>
  );
}
