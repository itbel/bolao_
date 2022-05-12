import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListTeamsQuery, Team } from "../API";
import { useTournamentContext } from "../contexts/TournamentContext";
import * as queries from "../graphql/queries";
export default function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tournamentState } = useTournamentContext();
  useEffect(() => {
    const getMatches = async () => {
      if (!isLoading) setIsLoading(true);
      try {
        const response = (await API.graphql({
          query: queries.listTeams,
          variables: {
            filter: {
              tournamentID: { eq: tournamentState.id },
            },
          },
        })) as GraphQLResult<ListTeamsQuery>;
        console.log(response);
        const teamsData = response.data?.listTeams?.items as Team[];
        setTeams(teamsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMatches();
  }, [tournamentState.id]);
  return { teams, isLoading };
}
