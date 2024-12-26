import { useState } from "react";
import theme from "../../styles/theme";
import { useMediaQuery, Typography, Toolbar, Step, StepLabel, CssBaseline } from "@mui/material";
import { ButtonBack, ButtonNext, CheckoutAppBar, CheckoutPaper, CheckoutStepper, Main } from "./StyledComponents";
import { BankCardData, ProductData, UserData } from "./components";
import { STEPS } from "./constants/constants";

const MainPageComponent = () => {

          const isMg = useMediaQuery(theme.breakpoints.down('md'));

          const [activeStep, setActiveStep] = useState(0);
                          
          const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          };                        
          const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
          };

            return (
              <>
                  <CssBaseline/>
                <CheckoutAppBar position="absolute"  
                                elevation={4}>
                    <Toolbar>
                        <Typography variant="h6">Company name</Typography>
                    </Toolbar>
                </CheckoutAppBar>

                <Main>

                <CheckoutPaper elevation={1}>
                    <Typography variant='h4' 
                                align="center">
                        Checkout
                    </Typography>

                    <CheckoutStepper activeStep={activeStep} 
                                     orientation={isMg?'vertical':'horizontal'}>
                      {STEPS.map((label) => (
                        <Step key={label}>
                          <StepLabel>
                            {label}
                          </StepLabel>
                        </Step>))}
                    </CheckoutStepper>

                      {activeStep === 0 && <UserData key={activeStep} />}
                      {activeStep === 1 && <BankCardData key={activeStep} />}
                      {activeStep === 2 && <ProductData key={activeStep} />}
                      {activeStep === 3 && (
                                              <>
                                                <Typography variant="h5" gutterBottom>
                                                  Thank you for your order.
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                  Your order number is #2001539.
                                                  We have emailed your order confirmation,
                                                  and will send you an update when your order has shipped.
                                                </Typography>
                                              </>
                                            )}

                    <div style={{display: 'flex', 
                        justifyContent: 'flex-end'}}>
                      {activeStep>0&&activeStep<3?
                        <ButtonBack onClick={handleBack}>
                              BACK
                        </ButtonBack>:<></>
                      }
                      {activeStep<3?
                        <ButtonNext onClick={handleNext}       
                                    variant="contained"
                                    color="secondary">
                            {activeStep===2?'PLACE ORDER':'NEXT'}
                        </ButtonNext>:<></>
                      }
                    </div>

                </CheckoutPaper>
                <Typography variant="body2" textAlign='center'>
                  Copyright © Your Website 2024.
                </Typography>

                </Main>
                </>
            )
        }

export default MainPageComponent;