import React from "react";
import {Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalBlockProps = {
    title: string
    visible: boolean
    onClose: () => void
    children: React.ReactNode
}

export const ModalBlock: React.FC<ModalBlockProps> = ({title, visible= false, onClose, children}): React.ReactElement | null => {

    if (!visible) return null

    return <Dialog open={visible}>
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
