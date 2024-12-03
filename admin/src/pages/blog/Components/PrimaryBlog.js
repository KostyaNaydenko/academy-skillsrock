import React from "react";
import { Grid, Typography, Divider, Link } from "@mui/material";
import { theme } from "./GlobalStyle";

export const PrimaryBlog = () => {
    const pregancy = [
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        'Donec id elit non mi porta gravida at eget metus.',
        'Nulla vitae elit libero, a pharetra augue.',
    ]

    const cum = [
        'Vestibulum id ligula porta felis euismod semper.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Maecenas sed diam eget risus varius blandit sit amet non magna.',
    ]

    return (

            <>
                <Typography variant='h6' gutterBottom={true}>
                    From the firehose
                </Typography>
                <Divider/>
                <Typography paddingTop={'24px'}
                            variant="h5" 
                            gutterBottom={true}>
                    Sample blog post
                </Typography>
                <Typography variant="caption" 
                            paragraph>
                    April 1, 2020 by&nbsp;
                    <Link color={theme.colors.primary} underline="hover">Olivier</Link>
                </Typography>
                <Typography variant="body1" 
                            paragraph>
                    This blog post shows a few different types of content that are supported and styled with Material styles.
                    Basic typography, images, 
                    and code are all supported. You can extend these by modifying Markdown.js.             
                </Typography>
                <Typography variant='body1' 
                            paragraph>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                </Typography>
                <Typography variant='body1'
                            paragraph>
                    Curabitur blandit tempus porttitor. 
                    Nullam quis risus eget urna mollis ornare vel eu leo. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </Typography>
                <Typography variant='body1'
                            paragraph>
                    Etiam porta sem malesuada magna mollis euismod. 
                    Cras mattis consectetur purus sit amet fermentum. 
                    Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
                <Typography variant="h6" 
                            gutterBottom>
                    Heading
                </Typography>
                <Typography variant='body1'
                            paragraph>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography variant='subtitile1'
                            gutterBottom>
                    Sub-heading
                </Typography>
                <Typography variant="body1"
                            paragraph>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </Typography>
                <Typography variant="subtitle1" 
                            gutterBottom>
                    Sub-heading
                </Typography>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. 
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                <ul>
                    {pregancy.map((elem, index)=>(
                        <li key={index}>
                            <Typography key={index} variant="body1">
                                {elem}
                            </Typography>
                        </li>
                    ))}
                </ul>
                <Typography variant="body1"
                            paragraph>
                    Donec ullamcorper nulla non metus auctor fringilla. 
                    Nulla vitae elit libero, a pharetra augue.
                </Typography>
                <ol>
                    {cum.map((elem,index)=>(
                        <li key={index}>
                            <Typography key={index} variant="body1">
                                {elem}
                            </Typography>
                        </li>
                   ))}
                </ol>
                <Typography variant="body1"
                            paragraph>
                    Cras mattis consectetur purus sit amet fermentum. 
                    Sed posuere consectetur est at lobortis.
                </Typography>
            </>
)}