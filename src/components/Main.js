import React from 'react'
import Language from './sections/Language'
import Skill from './sections/Skill'
import {
	Divider,
} from '@chakra-ui/react'

export default function Main() {
	return (
		<>	
			<Language />
			<Divider my='8' />
			<Skill />
		</>
	)
}
