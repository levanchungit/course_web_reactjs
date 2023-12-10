import * as React from "react";
import { Stack, Typography } from "@mui/material";

export default function GioiThieu({ data }) {
    return (
        <Stack
            spacing={2}
            marginY={2}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Stack
                width={'100%'}
                borderLeft={2 / 8 + 'rem solid #000'}
            >
                <Typography 
                    variant="h6" 
                    textTransform={"uppercase"}
                >
                    Giới thiệu
                </Typography>
            </Stack>
            <img
                src={data?.image}
                alt={data?.title}
                width={'100%'}
                height={'auto'}
            />
            <Typography 
                variant="body1" 
                gutterBottom
                textAlign={'justify'}
            >
                {data?.content}
            </Typography>

        </Stack>
    )
}
