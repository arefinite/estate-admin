import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/routes'
import { ThemeProvider } from './components/admin/theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
export default App
