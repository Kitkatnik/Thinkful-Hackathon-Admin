import React from "react";
import { Link } from "react-router-dom";

import { IResourceComponentsProps, useShow, useGetIdentity, useOne, HttpError } from "@pankod/refine-core";
import {
    Show,
    Typography,
    TextField,
    ImageField,
    UrlField,
    EditButton,
    RefreshButton,
    Button
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
        logo_complete?: boolean;
        logo_requested?: boolean;
        logo_id?: number;
	}

    const { data: user, isLoading } = useGetIdentity();
    const { data: profileData } = useOne<IProfile, HttpError>({
		resource: "profiles",
		id: user?.id,
	});
    const profile = profileData?.data;
    // console.log(profile);

    const logoButton = () => {
        const { logo_complete, logo_requested, logo_id } = profile ?? {};
        if (!logo_complete && !logo_requested) {
            return (<Link to="/logos/create"><Button>Request A Logo</Button></Link>);
        } else if(!logo_complete && logo_requested) {
            return (<Link to="/logos"><Button>Check Logo Queue</Button></Link>);
        } else if(logo_complete){
            return (<Link to={`/logos/show/${logo_id}`}><Button>View Logo</Button></Link>);
        }
    }

    // pending, submitted, creating, revising, completed, cancelled

    return (
        <Show 
            isLoading={isLoading} 
            title="Your Profile" 
            goBack={false} 
            breadcrumb={false} 
            headerButtons={() => (
                <>
                    <EditButton 
                        resourceNameOrRouteName="profiles"
                        recordItemId={user?.id}
                    >Edit</EditButton>
                    {logoButton()}
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

