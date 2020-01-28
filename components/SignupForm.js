import {
	Input,
	Stack,
	Icon,
	InputGroup,
	InputLeftElement,
	Button,
	FormControl,
	Divider,
	FormHelperText,
} from '@chakra-ui/core';
const SignupForm = () => {
	return (
		<form action='submit'>
			<Stack spacing={3}>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<Icon name='info' />} />
						<Input
							type='name'
							placeholder='First name'
							aria-lable='First name'
						/>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<InputGroup>
						<InputLeftElement children={<Icon name='info' />} />
						<Input type='name' placeholder='Last name' aria-lable='Last name' />
					</InputGroup>
				</FormControl>
				<Divider borderColor='gray.300' />
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
					Sign up!
				</Button>
				<FormHelperText textAlign='center'>
					We will never share your email!
					<br />
					🤞🏼
				</FormHelperText>
			</Stack>
		</form>
	);
};

export default SignupForm;
