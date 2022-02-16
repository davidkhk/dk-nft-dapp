import { Flex, Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex justify='space-between' align='center' px='1rem' height='2.5rem' borderTop='1px' borderColor='#30834b' bg='#bedadb'>
            <Box color='#203b32' p='.2rem' _hover={{ bg: 'teal', color: 'white', padding: '.2rem', borderRadius: '.75rem' }} >
                <a href='https://github.com/davidkhk' target='_blank' rel='noreferrer'>Designed and built by David Kang</a>
            </Box>
            <Box color='#203b32' _hover={{ bg: 'teal', color: 'white', padding: '.2rem', borderRadius: '.75rem' }} >
                <a href='mailto:hello@davidkang.me'>hello@davidkang.me</a>
            </Box>
        </Flex>
    );
}

export default Footer;