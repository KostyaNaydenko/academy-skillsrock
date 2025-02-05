import {styled} from '@mui/material/styles';
import { Box, Paper, Card, OutlinedInput, Toolbar, Container, AppBar } from "@mui/material";


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
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        width: '700px',
        height: '350px'
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
    [theme.breakpoints.down('md')]: {
        margin: 10,
    },
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
    marginBottom: '15px', 
    maxHeight: '50px', 
    width: '600px',
}));

export const FilterPanelBox = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    padding: 25, 
    margin: 2, 
    marginBottom: 2,  
    border:'1px solid',
    [theme.breakpoints.up('md')]: {
        maxWidth: '350px',
        minWidth: '350px',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: 20,
    },
}));

export const ShopToolBar = styled(Toolbar)(({theme})=>({
    backgroundColor: theme.palette.primary.main, 
    color: theme.palette.secondary.contrastText,
    display:'flex', 
    justifyContent:'space-between', 
    flex: 1,
    width: 'auto'
}));

export const PaginationBox = styled(Box)({
    display: 'flex',
    alignText: 'end', 
    justifyContent: 'center',
    flexGrow: 1, 
    margin: '40px'
});

export const ContentBox = styled(Box)({
    margin: '100px', 
    display: 'flex', 
    flexDirection: 'column',
});

export const TemplatePageMain = styled('main')(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
    } 
}));

export const TemplatePageContent = styled(Box)({
    marginTop: '100px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const TemplatePageSidebar = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '100px',
    marginRight: '20px',

});

export const TemplatePageHeader = styled(AppBar)({
    position: 'absolute', 
    display:'flex', 
    flexGrow:1,
});





