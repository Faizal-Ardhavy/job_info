import React from 'react'
import Language from './sections/Language'
import Skill from './sections/Skill'
import {
	VStack,
	StackDivider
} from '@chakra-ui/react'

export default function Main() {
	return (
		<VStack divider={<StackDivider borderColor='gray.200' />}	spacing='8'>	
			<Language />
			<Skill />
		</VStack>
	)
}
