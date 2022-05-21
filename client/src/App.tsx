import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Dashboard } from './pages/Dashboard';
import { theme } from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>

  );
}

export default App;
