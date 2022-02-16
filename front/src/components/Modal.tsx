import React from "react";
import {Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalProps = {
    title: string
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({title, open= false, onClose, children}): React.ReactElement | null => {

    if (!open) return null

    return <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            maxWidth="md">
        <DialogTitle id="form-dialog-title">
            <IconButton
                color="primary"
                aria-label="close"
                onClick={onClose}
            >
                <CloseIcon style={{fontSize: 26}}/>
            </IconButton>
            {title}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
}
