import React from "react";
import { Link, Typography } from "@mui/material";
import { theme } from "./GlobalStyle";
export const AnotherBlog = () => {
    const paragrahps = [
                        `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                         Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
                         Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.`,

                        `Curabitur blandit tempus porttitor. 
                         Nullam quis risus eget urna mollis ornare vel eu leo. 
                         Nullam id dolor id nibh ultricies vehicula ut id elit.`,

                        `Etiam porta sem malesuada magna mollis euismod. 
                         Cras mattis consectetur purus sit amet fermentum. 
                         Aenean lacinia bibendum nulla sed consectetur.`,
                         
                        `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
                         Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
                        ];
    
    const praesent = [
        `Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        `Donec id elit non mi porta gravida at eget metus.`,
        `Nulla vitae elit libero, a pharetra augue.`,
    ];

    return (
        <>
        <div style={{paddingTop:'24px',
                     paddingBottom: '24px',
                    }}>
        <Typography sx={{paddingTop:'24px'}}
                    variant='h5'
                    gutterBottom>
            Another blog post
        </Typography>
        <Typography variant="caption"
                    gutterBottom
                    paragraph>
            March 23, 2020 by&nbsp;
            <Link href='/' underline='hover' color={theme.colors.primary}>Matt</Link>
        </Typography>
        {paragrahps.map((elem,index) => (
            <Typography key={index} 
                        variant="body1" 
                        paragraph>
                {elem}            
            </Typography>
        ))}
        </div>
        <div style={{paddingTop: '24px'}}>
        <Typography variant="h5" gutterBottom>
            New feature
        </Typography>
        <Typography variant="caption" 
                    gutterBottom 
                    paragraph>
            March 14, 2020 by&nbsp;
            <Link href='/' underline='hover' color={theme.colors.primary}>Tom</Link>
        </Typography>
            <Typography variant="body1">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Aenean lacinia bibendum nulla sed consectetur. 
            Etiam porta sem malesuada magna mollis euismod. 
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </Typography>
        <ul>
            {praesent.map((elem,index)=>(
                <li key={index}>
                    <Typography key={index} 
                                variant="body1">
                                    {elem}
                    </Typography>
                </li>
            ))}
        </ul>
        <Typography variant="body1" 
                    paragraph>
            Etiam porta sem malesuada magna mollis euismod. 
            Cras mattis consectetur purus sit amet fermentum. 
            Aenean lacinia bibendum nulla sed consectetur.
        </Typography>
        <Typography variant='body1' 
                    paragraph>
            Donec ullamcorper nulla non metus auctor fringilla. 
            Nulla vitae elit libero, a pharetra augue.
        </Typography>
        </div>
        </>
    ) 
}