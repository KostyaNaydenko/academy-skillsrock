import React from "react";
import { Typography, Paper, Grid, Link, SvgIcon } from "@mui/material";
import {GitHub, Twitter, Facebook } from '@mui/icons-material';
import { theme } from "./GlobalStyle";

export const SideBar = () => {
    
    const links = [
        'March 2020',
        'February 2020',
        'January 2020',
        'November 1999',
        'October 1999',
        'September 1999',
        'August 1999',
        'July 1999',
        'June 1999',
        'May 1999',
        'April 1999',
    ]

    const social = [
        {
            icon: <GitHub/>,
            description: 'GitHub',
        },
        {
            icon: <Twitter/>,
            description: 'Twitter',
        },
        {
            icon: <Facebook/>,
            description: 'Facebook',
        },
    ]
    
   return (

            <Grid item xs={12} 
                  md={4}>
                <Paper elevation={0}
                       sx={{padding: '16px', 
                       backgroundColor: 'rgb(238, 238, 238)'}}>
                    <Typography variant="h6" 
                                gutterBottom>
                        About
                    </Typography>
                    <Typography variant="body1">
                        Etiam porta sem malesuada magna mollis euismod. 
                        Cras mattis consectetur purus sit amet fermentum. 
                        Aenean lacinia bibendum nulla sed consectetur.
                    </Typography>
                </Paper>

                <Typography variant='h6' 
                            gutterBottom
                            paddingTop='24px'>
                    Archives
                </Typography>
                {links.map(elem=>(
                    <Link key={elem}
                          underline="hover"
                          color={theme.colors.primary}
                          href='#' 
                          display='block'
                          variant="body1">{elem}</Link>
                ))}
                <Typography variant='h6' 
                            gutterBottom
                            marginTop='24px'>
                    Social        
                </Typography>
                {social.map(elem=>(
                    <Link key={social.description} 
                          variant="body1"
                          underline="hover"
                          href='#'
                          color={theme.colors.primary}>
                    <Grid container 
                          spacing={1} 
                          alignItems='center'>
                        <Grid item>
                            {elem.icon}
                        </Grid>
                        <Grid item>
                            {elem.description}
                        </Grid>
                    </Grid>
                </Link>))}
                
            </Grid>
)};