import {
	Input,
	Stack,
	Icon,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	FormHelperText,
} from '@chakra-ui/core';
const LoginForm = () => {
	return (
		<form action='submit'>
			<Stack spacing={3}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<Icon name='email' />} />
						<Input type='email' placeholder='Email' aria-lable='Email' />
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<Icon name='lock' />} />
						<Input
							type='password'
							placeholder='Password'
							aria-lable='Password'
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
					Welcome Home!
					<br />
					🏠
				</FormHelperText>
			</Stack>
		</form>
	);
};

export default LoginForm;
