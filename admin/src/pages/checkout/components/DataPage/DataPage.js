import { UserData, BankCardData, ProductData } from "..";
import { Typography } from "@mui/material";

export const DataPage = ({activeStep}) => {
    return (
      <>
        {activeStep === 0 && <UserData key={activeStep} />}
          {activeStep === 1 && <BankCardData key={activeStep} />}
          {activeStep === 2 && <ProductData key={activeStep} />}
          {activeStep === 3 && (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will send you an update when
                your order has shipped.
              </Typography>
            </>
          )}
      </>
    )};