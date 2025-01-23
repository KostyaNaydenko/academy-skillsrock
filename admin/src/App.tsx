import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { checkAuth } from './features/auth/authThunk';
import { AppRoutes } from './routes/AppRoutes';
import { theme } from './styles/theme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth()); // Check auth status on app load
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
