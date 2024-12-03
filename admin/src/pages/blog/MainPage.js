import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import { GlobalStyle, theme } from "./Components/GlobalStyle.js";
import  { Header }  from "./Components/Header.js";
import { Cards } from "./Components/Cards.js";
import { Blog, PrimaryBlog } from "./Components/PrimaryBlog.js";
import { AnotherBlog } from "./Components/AnotherBlog.js";
import { SideBar } from "./Components/SideBar.js";
import { Footer } from "./Components/Footer.js";

export const MainBlogComponent = () => {
        
        return (
                <ThemeProvider theme={theme}>
                <GlobalStyle />
                        <Container maxWidth='lg'>
                                <Header/>
                                        <Cards/>
                                        <Grid container 
                                              spacing={5}
                                              sx={{marginTop: '5px'}}>
                                                <Grid item 
                                                      xs={12} 
                                                      md={8}>
                                                        <PrimaryBlog/>
                                                        <AnotherBlog/>
                                                </Grid>
                                                <SideBar/>
                                        </Grid>
                        </Container>
                        <Footer/>
                </ThemeProvider>
        )};
                       
