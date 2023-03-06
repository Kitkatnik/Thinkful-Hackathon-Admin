import React from "react";
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
} from "@pankod/refine-antd";

export const LogoList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column
                    dataIndex={["created_at"]}
                    title="Created At"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["email"]}
                    title="Email"
                    render={(value: any) => <EmailField value={value} />}
                />
                <Table.Column dataIndex="personality" title="Personality" />
                <Table.Column dataIndex="logo_look" title="Logo Look" />
                <Table.Column dataIndex="copy" title="Copy" />
                <Table.Column
                    dataIndex={["website"]}
                    title="Website"
                    render={(value: any) => <UrlField value={value} />}
                />
                <Table.Column
                    dataIndex={["dribbble"]}
                    title="Dribbble"
                    render={(value: any) => <UrlField value={value} />}
                />
                <Table.Column
                    dataIndex="likes_dislikes"
                    title="Likes Dislikes"
                />
                <Table.Column dataIndex="extra" title="Extra" />
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
