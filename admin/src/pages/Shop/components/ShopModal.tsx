import React from 'react';
import { Button, IconButton } from '@mui/material/';
import { Modal } from '@mui/material';
import { ModalBoxCart } from '../Theming.tsx';
import CloseIcon from '@mui/icons-material/Close';
import { CardAddingForm } from './CardAddingForm.tsx';
import { Cart } from './Cart.tsx';
import { CartAddingForm } from './CartAddingForm.tsx';
import { useDispatch } from 'react-redux';
import { clearCart } from '../slices/sliceCart.ts';

export const ShopModal = ({modalValue, onCloseModal, content, selectedCard, setSelected}) => {
    
    const dispatch = useDispatch();

    let contentModal;
    switch(content) {
        case 'AddProductForm': contentModal = <CardAddingForm selectedCard={selectedCard} setSelected={setSelected} onCloseModal={onCloseModal}/>;
        break;
        case 'Cart': contentModal = <Cart />;
        break;
        case 'CartAddForm': contentModal = <CartAddingForm setSelected = {setSelected} onClose={onCloseModal} selectedCard={selectedCard} />;
        break;
    }


    return (
        <Modal open={modalValue}>
            <ModalBoxCart sx={{bgcolor: 'background.paper', p:4}}>
            <div style={{display: 'flex', justifyContent: 'end', marginBottom: '5px'}}>
                    <IconButton sx={{marginBottom:'10px'}} onClick={onCloseModal}>
                        <CloseIcon />
                    </IconButton>
            </div>
            {contentModal}
            {content=='Cart'?<Button onClick={()=>dispatch(clearCart())} children='очистить'/>:<></>}
            </ModalBoxCart>
        </Modal>
    )
}   