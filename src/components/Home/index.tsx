import { api } from '../../lib/axios';
import { ButtonFilter, CollapsibleContentCustom, CountriesSingle, CountriesSingleTextContainer, CountriesWrapper, Form, ButtonFilteredRegion, HomeColor } from '../Home/styles';
import { faArrowDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

import { useForm } from 'react-hook-form';
import { ThemeContexts } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

interface Countrys {
  name: {common: string};
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  nativeName: string;
  flags: {svg: string, alt: string};
  currencies: Currency[];
  languages: Language[];
  tld: string[]
  continents: string[]
  borders: string[]
  alt: string
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Country {
  name: string;
  flag: string;
  alt: string
  currency: object
  continents: string[]
  language: object
  population: number
  region: string
  subregions: string
  borders: string[]
  tld: string[]
  capital: string
}

interface UseFormProps {
  searchCountry: string
}

export function Home() {

  const [ countries, setCountries ] = useState<Country[]>([])
  const [ regions, setRegions ] = useState<string[]>([])
  const [open, setOpen] = useState(false)
	const { theme } = useContext(ThemeContexts)

  const { register, handleSubmit, watch, setValue } = useForm<UseFormProps>({
    defaultValues: {
      searchCountry: "",
    }
  })

  const searchInputValue = watch("searchCountry")

	console.log(theme)

  async function handleSearchCountry(data: UseFormProps) {
    try {
      if(data.searchCountry == '') {
        fetchCountries()
      } else {
        const response = await api.get(`/name/${data.searchCountry}`)
        
        const countriesData = response.data.map((country: Countrys) => {
          const id = Math.floor(Math.random() * 99999)
          return {
              name: country.name.common,
              flag: country.flags.svg,
              alt: country.flags.alt,
              borders: country.borders,
              continents: country.continents,
              currency: country.currencies,
              languages: country.languages,
              population: country.population,
              region: country.region,
              subregions: country.subregion, 
              capital: country.capital,
              tld: country.tld,
              id,
            };
        });
        setCountries(countriesData)
      }
      
      
    } catch (err) {
      setValue("searchCountry", "Pais não encontrado")
    }
  }

  async function handleSearchCountryFilteredRegion(_: React.MouseEvent<HTMLSpanElement> | undefined, regionName: string) {
    try {
      const response = await api.get(`/region/${regionName}`)
    

      const countriesData = response.data.map((country: Countrys) => {
        console.log(country.name.common)
        const id = Math.floor(Math.random() * 99999)
        return {
            name: country.name.common,
            flag: country.flags.svg,
            alt: country.flags.alt,
            borders: country.borders,
            continents: country.continents,
            currency: country.currencies,
            languages: country.languages,
            population: country.population,
            region: country.region,
            subregions: country.subregion, 
            capital: country.capital,
            tld: country.tld,
            id,
          };
      });
      setCountries(countriesData)
      setOpen(false)
    } catch (err) {
      console.error(err)
    }
  }

  async function fetchCountries() {
    const response = await api.get('/all')
    
    const countriesData = response.data.map((country: Countrys) => {
      const id = Math.floor(Math.random() * 99999)
      return {
          name: country.name.common,
          flag: country.flags.svg,
          alt: country.flags.alt,
          borders: country.borders,
          continents: country.continents,
          currency: country.currencies,
          languages: country.languages,
          population: country.population,
          region: country.region,
          subregions: country.subregion, // fixed property name
          tld: country.tld,
          capital: country.capital,
          id,
        };
    });
    setCountries(countriesData)
    const allRegions = countriesData.map((country: Countrys) => country.region)
    const regionsFiltered = allRegions.filter((region: string, index: number, arr: string[]) => index === arr.indexOf(region))
    setRegions(regionsFiltered)
  }
  
  const regionsFiltered = regions.filter((region, index, arr) => index == arr.indexOf(region))
  
  useEffect(() => {
    fetchCountries()
    
  }, [])


  return (
    <HomeColor theme-app={theme}>
      <Form
			theme-app={theme} onSubmit={handleSubmit(handleSearchCountry)}>
        <section>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input 
            type="search" 
            placeholder="Pesquise por país / paises" 
            value={searchInputValue}
            {...register("searchCountry")}
          />
        </section>
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <Collapsible.Trigger asChild>
            <ButtonFilter
						theme-app={theme}>
              Filter by region
              <FontAwesomeIcon icon={faArrowDown} />
            </ButtonFilter>
          </Collapsible.Trigger>
          <CollapsibleContentCustom
					theme-app={theme}>
          {regionsFiltered.map(region => {
              return (
                <ButtonFilteredRegion 
								theme-app={theme}
                  key={region}
                  onClick={(e: React.MouseEvent<HTMLSpanElement> | undefined) => handleSearchCountryFilteredRegion(e, region)}
                 
                >
                  {region}
                </ButtonFilteredRegion>
              )
            })}
          </CollapsibleContentCustom>
        </Collapsible.Root>
      </Form>

      <CountriesWrapper
			theme-app={theme}>
        {countries.map(country => {
          return (
            <Link 
              key={country.name} 
              to={`/country/${country.name}`}
            >
              <CountriesSingle
							theme-app={theme}>
                <img src={country.flag} />
                <CountriesSingleTextContainer>
                  <h2>{country.name}</h2>
                  <div>
                    <p>
                      <strong>Population: </strong>
                      {country.population}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {country.region}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {country.capital ? country.capital : "undefined"}
                    </p>
                  </div>
                </CountriesSingleTextContainer>
              </CountriesSingle>
            </Link>
          )
        })}  
      </CountriesWrapper>  
		</HomeColor>
  )
}
