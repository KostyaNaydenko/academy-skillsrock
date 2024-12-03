import React from "react";
import { Button, IconButton, Toolbar, Typography, Link, Divider} from "@mui/material";
import { Search } from "@mui/icons-material";

 export const Header = () => {
    const titles = [
        'Technology',
        'Design',
        'Culture',
        'Business',
        'Politics',
        'Opinion',
        'Science',
        'Health',
        'Style',
        'Travel'
    ]

    return (
            <>
            <Toolbar>
                <Button variant="text"
                        size="small" 
                        children='subscribe'>
                </Button>
                <Typography 
                    variant="h5" 
                    align="center" 
                    color="inherit" 
                    component="h2" 
                    sx={{flex: 1}}>
                    Blog
                </Typography>
                <IconButton 
                    aria-label="search" 
                    color='primary'>
                        <Search />
                </IconButton>
                <Button variant='outlined'
                        color="primary" 
                        children="sign up" 
                        size='small' 
                        sx={{border: '1px solid rgba(255, 255, 255, 0.23)'}}></Button>
            </Toolbar>
            <Divider/>

            <Toolbar variant="dense" 
                     component="nav" 
                     sx={{justifyContent: 'space-between'}}>

                     {titles.map((elem)=>(
                <Link sx={{padding: '8px'}}
                      color="primary" 
                      key={elem} 
                      noWrap 
                      variant="body2"
                      underline="hover"
                      href='#'>{elem}
                </Link>
                     ))}

            </Toolbar>
            </>
    );
}

