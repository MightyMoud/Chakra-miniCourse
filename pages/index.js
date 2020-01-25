import { Box, useColorMode } from '@chakra-ui/core';

const index = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			w='200px'
			h='20vh'
			bg={['gray.200', 'gray.300', 'gray.400', 'gray.600']}
			rounded='full'
			boxShadow='md'
		/>
	);
};

export default index;
