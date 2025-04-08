import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface RemoveModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    actions: () => void;
    content?: string;
}

export const RemoveModal = ({ open, onClose, title, actions, content='' }: RemoveModalProps) => {

    const { t } = useTranslation(['translation']);

    return (
    <Dialog open={open} onClose={onClose} aria-labelledby="delete-dialog-title">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
            <Button onClick={actions} autoFocus >{t('yes')}</Button>
            <Button onClick={onClose}>{t('no')}</Button>
        </DialogActions>
    </Dialog>
);
};