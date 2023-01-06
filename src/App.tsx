import { ThemeProvider } from 'styled-components'

import { Routes } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	)
}
