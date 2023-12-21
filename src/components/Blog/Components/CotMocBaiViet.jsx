import * as React from "react";
import { Stack, Typography } from "@mui/material";
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

export default function CotMocBaiViet({ data }) {
    return (
        <Stack
            marginY={2}
            spacing={2}
            flexDirection={'column'}
            justifyContent={'center'}
            width={'100%'}
        >
            <Stack
                width={'100%'}
                borderLeft={2 / 8 + 'rem solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography
                    variant="h6"
                    textTransform={"uppercase"}
                >
                    Cột mốc bài viết
                </Typography>
            </Stack>



            {/* <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse> */}

        </Stack>
    )
}
