import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface RemoveModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    actions: () => void;
    content?: string;
}

export const RemoveModal = ({ open, onClose, title, actions, content='' }: RemoveModalProps) => {
    return (
    <Dialog open={open} onClose={onClose} aria-labelledby="delete-dialog-title">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
            <Button onClick={actions} autoFocus >
                Yes
            </Button>
            <Button onClick={onClose}>No</Button>
        </DialogActions>
    </Dialog>
);
};