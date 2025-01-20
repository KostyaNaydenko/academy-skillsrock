import { useCallback, useState } from 'react';
import { BoxWithButtons, ButtonBack, ButtonNext, CheckoutAppBar, CheckoutPaper, CheckoutStepper, Main } from './Checkout.styles';
import { useTheme ,useMediaQuery, Typography, Toolbar, Step, StepLabel, CssBaseline } from '@mui/material';
import { STEPS } from './constants/constants';
import { StepPage } from './components';

export const Checkout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }, []);
  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  return (
    <>
      <CssBaseline />
      <CheckoutAppBar position="absolute" elevation={4}>
        <Toolbar>
          <Typography variant="h6">Company name</Typography>
        </Toolbar>
      </CheckoutAppBar>

      <Main>
        <CheckoutPaper elevation={1}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>

          <CheckoutStepper activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'}>
            {STEPS.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </CheckoutStepper>

          <StepPage activeStep={activeStep} />

          <BoxWithButtons>
            {activeStep > 0 && activeStep < 3 && <ButtonBack onClick={handleBack}>BACK</ButtonBack>}
            {activeStep < 3 && (
              <ButtonNext onClick={handleNext} variant="contained" color="secondary">
                {activeStep === 2 ? 'PLACE ORDER' : 'NEXT'}
              </ButtonNext>
            )}
          </BoxWithButtons>
        </CheckoutPaper>

        <Typography variant="body2" textAlign="center">
          Copyright © Your Website 2024.
        </Typography>
      </Main>
    </>
  );
};
