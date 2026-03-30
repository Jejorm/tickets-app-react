import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { BoardPage } from './pages/BoardPage'
import { DeskPage } from './pages/DeskPage'
import { DeskSelectPage } from './pages/DeskSelectPage'
import { KioskPage } from './pages/KioskPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { WelcomePage } from './pages/WelcomePage'
import { WebSocketProvider } from './context/WebSocketContext'

export default function TicketsApp() {
	return (
		<WebSocketProvider url="wss://tickets-app-vael.onrender.com">
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<WelcomePage />} />
						<Route path="/desk/select" element={<DeskSelectPage />} />
						<Route path="/desk/:deskNumber" element={<DeskPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>

					<Route
						element={<AppLayout showHeader={false} contentWidth="contained" />}
					>
						<Route path="/kiosk" element={<KioskPage />} />
					</Route>

					<Route element={<AppLayout showHeader={false} contentWidth="full" />}>
						<Route path="/board" element={<BoardPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</WebSocketProvider>
	)
}
