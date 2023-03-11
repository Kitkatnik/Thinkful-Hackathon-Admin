import React from "react";
import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    DateField,
    TagField,
    EmailField,
    TextField,
    UrlField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const LogoShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Created At</Title>
            <DateField value={record?.created_at} />
            <Title level={5}>Email</Title>
            <EmailField value={record?.email} />
            <Title level={5}>Personality</Title>
            <TextField value={record?.personality} />
            <Title level={5}>Logo Look</Title>
            <TextField value={record?.logo_look} />
            <Title level={5}>Copy</Title>
            <TextField value={record?.copy} />
            <Title level={5}>Website</Title>
            <UrlField value={record?.website} />
            <Title level={5}>Dribbble</Title>
            <UrlField value={record?.dribbble} />
            <Title level={5}>Likes Dislikes</Title>
            <TextField value={record?.likes_dislikes} />
            <Title level={5}>Extra</Title>
            <TextField value={record?.extra} />
            <Title level={5}>Status</Title>
            <TextField value={record?.status} />
        </Show>
    );
};
