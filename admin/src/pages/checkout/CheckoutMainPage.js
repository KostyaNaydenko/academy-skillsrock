import { useState } from "react";
import { Toolbar, Typography, Step, StepLabel, CssBaseline, useMediaQuery} from "@mui/material";
import { ButtonBack, ButtonNext, CheckoutAppBar, CheckoutPaper, CheckoutStepper, Main } from "./Theming";
import theme from "../../styles/theme";
import CheckoutUser from "./components/СheckoutUser/СheckoutUser";
import BankCardData from "./components/CheckoutBankData/CheckoutBankData";
import ProductData from "./components/CheckoutProductData/CheckoutProductData";

 const MainPageComponent = () => {
          const isMg = useMediaQuery(theme.breakpoints.down('md'));

          const steps = [
                        'Shipping address', 
                        'Payment details',
                        'Review your order',
                        ]

          const [activeStep, setActiveStep] = useState(0);
                          
          const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          };
                          
          const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
          };

          const getCheckoutComponent = () => {
            switch (activeStep) {
              case 0: return <CheckoutUser key={activeStep} />;
              case 1: return <BankCardData key={activeStep} />;
              case 2: return <ProductData key={activeStep} />;
              case 3: return <><Typography variant="h5" 
                                          gutterBottom>
                                Thank you for your order.
                              </Typography>
                              <Typography variant="subtitle1">
                                Your order number is #2001539. 
                                We have emailed your order confirmation, 
                                and will send you an update when your order has shipped.
                              </Typography></>
              default: return null;
            }
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
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>
                            {label}
                          </StepLabel>
                        </Step>))}
                    </CheckoutStepper>

                    {getCheckoutComponent()}

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