import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavigateButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/muiBlog')
    }

    return (
        <Button onClick={handleClick}>Blog</Button>
    )}
