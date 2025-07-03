import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";

interface DraggableCardProps {
  title: string;
  id: string;
  section: string;
}

export const DraggableCard: React.FC<DraggableCardProps> = ({
  title,
  id,
  section,
}) => {
  const { isDragging, listeners, setNodeRef, attributes, transform } =
    useDraggable({
      id: id,
      data: {
        title: title,
        id: id,
        section: section,
      },
    });
  useEffect(() => {
    console.log("Dragging status", isDragging);
  }, [isDragging]);
  return (
    <Flex
      backgroundColor="white"
      padding={3}
      margin={2}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      transform={CSS.Translate.toString(transform)}
      borderRadius={8}
      border={"2px solid gray"}
      boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"}
      // width={80}
    >
      <Text color={"gray.800"}>{title}</Text>
    </Flex>
  );
};
