import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { CloseButtonDiv } from "../../Shop.styles";

interface CloseButtinProps {
    onClose: () => void;
}

export const CloseButton: React.FC<CloseButtinProps> = ({ onClose }) => (
<CloseButtonDiv>
    <IconButton sx={{margin:'10px'}} onClick={()=>onClose()}>
        <CloseIcon />
    </IconButton>
</CloseButtonDiv>
)