import React from 'react';
import { useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import {Button, IconButton} from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard, addCard, getCards } from '../slices/cardsArray.ts';
import { Modal } from '@mui/material';
import { ModalBox } from '../Theming.tsx';
import CloseIcon from '@mui/icons-material/Close';
import MyForm from './TestForm.tsx';

export const ProductForm = ({modalValue, onCloseModal}) => {

    return (
        <Modal open={modalValue}>
            <ModalBox sx={{bgcolor: 'background.paper', p:4}}>
            <div style={{display: 'flex', justifyContent: 'end', marginBottom: '5px'}}>
                    <IconButton sx={{marginBottom:'10px'}} onClick={onCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </div>
            <MyForm onCloseModal={onCloseModal}/>
            </ModalBox>
        </Modal>
    )
}   