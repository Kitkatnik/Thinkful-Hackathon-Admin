import React from "react";
import { Link } from "react-router-dom";
import { IResourceComponentsProps, BaseRecord } from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
    DateField,
    TagField,
    EmailField,
    UrlField,
    Button
} from "@pankod/refine-antd";

export const LogoList: React.FC<IResourceComponentsProps> = () => {
    interface ILogo {
		id: number;
		created_at: string;
        email: string;
        personality: string;
        logo_look: string;
        copy: string;
        website: string;
        dribbble: string;
        likes_dislikes: string;
        extra: string;
        status: "pending" | "in progress" | "complete"
        logo_files: string;
        logo_files_json: JSON;
        logo_files_array: string[];
	}

    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    // const { data } = useMany<ILogo>({
    //     resource: "logos",
    //     ids,
    // });
    // console.log(data)

    return (
        <List
            title="Logo Queue"
            canCreate={false}
            headerButtons={({ defaultButtons }) => (
                <>
                    {defaultButtons}
                    <Link to="/"><Button>Back To Profile</Button></Link>
                </>
            )}
            wrapperProps={{
                style: {
                    width: "100%",
                }
            }}
        >
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Request #" />
                <Table.Column
                    dataIndex={["created_at"]}
                    title="Requested Date"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["email"]}
                    title="Email"
                    render={(value: any) => <EmailField value={value} />}
                />
                <Table.Column dataIndex="status" title="Status" />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
