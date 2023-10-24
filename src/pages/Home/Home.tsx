import { useEffect } from "react";
import SearchBar from "../../Components/searchBar/SearchBar";
import { useAppContext } from "../../context/App.context";
import Loader from "../../Components/loader/Loader";
import List from "../../Components/list/List";
import CardDetail from "../../Components/cardDetail/cardDetail";
// import CheckOutSide from "../../Components/CheckOutside";

const Home = () => {
  const { list , isCardClick} = useAppContext();

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div >
      <SearchBar />
      {list ? <List /> : <Loader />}
      {isCardClick && 
     
        <CardDetail />
      }
    </div>
  );
};

export default Home;
