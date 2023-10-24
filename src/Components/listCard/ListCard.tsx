// import React from "react";
import { searchResult } from "../../types/types";
import "./ListCard.style.css";
import { useAppContext } from "../../context/App.context";
import { getCardDetails } from "../../api/api";

type propTypes = {
  card: searchResult;
};

const ListCard = ({ card }: propTypes) => {
  const { setObjectID, setIsCardClick, setCardDetail } = useAppContext();

  const handleObjectID = async (objectID: number, card: searchResult) => {
    setObjectID(objectID);
    setIsCardClick(true);
    const data = await getCardDetails(objectID, card);
    setCardDetail(data);
  };

  return (
    <div
      className="list-card border-radius-10"
      onClick={() => handleObjectID(card.objectID, card)}
    >
      <h5 className="title">{card.title ? card.title : card.story_title}</h5>
      <p className="url">{card.url ? card.url : card.story_url}</p>
      <p className="mt-2 text-right">
        by{" "}
        <span className="italic">
          {card.author ? card.author : card.story_author}
        </span>
      </p>
    </div>
  );
};

export default ListCard;
