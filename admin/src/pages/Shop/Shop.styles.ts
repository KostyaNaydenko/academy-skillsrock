import { Height } from "@mui/icons-material";
import { Box, Paper, Card, OutlinedInput, Toolbar, useMediaQuery, Container } from "@mui/material";
import {styled} from '@mui/material/styles';

export const BoxCard = styled(Box)({
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    height: '250px',
});

export const ContainerCart = styled(Container)({
    boxShadow: '24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    minHeight: '300px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
});

export const BoxButtons = styled(Box)({
    display: 'flex', 
    justifyContent:'space-between', 
    width:'536px',
});

export const CartPaper = styled(Paper)(({theme})=>({
    //minWidth: '500px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        width: '700px',
        height: '350px' // Устанавливаем width
    },
}));

export const ShopProductCard = styled(Card)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    height: '75%',
    minHeight: '350px',
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
    marginTop: '6px', 
    marginLeft: '80px', 
    marginBottom: '15px', 
    maxHeight: '50px', 
    maxWidth: '300px',
}));

export const FilterPanelBox = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    padding: 25, 
    marginTop: 2, 
    marginBottom: 2,  
    border:'1px solid', 
}));

export const ShopToolBar = styled(Toolbar)(({theme})=>({
    //isMd: useMediaQuery(theme.breakpoints.down('md')),

    backgroundColor: theme.palette.primary.main, 
    color: theme.palette.secondary.contrastText,
    display:'flex', 
    justifyContent:'space-between', 
    flex: 1,
    width: 'auto'
}));

export const PaginationBox = styled(Box)({
    display: 'flex', 
    justifyContent: 'center',
    flexGrow: 1, 
    margin: '20px'
});

export const ContentBox = styled(Box)({
    margin: '40px', 
    display: 'flex', 
    flexDirection: 'row',
});





