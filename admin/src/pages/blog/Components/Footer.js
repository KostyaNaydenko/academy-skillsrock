import React from "react";
import { Container, Typography, Link } from "@mui/material";
import { theme } from "./GlobalStyle";

export const Footer = () =>{
    return (
                <footer style={{padding: '48px 0px',
                        backgroundColor: '#424242'}}>
                    <Container align='center'>
                        <Typography variant="h6" 
                                    gutterBottom>
                            Footer
                        </Typography>
                        <Typography variant="subtitle1"
                                    color={theme.colors.secondary}>
                            Something here to give the footer a purpose!
                        </Typography>
                        <Typography variant='body2'
                                    color={theme.colors.secondary}>
                           Copyright © 
                            <Link underline="hover"
                                  href='#' 
                                  color={theme.colors.secondary}>
                                Your Website
                            </Link>&nbsp;
                           2024.
                        </Typography>
                    </Container>
                </footer>
)};