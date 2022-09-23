import { ChakraComponent, Container, Box } from '@chakra-ui/react';
import './styles.css';
import TopBar from './Components/TopBar';
import DeckMenu from './Components/DeckMenu';

interface Props {
  theme: object,
  Box: ChakraComponent<"div", {}>,
  Container: ChakraComponent<"div", ContainerProps>,
}

const App: React.FC<Props> = () => {
  return (
    <Box w="100%" h='100%' direction="column" >
      <TopBar />
      <Container className="App" mt="3rem" maxW='3xl' align="center" bgColor="white" >
        <DeckMenu />
      </Container>
    </Box>
  );
}

export default App;