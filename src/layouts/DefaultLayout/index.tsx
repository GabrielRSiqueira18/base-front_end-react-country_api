import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../components/Header'
import { ColorDefault } from './styles'
import { useContext } from 'react'
import { ThemeContexts } from '../../context/ThemeContext'

export function DefaultLayout() {
	const { theme } = useContext(ThemeContexts)

	return (
		<ColorDefault theme-app={theme}>
			<HeaderComponent />
			<Outlet />
		</ColorDefault>
	)
}