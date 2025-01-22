import { useDispatch } from "react-redux";
import { useState } from "react";
import { delCard } from "../pages/Shop/slices";

export const useShopCardHandlers = (cardID) => {
    
    const dispatch = useDispatch();

    const [addingToCartModal, setAddingToCartModal] = useState(false);
    const [editingMode, setEditingMode] = useState(false);

    const handleDelCard = () => dispatch(delCard(cardID));
    const handleOpenAddingToCartModal = () => setAddingToCartModal(true);
    const handleCloseAddingToCartModal = () => setAddingToCartModal(false);
    const handleEditing = () => setEditingMode(true);
    const handleCloseEditing = () => setEditingMode(false);

    return [ 
            handleDelCard, 
            handleOpenAddingToCartModal, 
            handleCloseAddingToCartModal, 
            handleEditing, 
            handleCloseEditing, 
            addingToCartModal, 
            editingMode,
        ];
}