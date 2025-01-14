import { Input, Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem
}) => (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
);