import { Box, Paper, Card, OutlinedInput } from "@mui/material";
import {styled} from '@mui/material/styles';

export const BoxCard = styled(Box)({
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    height: '250px',
});

export const BoxCart = styled(Box)({
    boxShadow: '24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    minWidth: '500px',
    minHeight: '300px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '800px',
    maxWidth: '1000px',
    borderRadius: '15px',
});

export const BoxButtons = styled(Box)({
    display: 'flex', 
    justifyContent:'space-between', 
    width:'536px',
});

export const CartPaper = styled(Paper)({
    minWidth: '500px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export const ShopProductCard = styled(Card)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    height: '75%',
    backgroundColor: theme.palette.background.paper,
}));


export const CardMain = styled('main')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
});

export const CloseButtonDiv = styled('div')({
    display: 'flex', 
    justifyContent: 'end', 
    margin: 0,
    padding: 0,
});

export const DataDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    width: '100%',
});

export const CardButtonsDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',  
    width: '100%',
    marginTop: '20px',
});

export const SearchInput = styled(OutlinedInput)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px', 
    marginLeft: '80px', 
    marginBottom: '15px', 
    maxHeight: '50px', 
    maxWidth: '300px',
}));







