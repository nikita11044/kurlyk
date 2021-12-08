import React from 'react'
import {Divider, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {styled} from "@mui/styles";

const TagsWrapper = styled('div')({
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
        paddingTop: 0
    }
})

const TagsListHeader = styled(Paper)({
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: '13px 18px',
    '& b': {
        fontSize: 20,
        fontWeight: 800
    }
})

const TagListItem = styled(ListItem)({
    cursor: 'pointer',
    '& .MuiTypography-body1': {
        fontWeight: 700
    },
    '& MuiListItemAvatar-root': {
        minWidth: 50
    },
    '& .MuiListItemText-root': {
        margin: 0
    },
    '&:hover': {
        backgroundColor: '#edf3f6'
    },
    '& a': {
        color: 'inherit',
        textDecoration: 'none'
    }
})

export const TagsBlock = (): React.ReactElement => {

    return <TagsWrapper>
        <TagsListHeader variant="outlined">
            <b>Это знать надо!</b>
        </TagsListHeader>
        <List>
            <TagListItem>
                <ListItemText
                    primary={'Москва'}
                    secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                            Курлыков: 777
                        </Typography>
                    }/>
            </TagListItem>
            <Divider/>
            <TagListItem>
                <ListItemText
                    primary={'#коронабибис'}
                    secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                            Курлыков: 777
                        </Typography>
                    }/>
            </TagListItem>
            <Divider/>
            <TagListItem>
                <ListItemText
                    primary={'Японский флот'}
                    secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                            Курлыков: 777
                        </Typography>
                    }/>
            </TagListItem>
            <Divider/>
            <TagListItem>
                <ListItemText
                    primary={'Бибо, Боба и Абоба'}
                    secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                            Курлыков: 777
                        </Typography>
                    }/>
            </TagListItem>
        </List>
    </TagsWrapper>
}
