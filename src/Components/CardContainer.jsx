import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
  EditIcon,
  LockIcon,
  PlusSquareIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import AddCard from "./AddCard";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";

function CardContainer({
  cards,
  setAddingDeck,
  setDeletingDeck,
  addingCard,
  setAddingCard,
  editingCard,
  setEditingCard,
  currentDeck,
  index,
  setIndex,
  currentCard,
  setDeletingCard,
  deletingCard,
  getCards,
  isShowingBack,
  setIsShowingBack,
}) {
  // add a new card to the current deck in the database
  const handleAddCard = () => {
    if (addingCard) setAddingCard(false);
    else {
      setAddingCard(true);
      setAddingDeck(false);
      setDeletingDeck(false);
      setEditingCard(false);
      setDeletingCard(false);
    }
  };

  // edit the current card in the current deck
  const handleEditCard = () => {
    if (editingCard) setEditingCard(false);
    else {
      setEditingCard(true);
      setAddingDeck(false);
      setDeletingDeck(false);
      setAddingCard(false);
      setDeletingCard(false);
    }
  };

  // delete the current card in the current deck from the database
  const handleDeleteCard = () => {
    if (deletingCard) setDeletingCard(false);
    else {
      setDeletingCard(true);
      setAddingDeck(false);
      setDeletingDeck(false);
      setEditingCard(false);
      setAddingCard(false);
    }
  };

  // button functions to control where you are in the deck and show the back of the current card
  const getPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
      setIsShowingBack(false);
      setEditingCard(false);
      setAddingCard(false);
      setDeletingCard(false);
      setAddingDeck(false);
      setDeletingDeck(false);
    }
  };

  const showBack = () => {
    setIsShowingBack(!isShowingBack);
  };

  const getNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setIsShowingBack(false);
      setEditingCard(false);
      setAddingCard(false);
      setDeletingCard(false);
      setAddingDeck(false);
      setDeletingDeck(false);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center">
      {/* Front of card */}
      <Flex
        minH="xs"
        maxW="lg"
        minW={{ base: "xs", sm: "sm", lg: "lg" }}
        onClick={cards[0] ? showBack : ""}
        borderRadius={6}
        boxShadow="3px 3px 5px 1px #ccc"
        alignItems="center"
        justify="center"
        p={5}
        my={4}
      >
        <Flex direction="column" p={5}>
          {/* {((cards[index].vocabImg !== undefined) && (cards[index].vocabImg !== "./dummyPath")) && <Image
            src={cards[index].vocabImg}
            alt={cards[index].alt}
            maxH="150px"
            maxW="100%"
          />} */}
          {cards.length > 0 && !isShowingBack && (
            <Text
              fontSize="3xl"
              color="primary"
              align="center"
              justify="center"
            >
              {cards[index].sentence_with_blank}
            </Text>
          )}
          {cards.length <= 0 && currentDeck !== "Select a Deck" && (
            <Text fontSize="2xl" align="center">
              This deck is empty. Click the plus icon below to add cards to this
              deck.
            </Text>
          )}
          {currentDeck === "Select a Deck" && (
            <Text fontSize="2xl" align="center" p={12}>
              Select a deck from the menu.
            </Text>
          )}
          {/* Back of card */}
          {isShowingBack && (
            <Flex direction="row" gap={2}>
              <Text fontSize="3xl" color="primary">
                {cards[index].sentence_with_blank.slice(
                  0,
                  cards[index].sentence_with_blank.indexOf("_")
                )}
                <Text
                  as="span"
                  fontSize="3xl"
                  fontWeight="500"
                  color="secondaryDark"
                >
                  {cards[index].word}
                </Text>
                {cards[index].sentence_with_blank.slice(
                  cards[index].sentence_with_blank.lastIndexOf("_") + 1
                )}
              </Text>
              {/* <Text fontSize="3xl" color="secondaryDark" p={8}>
                {cards[index].infinitive}
              </Text>
              <Text fontSize="3xl" color="secondaryDark" p={8}>
                {cards[index].synonyms}
              </Text> */}
            </Flex>
          )}
        </Flex>
      </Flex>
      {/* Icons Container   */}
      <Flex justify="center" mb={2}>
        {cards.length > 0 && (
          <Text fontSize="lg" color="primary">
            {index + 1}/{cards.length}
          </Text>
        )}
      </Flex>
      <Flex justify="center" gridGap={3} mb={2}>
        <Button
          onClick={getPrevious}
          disabled={!cards[index - 1]}
          color={index > 0 ? "white" : "gray.300"}
          bgColor="primary"
          _hover={{ color: "black", bgColor: "gray.200" }}
        >
          <ChevronLeftIcon mr={2} />
          Previous
        </Button>
        <Button
          onClick={showBack}
          bgColor="secondary"
          color="white"
          disabled={!cards[index]}
          _hover={{ color: "black", bgColor: "gray.200" }}
          aria-describedby="Show Back"
          padding={isShowingBack ? "5" : ""}
        >
          {isShowingBack ? <ViewOffIcon mr={2} /> : <ViewIcon mr={2} />}
          {isShowingBack ? "Hide " : "Show"}
        </Button>
        <Button
          onClick={getNext}
          disabled={!cards[index + 1]}
          color={index < cards.length - 1 ? "white" : "gray.300"}
          bgColor="primary"
          _hover={{ color: "black", bgColor: "gray.200" }}
        >
          Next
          <ChevronRightIcon ml={2} />
        </Button>
      </Flex>
      {currentDeck !== "Select a Deck" && (
        <Flex justify="center" align="center" gridGap={4} p={2}>
          <PlusSquareIcon
            w={5}
            h={5}
            color="gray"
            onClick={handleAddCard}
            sx={{ cursor: "pointer" }}
          />
          {cards[index] && cards[index].locked === false && (
            <Flex gap={4}>
              <EditIcon
                w={5}
                h={5}
                color="gray"
                onClick={handleEditCard}
                sx={{ cursor: "pointer" }}
              />
              <DeleteIcon
                w={5}
                h={5}
                color="gray"
                onClick={handleDeleteCard}
                sx={{ cursor: "pointer" }}
              />
            </Flex>
          )}
          {cards[index] && cards[index].locked === true && (
            <LockIcon w={5} h={5} color="gray" />
          )}
        </Flex>
      )}
      {addingCard && (
        <AddCard
          onClick={handleAddCard}
          setAddingCard={setAddingCard}
          addingCard={addingCard}
          currentDeck={currentDeck}
          getCards={getCards}
        />
      )}
      {editingCard && (
        <EditCard
          onClick={handleEditCard}
          currentDeck={currentDeck}
          currentCard={currentCard}
          getCards={getCards}
          setEditingCard={setEditingCard}
        />
      )}
      {deletingCard && (
        <DeleteCard
          onClick={handleDeleteCard}
          setDeletingCard={setDeletingCard}
          getCards={getCards}
          currentDeck={currentDeck}
          currentCard={currentCard}
          index={index}
          cards={cards}
          setIndex={setIndex}
          deckLength={cards.length}
        />
      )}
    </Flex>
  );
}

export default CardContainer;
