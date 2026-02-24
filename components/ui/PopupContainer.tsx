'use client'
import PopupISO from "@/components/ui/PopupISO";
import { useState } from "react";

const PopupContainer = () => {

  const [isShown, setIsShown] = useState(true);

  const closePopup = () => {
    setIsShown(false);
  }

  return (
    <PopupISO isShown={isShown} onClose={closePopup} />
  );
};

export default PopupContainer;
