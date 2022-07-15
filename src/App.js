import { Container, Text } from '@chakra-ui/react';
import './styles.css';
import DeckMenu from './Components/DeckMenu'

function App(props) {
  return (
    <Container className="App" m={2}>
      <Text fontSize='3xl' color='pink1' >Welcome to my flashcard app. </Text>
      <DeckMenu />
      
    </Container>
  );
}

export default App;