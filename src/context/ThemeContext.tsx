import { createContext, useState } from "react";

export type themeTypeApp = 'light' | 'black'

interface CreateContextType {
	theme: themeTypeApp
	handleChangeTheme: (value: themeTypeApp) => void
}

interface ThemeContextProviderProps {
	children: React.ReactNode
}

export const ThemeContexts = createContext({} as CreateContextType)

export function ThemeContextProvider({ children }: ThemeContextProviderProps)  {
	const [ theme, setTheme ] = useState<themeTypeApp>('light')

	function handleChangeTheme(value: themeTypeApp) {
		setTheme(value)
	}
	
	return (
		<ThemeContexts.Provider value={{ theme, handleChangeTheme }}>
			{children}
		</ThemeContexts.Provider>
	)
}