import axios from "axios";
import { cardDetails, searchResult } from "../types/types";
export const searchQuery = async (
  searchValue: string,
  setSearchList: React.Dispatch<React.SetStateAction<string[] | null>>
): Promise<searchResult[]> => {
  try {
    const { data } = await axios.get("https://hn.algolia.com/api/v1/search", {
      params: { query: searchValue },
    });

    console.log(data);

    const searchList = data.hits.map((object: searchResult) => {
      return object.title ? object.title : object.story_title;
    });

    const searchListArray = searchList?.filter((value: string) => {
      if (value?.toLowerCase().includes(searchValue.toLowerCase())) {
        return value;
      }
    });

    setSearchList(searchListArray);
    return data.hits;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getCardDetails = async (
  objectID: number,
  card: searchResult
): Promise<cardDetails> => {
  try {
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/items/${objectID}`
    );

    console.log(data, card);

    let cardDetail: cardDetails = {
      title: "",
      comments: [""],
      points: 0,
    };
    cardDetail["title"] = card.title ? card.title : card.story_title;

    cardDetail.points = data.points ? data.points : 0;

    const comments = data?.children?.map((child: any) => {
      return child.text;
    });

    cardDetail.comments = comments;

    console.log(cardDetail)

    return cardDetail;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
