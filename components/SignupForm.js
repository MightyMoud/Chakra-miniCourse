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

const SignupForm = () => {
	return (
		<form action='submit'>
			<Stack spacing={4}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='info' color='gray.500' />} />
						<Input
							type='name'
							id='fname'
							aria-label='First name'
							placeholder='First name'
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftAddon children={<Icon name='info' color='gray.500' />} />
						<Input
							type='name'
							id='lname'
							aria-label='Last name'
							placeholder='Last name'
						/>
					</InputGroup>
				</FormControl>
				<Divider />
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
					Sign Up!
				</Button>
				<FormHelperText textAlign='center'>
					We'll never share your email.
					<br />
					We promise! 🤞🏼
				</FormHelperText>
			</Stack>
		</form>
	);
};

export default SignupForm;
