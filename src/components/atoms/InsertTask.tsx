import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface InsertTaskProps {
  onAddTask: (title: string, section: string, id: string) => void;
}

export const InsertTask: React.FC<InsertTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  return (
    <Flex
      backgroundColor="gray.700"
      padding={3}
      margin={2}
      mt={2}
      borderRadius={8}
      border="2px solid gray.500"
      boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"}
      alignItems={"center"}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="white"
        flex="1"
        textAlign={"center"}
      >
        D&D Board
      </Text>

      <Input
        placeholder="Task title"
        backgroundColor="white"
        color={"gray.800"}
        flex="4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        flex="1"
        backgroundColor={"green.400"}
        color={"white"}
        marginLeft={4}
        onClick={() => {
          onAddTask(title, "Todo", Math.random().toString());
          setTitle("");
        }}
      >
        Add Todo
      </Button>
    </Flex>
  );
};
