import { ThemeProvider, Box, useColorMode } from '@chakra-ui/core';

const index = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			w='200px'
			h='15vh'
			bg={colorMode === 'light' ? 'gray.500' : 'gray.200'}
			boxShadow='md'
			rounded='lg'
		/>
	);
};

export default index;
