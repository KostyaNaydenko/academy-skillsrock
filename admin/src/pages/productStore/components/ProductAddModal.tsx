import React from 'react';
import { useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, updateCard, addCard, setName, setDesc, setPrice, setQuantity } from '../slices/cardsArray.ts';
import { Modal } from '@mui/material';
import { ModalBox } from '../Theming.tsx';


export const ProductForm = () => {

    const dispatch = useDispatch();
    const card = useSelector((state:any) =>state.arrayCards.card);
    const cards = useSelector((state:any)=>state.arrayCards.cards);
    const isModalOpen = useSelector((state:any)=>state.arrayCards.isModalOpen);
    const editingCard = useSelector((state: any)=>state.arrayCards.editingCard);

    return (
        <Modal open={isModalOpen}>
            <ModalBox sx={{bgcolor: 'background.paper', p:4}}>
                <TextField 
                           onChange={(e)=>dispatch(setName(e.target.value))}
                           defaultValue={editingCard?editingCard.name:''}
                           label='введите название товара'
                           variant='standard'
                           sx={{marginBottom: '30px'}}/>

                <TextField 
                           onChange={(e)=>dispatch(setDesc(e.target.value))}
                           defaultValue={editingCard?editingCard.description:''}
                           label='введите описание товара'
                           variant='standard'
                           sx={{marginBottom: '30px'}}/>

                           <div style={{display: 'flex', justifyContent:'space-between',}}>

                           <TextField   type='number'
                                        onChange={(e)=>dispatch(setQuantity(e.target.value))}                           
                                        size='small'
                                        defaultValue={editingCard?editingCard.quantity:''}
                                        label='Количество'
                                        sx={{marginBottom: '30px',
                                            display: 'inline-block',
                                            width: '117px',
                                        }}>
                            
                           </TextField>

                           <TextField   type='number'
                                        onChange={(e)=>dispatch(setPrice(e.target.value))}
                                        defaultValue={editingCard?editingCard.price:''}
                                        size='small'
                                        label='Цена'
                                        sx={{
                                            display: 'inline-block',
                                            width: '130px',}}>

                            </TextField>
                                        </div>

                <Button onClick={()=>{dispatch(openModal(!isModalOpen)); editingCard? dispatch(updateCard(editingCard)): dispatch(addCard(card))}}
                        children='сохранить' 
                        variant='contained' 
                        size='small' 
                        sx={{maxWidth:'100px'}}/>
            </ModalBox>
        </Modal>
    )
} 