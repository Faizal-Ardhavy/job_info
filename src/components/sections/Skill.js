import React from 'react'

import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Text,
	Box,
	Grid,
	GridItem,
	Stack, HStack, VStack
} from '@chakra-ui/react'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';


export default function Skill() {
	return (
		<div>
			<HStack spacing='8rem'>
				<Box w='full'>
					<LineChart width={500} height={350} data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line	type="monotone" dataKey="AI" stroke="#8884d8" activeDot={{ r: 8 }}/>
						<Line type="monotone" dataKey="Web Dev" stroke="#82ca9d" />
					</LineChart>					
				</Box>
				<Box w='full'>
					<Text textStyle='h3'>Skill</Text>
					<Text textStyle='p'>Skill used in the job market</Text>
					<Box minW='sm' m='8' p='4' borderWidth='1px' borderRadius='lg' overflow='hidden'>
						<StatGroup>
							<Stat>
								<StatLabel>AI</StatLabel>
								<StatNumber>345,670</StatNumber>
								<StatHelpText>
									<StatArrow type='increase' />
									23.36%
								</StatHelpText>
							</Stat>
							<Stat>
								<StatLabel>Web Dev</StatLabel>
								<StatNumber>45</StatNumber>
								<StatHelpText>
									<StatArrow type='decrease' />
									9.05%
								</StatHelpText>
							</Stat>
						</StatGroup>
					</Box>
				</Box>
			</HStack>
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