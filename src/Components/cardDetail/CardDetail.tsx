import { forwardRef } from "react";
import { useAppContext } from "../../context/App.context";
import { RxCross1 } from "react-icons/rx";
import "./CardDetail.style.css";
import Loader from "../loader/Loader";

const CardDetail = forwardRef(() => {
  const { cardDetail, setIsCardClick } = useAppContext();

  const handleCross = () => {
    setIsCardClick(false);
  };

  return (
    <>
      {cardDetail ? (
        <div className={` card-detail }`}>
          <span className="cross" onClick={handleCross}>
            <RxCross1 size="15" />
          </span>
          <h2 className="card-detail-heading text-center">
            {cardDetail?.title}
          </h2>

          <p className="points text-right">Points : {cardDetail?.points}</p>

          <p>Comments</p>
          <div className="comments">
            {cardDetail?.comments?.length ? (
              cardDetail.comments.map((comment, index) => {
                return (
                  <div
                    key={index}
                    className="comment-card"
                    dangerouslySetInnerHTML={{ __html: comment }}
                  ></div>
                );
              })
            ) : (
              <h2>No Comments</h2>
            )}
          </div>
        </div>
      ) : (
        <Loader/>
      )}
    </>
  );
});

export default CardDetail;
