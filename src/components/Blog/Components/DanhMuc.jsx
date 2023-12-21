import * as React from "react";
import { Stack, Typography } from "@mui/material";

export default function DanhMuc({ data2 }) {
    const data = [
        {
            _id: 1,
            title: 'Tin tức',
            lst_content: [
                {
                    _id: 11,
                    content: 'Tin tức 1'
                },
                {
                    _id: 12,
                    content: 'Tin tức 2'
                },
                {
                    _id: 13,
                    content: 'Tin tức 3'
                }
            ]
        },
        {
            _id: 2,
            title: 'Sự kiện',
            lst_content: [
                {
                    _id: 21,
                    content: 'Sự kiện 1'
                },
                {
                    _id: 22,
                    content: 'Sự kiện 2'
                },
                {
                    _id: 23,
                    content: 'Sự kiện 3'
                }
            ]
        }
    ];

    const data1 = [
        {
            _id: 11,
            content: 'Tin tức 1 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?'
        },
        {
            _id: 12,
            content: 'Tin tức 2 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?'
        },
        {
            _id: 13,
            content: 'Tin tức 3 lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum?'
        }
    ]

    const ItemDanhMuc = ({ item }) => {
        return (
            <Stack
                px={1.5}
                py={0.5}
                borderRadius={1}
                border={"1px solid #ddd"}
            >
                <Typography
                    align="center"
                    fontSize={14}
                    fontFamily={"Open Sans"}
                    fontWeight={"Regular"}
                    color={"#333"}
                    lineHeight={1.5}
                >
                    {item.title}
                </Typography>
            </Stack>
        )
    }

    const ItemContent = ({ item }) => {
        return (
            <Stack
                px={1.5}
                py={0.5}
                borderRadius={3}
                border={"1px solid #ddd"}
            >
                <Typography
                    align="justify"
                    fontSize={14}
                    fontFamily={"Open Sans"}
                    fontWeight={"Regular"}
                    color={"black"}
                    lineHeight={1.5}
                >
                    {item.content}
                </Typography>
            </Stack>
        )
    };

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
                    Danh mục
                </Typography>
            </Stack>

            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1.5}
            >
                {
                    data.length > 0 ? data.map((item, index) => {
                        return (
                            <ItemDanhMuc
                                key={index}
                                item={item}
                            />
                        )
                    }) : null
                }
            </Stack>

            <Stack
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                spacing={1.5}
            >
                {
                    data1 && data1.length > 0
                        ? data1.map((item, index) => {
                            return (
                                <ItemContent
                                    key={index}
                                    item={item}
                                />
                            )
                        }) : null
                }
            </Stack>


        </Stack>
    )
}
