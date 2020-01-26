import {
	FormControl,
	Stack,
	Input,
	Button,
	FormErrorMessage,
	InputLeftAddon,
	InputLeftElement,
	InputGroup,
	Icon,
	Divider,
	Box,
} from '@chakra-ui/core';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
const form = () => {
	return (
		<Box>
			<SignupForm />
			<LoginForm />
		</Box>
	);
};

export default form;
