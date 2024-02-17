import React from 'react'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import { Typography, Col, Row } from 'antd';

const { Title, Paragraph } = Typography;

export default function Language() {
  return (
	  <div><Row className='px-16 py-2 text-left'>
		  <Col span={12}>

			  <Typography>
				  <Title>Language Based</Title>

				  <Paragraph>
					  In the process of internal desktop applications development, many different design specs and
					  implementations would be involved, which might cause designers and developers difficulties and
					  duplication and reduce the efficiency of development.
				  </Paragraph>
			  </Typography>
		  </Col>
		  <Col span={12}>
			  <LineChart
				  width={500}
				  height={300}
				  data={data}
				  margin={{
					  top: 5,
					  right: 30,
					  left: 20,
					  bottom: 5
				  }}
			  >
				  <CartesianGrid strokeDasharray="3 3" />
				  <XAxis dataKey="name" />
				  <YAxis />
				  <Tooltip />
				  <Legend />
				  <Line
					  type="monotone"
					  dataKey="AI"
					  stroke="#8884d8"
					  activeDot={{ r: 8 }}
				  />
				  <Line type="monotone" dataKey="Web Dev" stroke="#82ca9d" />
			  </LineChart>
		  </Col>
	  </Row></div>
  )
}

const data = [
	{
		name: "Januari",
		AI: 4000,
		'Web Dev': 2400
	},
	{
		name: "Februari",
		AI: 3000,
		'Web Dev': 1398
	},
	{
		name: "Maret",
		AI: 2000,
		'Web Dev': 9800
	},
	{
		name: "April",
		AI: 2780,
		'Web Dev': 3908
	},
	{
		name: "Mei",
		AI: 1890,
		'Web Dev': 4800
	},
	{
		name: "Juni",
		AI: 2390,
		'Web Dev': 3800
	}
];