import { extendTheme } from '@chakra-ui/react'

import colors from './values/colors'

const styles = {
	colors,
  styles: {
		global: {
			'html, body': {
				fontFamily: 'body',
				color: 'on_background',
				bg: 'background',
			},
      'header': {
				bg: '',
      },
    },
	},
	textStyles: {
    h1: {
      fontSize: ['3xl', '4xl'],
      fontWeight: 'bold',
      lineHeight: 'taller',
      letterSpacing: 'normal',
    },
    h2: {
      fontSize: ['xl', '2xl'],
      fontWeight: 'semibold',
      lineHeight: 'taller',
      letterSpacing: 'normal',
    },
    h3: {
      fontSize: ['lg', 'xl'],
      fontWeight: 'semibold',
      lineHeight: 'taller',
      letterSpacing: 'normal',
    },
    p: {
      fontSize: ['md', 'lg'],
      fontWeight: 'normal',
      lineHeight: 'tall',
      letterSpacing: 'normal',
    },
  },
}

export default extendTheme(styles)