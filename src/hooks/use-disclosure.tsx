import { useState } from "react";

const useDisclosure = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
