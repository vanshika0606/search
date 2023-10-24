import React, { useState, useContext } from "react";
import { createContext } from "react";
import { cardDetails, searchResult } from "../types/types";
const AppContext = createContext<AppContextProps>({
  list: null,
} as AppContextProps);

type AppContextProps = {
  list: searchResult[] | null;
  setList: React.Dispatch<React.SetStateAction<searchResult[] | null>>;
  objectID: number | null;
  setObjectID: React.Dispatch<React.SetStateAction<number | null>>;
  setIsCardClick: React.Dispatch<React.SetStateAction<boolean>>;
  isCardClick: boolean;
  cardDetail: cardDetails | null;
  setCardDetail: React.Dispatch<React.SetStateAction<cardDetails | null>>;
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [list, setList] = useState<searchResult[] | null>(null);
  const [objectID, setObjectID] = useState<number | null>(null);
  const [isCardClick, setIsCardClick] = useState<boolean>(false);

  const [cardDetail, setCardDetail] = useState<cardDetails | null>(null);
  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        objectID,
        setObjectID,
        isCardClick,
        setIsCardClick,
        cardDetail,
        setCardDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
