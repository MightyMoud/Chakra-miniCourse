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
	FormHelperText,
} from '@chakra-ui/core';

const LoginForm = () => {
	return (
		<form action='submit'>
			<Stack spacing={4}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='email' color='gray.500' />} />
						<Input
							type='email'
							id='email'
							aria-label='email'
							placeholder='Email'
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='lock' color='gray.500' />} />
						<Input
							type='password'
							id='password'
							aria-label='Password'
							placeholder='Password'
						/>
					</InputGroup>
				</FormControl>
				<Button
					type='submit'
					boxShadow='sm'
					_hover={{ boxShadow: 'md' }}
					_active={{ boxShadow: 'lg' }}>
					Login
				</Button>
				<FormHelperText textAlign='center'>
					Welcome back!
					<br />
					🏠
				</FormHelperText>
			</Stack>
		</form>
	);
};

export default LoginForm;
