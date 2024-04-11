import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defautTheme } from './styles/themes/defaut'
import { BrowserRouter} from 'react-router-dom'
import { Router } from './components/Routes'
// import { CoffeContextProvider } from './contexts/CoffeContexts'

export function App() {

  return (
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}