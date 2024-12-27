import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { CloseButtonDiv } from "../Styled.tsx";


export const CloseButton = ({ onClose }) => (
<CloseButtonDiv>
    <IconButton sx={{margin:'10px'}} onClick={()=>onClose()}>
        <CloseIcon />
    </IconButton>
</CloseButtonDiv>
)