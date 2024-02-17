import React from 'react'
import { Button, Flex } from 'antd';
import { BarChartOutlined, SearchOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;


export default function Navbar() {
	return (
		<header className='top-0 left-0 px-16 py-2 bg-slate-400'>
			<Flex justify='space-between'>

				<BarChartOutlined />

				<Button icon={<SearchOutlined />}>Search</Button>
				
			</Flex>
		</header>
	)
}
