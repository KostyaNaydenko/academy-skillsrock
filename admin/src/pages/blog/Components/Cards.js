import React,{ useState,useEffect,useRef } from "react";
import { Paper, Grid, GridItem, Grid2, Typography, Link, CardActionArea, CardContent, Card } from "@mui/material";
import styled from "styled-components";
import { theme } from "./GlobalStyle";

export const Cards = () => {

    const [isLoaded, setIsloaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(entry => {
            if(entry[0].isIntersecting){
                setIsloaded(true);
                observer.unobserve(imgRef.current);
            }})

            if(imgRef.current) observer.observe(imgRef.current);

            return () => observer.disconnect();
    }, []);

    return (
        <>
            <Paper elevation={1}
                   sx={{backgroundColor: 'rgba(66, 66, 66,0.3)',
                   marginBottom: '32px'}}>

                   {isLoaded && <img ref={imgRef} src="https://source.unsplash.com/random" />}
                
                <Grid container>
                    <Grid item md={6}>
                        <div style={{
                             padding:'48px',
                             paddingRight: '0px', 
                             position: "relative"}}>

                            <Typography gutterBottom={true} 
                                        variant='h3' 
                                        component='h1'>
                                               Title of a longer
                                               featured blog post
                            </Typography>
                            <Typography color= 'inherit'
                                        variant="h5" 
                                        paragraph={true}>
                                               Multiple lines of text that form the lede, 
                                               informing new readers quickly and
                                               efficiently about what's most interesting in this post's contents.
                            </Typography>
                            <Link variant='subtitle1'
                                  color={theme.colors.primary}
                                  underline="hover"
                                  href='#'>
                                    Continue reading...
                            </Link>    
                        </div>
                        </Grid >
                </Grid>
            </Paper>

            <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <CardActionArea aria-disabled={false} href='#'>
                            <Paper elevation={1}>
                                <div style={{flex: 1}}>
                                    <CardContent>
                                        <Typography variant='h5' 
                                                    component='h2'>
                                            Featured post
                                        </Typography>
                                        <Typography variant='subtitle1' color={theme.colors.secondary} component='h6'>
                                            Nov 12
                                        </Typography>
                                        <Typography variant='subtitle1'
                                                    paragraph={true}>
                                            This is a wider card with supporting text below as a natural lead-in to additional content.
                                        </Typography>
                                        <Typography variant='subtitle1' color={theme.colors.primary} component='h6'>
                                            Continue reading...
                                        </Typography>
                                        <div style={{width: '160px', height: '100%', display: 'flex'}}></div>
                                    </CardContent>
                                </div>
                            </Paper>
                        </CardActionArea>
                    </Grid>

                    <Grid item xs={12} md={6}>
                            <CardActionArea aria-disabled={false} href='#'>
                                <Paper elevation={1}>
                                    <div style={{flex: 1}}>
                                        <CardContent>
                                            <Typography variant="h5">
                                            Post title
                                            </Typography>
                                            <Typography variant="subtitle1" color={theme.colors.secondary}>
                                            Nov 11
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph={true}>
                                            This is a wider card with supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                            <Typography variant="subtitle1" color={theme.colors.primary}>
                                            Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Paper>
                            </CardActionArea>
                    </Grid>
            </Grid>
        </>
    )}