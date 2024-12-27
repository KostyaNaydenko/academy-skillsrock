import { useState } from "react";

export const useShopAppBarHandlers = () => {
const [modalCardValue, setModalCardValue] = useState(false);
const [cartValue , setCartValue] = useState(false);

const handleOpenCardModal = () => { setModalCardValue(true) };
const handleCloseCardModal = () => { setModalCardValue(false) };
const handleOpenCart = () => { setCartValue(true) };
const handleCloseCart = () => { setCartValue(false) };

return  [
            handleOpenCardModal, 
            handleCloseCardModal, 
            handleOpenCart, 
            handleCloseCart, 
            modalCardValue, 
            cartValue
        ]
}