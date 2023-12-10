import * as React from "react";
import { Stack, Typography } from "@mui/material";

export default function BaiVietNoiBac({ data }) {
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
                    Bài viết nổi bật
                </Typography>
            </Stack>
            {
                data ? data.map((item, index) => {
                    return (
                        <Stack>
                            <Typography
                                align="justify"
                                variant="h6"
                                key={index}
                                onClick={() => {
                                    alert('Chức năng này đang được phát triển');
                                }}
                                sx={{
                                    cursor: 'pointer'
                                }}
                            >
                                &#8226; {item.title}
                            </Typography>
                        </Stack>
                    )
                }) : null
            }

        </Stack>
    )
}
