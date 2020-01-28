import {
	Input,
	Stack,
	InputLeftAddon,
	Icon,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	Divider,
	FormHelperText,
} from '@chakra-ui/core';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const form = () => {
	return (
		<>
			<SignupForm />
			<LoginForm />
		</>
	);
};

export default form;
