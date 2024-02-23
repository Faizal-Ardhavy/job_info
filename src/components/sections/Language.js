import React from 'react';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

export default function Language() {
	return (
		<div>
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
		</div>
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