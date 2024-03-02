import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react'

export default function Navbar() {
	return (
		<header>
			<Flex alignItems='center' gap='8' p='8'>
				<Box textStyle='h1'>
					Job Recap
				</Box>
				<Spacer />
				<Box textStyle='h3'>
					About
				</Box>
				<Box textStyle='h3'>
					Contact
				</Box>
			</Flex>
		</header>
	)
}
