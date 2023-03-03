import React from "react";
import { IResourceComponentsProps, useShow, useGetIdentity, useOne, HttpError } from "@pankod/refine-core";
import {
    Show,
    Typography,
    TextField,
    ImageField,
    UrlField,
    EditButton,
    RefreshButton
} from "@pankod/refine-antd";

const { Title } = Typography;

export const Dashboard: React.FC<IResourceComponentsProps> = () => {
    interface IProfile {
		id: number;
		full_name: string;
		avatar_url: string;
        website: string;
        linkedin: string;
        github: string;
        description: string;
	}

    const { queryResult } = useShow();
    const { data } = queryResult;

    const record = data?.data;

    const { data: user, isLoading } = useGetIdentity();
    const { data: profileData } = useOne<IProfile, HttpError>({
		resource: "profile",
		id: user?.id,
	});
    const profile = profileData?.data;

    return (
        <Show isLoading={isLoading} title="Your Profile" goBack={false} breadcrumb={false} headerButtons={() => (
                <>
                    <EditButton 
                        resourceNameOrRouteName="profile"
                        recordItemId={user?.id}
                    >Edit</EditButton>
                </>
            )} >
            <Title level={5}>Full Name</Title>
            <TextField value={profile?.full_name} />
            <Title level={5}>Avatar Url</Title>
            <ImageField style={{ maxWidth: 200 }} value={profile?.avatar_url} />
            <Title level={5}>Website</Title>
            <UrlField value={profile?.website} />
            <Title level={5}>Linkedin</Title>
            <UrlField value={profile?.linkedin} />
            <Title level={5}>Github</Title>
            <UrlField value={profile?.github} />
            <Title level={5}>Description</Title>
            <TextField value={profile?.description} />
        </Show>
    );
};
