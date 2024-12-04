import * as React from 'react';
import { useRef, useState, useEffect } from "react";
import {Modal, TextField} from '@mui/material';
import { AppBar, Box, Button, Card, CardContent, Container, Grid, Grid2, Input, Paper, ThemeProvider, Typography } from "@mui/material";
import { BoxCard, InputAddCard, MainDiv, ModalBox, StoreAppBar, theme } from "./Theming.tsx";
import { Cart } from './Cart.tsx';

const ProductStore: React.FC = () => {
    interface CartObject {
        name: string,
        description: string,
        quantity: string,
        price: string,
    }

    const nameRef: React.MutableRefObject<HTMLInputElement|null> = useRef<HTMLInputElement>(null);
    const descRef: React.MutableRefObject<HTMLInputElement|null> = useRef<HTMLInputElement>(null);
    const quantityRef: React.MutableRefObject<HTMLInputElement|null> = useRef<HTMLInputElement>(null);
    const priceRef: React.MutableRefObject<HTMLInputElement|null> = useRef<HTMLInputElement>(null);

    const [objectCarts, addObjectCart] = useState<CartObject[]>([]);
    const [isModalOpen, setOpen] = useState<boolean>(false);
   
    const handleAddCart = ():void => {
        if(nameRef.current?.value && descRef.current?.value && quantityRef.current?.value && priceRef.current?.value) {
        addObjectCart([...objectCarts,{ name: nameRef.current.value, 
                                       description: descRef.current.value,
                                       quantity: quantityRef.current.value,
                                       price: priceRef.current.value,
                                      }]);
        nameRef.current.value = '';
        setOpen(false);
        }
    }


    const deleteCart = (index: number):void => {
      addObjectCart(objectCarts.filter((_,i)=>i!=index));       
    }
    

    return (
    
    <ThemeProvider theme={theme}>
    <StoreAppBar onButtonClick = {setOpen} />
        <Modal 
                open={isModalOpen}>
            <ModalBox sx={{bgcolor: 'background.paper', p:4}}>
                <TextField 
                           inputRef={nameRef}
                           label='введите название товара'
                           variant='standard'
                           sx={{marginBottom: '30px'}}/>
                <TextField inputRef={descRef}
                           label='введите описание товара'
                           variant='standard'
                           sx={{marginBottom: '30px'}}/>
                           <div style={{display: 'flex', justifyContent:'space-between',}}>
                           <TextField   size='small'
                                        inputRef={quantityRef}
                                        label='Количество'
                                        sx={{marginBottom: '30px',
                                            display: 'inline-block',
                                            width: '117px',
                                        }}>
                            
                           </TextField>
                           <TextField   size='small'
                                        inputRef={priceRef}
                                        sx={{
                                        display: 'inline-block',
                                        width: '130px',
                           }}
                                        label='Цена'></TextField>
                                        </div>
                <Button onClick={handleAddCart} children='сохранить' variant='contained' size='small' sx={{maxWidth:'100px'}}/>
            </ModalBox>
        </Modal>
                <div style={{width: '90%', 
                    marginLeft: '60px',
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Grid container spacing={4} 
                            wrap='wrap'
                            sx={{marginTop:'20px'}} >
        {objectCarts.map((elem,index)=>(
             
            <Cart key={index} cartObject={elem} onRemove={()=>deleteCart(index)}/>
        ))}
                    </Grid>
                    </div>
    </ThemeProvider>

)}

export default ProductStore;