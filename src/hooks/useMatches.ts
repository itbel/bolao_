import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListMatchesQuery, Match } from "../API";
import { useTournamentContext } from "../contexts/TournamentContext";
import * as queries from "../graphql/queries";
export default function useMatches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tournamentState } = useTournamentContext();
  useEffect(() => {
    const getMatches = async () => {
      if (!isLoading) setIsLoading(true);
      try {
        const response = (await API.graphql({
          query: queries.listMatches,
          variables: {
            filter: {
              tournamentID: { eq: tournamentState.id },
            },
          },
        })) as GraphQLResult<ListMatchesQuery>;
        console.log(response);
        const matchData = response.data?.listMatches?.items as Match[];
        setMatches(matchData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMatches();
  }, [tournamentState.id]);
  return { matches, isLoading };
}
