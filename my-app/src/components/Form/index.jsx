import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Center,
} from "native-base";

export const Form = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Bem-vindo(a)
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Faça login para administrar!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            type="email"
                            maxLength={100}
                            minLength={5}
                            name="email"
                            id="email"
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            maxLength={20}
                            minLength={6}
                            name="password"
                            id="password"
                        />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "blue"
                        }} alignSelf="flex-end" mt="1">
                            Esqueceu a senha?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="blue">
                        Entrar
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};
