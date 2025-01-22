import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { CloseButtonDiv } from "../../Shop.styles";

interface CloseButtonProps {
    onClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
<CloseButtonDiv>
    <IconButton sx={{margin:'10px'}} onClick={()=>onClose()}>
        <CloseIcon />
    </IconButton>
</CloseButtonDiv>
)