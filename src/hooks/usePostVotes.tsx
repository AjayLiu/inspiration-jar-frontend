import { useEffect, useState } from "react";
import { Status } from "@hooks/quoteTypes";
import { backendURL } from "shared";

const usePostVote = (body: Object, execute = true) => {
  const [voteConfirmation, setVoteConfirmation] = useState<Status>({
    submissionStatus: "Waiting",
  });
  useEffect(() => {
    if (execute) {
      const postVote = async () => {
        const response = await fetch(backendURL + `/api/quotes/vote`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setVoteConfirmation({
          submissionStatus: data.submissionStatus,
        });
      };
      postVote();
    }
  }, [execute]);
  return voteConfirmation;
};

export default usePostVote;
