import { Vote } from "@hooks/quoteTypes";
import { useEffect, useState } from "react";
import { backendURL } from "shared";

const useGetVotes = () => {
  const [voteArray, setVoteArray] = useState<Array<Vote>>([]);

  useEffect(() => {
    const getVotes = async () => {
      const response = await fetch(backendURL + `/api/quotes/vote`, {
        method: "GET",
      });
      const data = await response.json();
      const votes: Array<Vote> = data.map((obj) => {
        const thisVote: Vote = {
          quoteID: obj.quote_id,
        };
        return thisVote;
      });
      setVoteArray(votes);
    };
    getVotes();
  }, []);
  return voteArray;
};

export default useGetVotes;
