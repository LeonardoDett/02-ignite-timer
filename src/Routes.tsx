import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Routes() {
	return (
		<BrowserRouter>
			<RouteList>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/history" element={<History />} />
				</Route>
			</RouteList>
		</BrowserRouter>
	)
}
