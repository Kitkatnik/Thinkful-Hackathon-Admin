import { useContext } from "react";
import {
	useGetIdentity,
	useLogout,
	useIsExistAuthentication,
	useOne,
	HttpError,
} from "@pankod/refine-core";
import {
	AntdLayout,
	Space,
	Avatar,
	Typography,
	Switch,
	Icons,
} from "@pankod/refine-antd";
import { ColorModeContext } from "contexts";
const { LogoutOutlined } = Icons;

const { Text } = Typography;

export const Header: React.FC = () => {
	const { mode, setMode } = useContext(ColorModeContext);

	const { data: user } = useGetIdentity();

	interface IProfile {
		id: number;
		full_name: string;
		avatar_url: string;
	}
	const id = user?.id;

	const { data } = useOne<IProfile, HttpError>({
		resource: "profile",
		id,
	});
	const record = data?.data;

	const isExistAuthentication = useIsExistAuthentication();
	const { mutate: mutateLogout } = useLogout();

	const logout = isExistAuthentication && (
		<Text
			key="logout"
			onClick={() => mutateLogout()}
			style={{ cursor: "pointer", color: "#ffffff" }}
		>
			<span>
				<LogoutOutlined />
			</span>{" "}
			Logout
		</Text>
	);

	return (
		<AntdLayout.Header
			style={{
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center",
				padding: "0px 24px",
				height: "64px",
				gap: "20px",
			}}
		>
			<Switch
				checkedChildren="🌛"
				unCheckedChildren="🔆"
				onChange={() => setMode(mode === "light" ? "dark" : "light")}
				defaultChecked={mode === "dark"}
			/>
			<Space
				size="middle"
				align="center"
				style={{
					color: "#ffffff",
				}}
			>
				<Text
					ellipsis
					strong
					style={{
						display: "flex",
						color: mode === "light" ? "#ffffff" : "#ffffff",
					}}
				>
					{record?.full_name}
				</Text>
				<Avatar size="large" src={record?.avatar_url} alt={record?.full_name} />
				{logout}
			</Space>
		</AntdLayout.Header>
	);
};
