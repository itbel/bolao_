import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListTeamsQuery, Team } from "../API";
import { useTournamentContext } from "../contexts/TournamentContext";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphl-custom/subscriptions-custom";
import Observable from "zen-observable-ts";
import { OnCreateTeamSubscription } from "../API";
export default function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tournamentState } = useTournamentContext();
  useEffect(() => {
    const getTeams = async () => {
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
        const teamsData = response.data?.listTeams?.items as Team[];
        setTeams(teamsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTeams();
  }, [tournamentState.id]);

  useEffect(() => {
    const teamsSubscription = (
      API.graphql({
        query: subscriptions.onCreateTeam,
      }) as Observable<{
        provider: any;
        value: GraphQLResult<OnCreateTeamSubscription>;
      }>
    ).subscribe({
      next: async (incoming) => {
        if (incoming.value.data?.onCreateTeam) {
          setTeams((prev) => [...prev, incoming.value.data?.onCreateTeam as Team]);
        }
      },
      error: (err) => {
        console.log("Error: ", err);
      },
    });
    return () => {
      teamsSubscription.unsubscribe();
    };
  }, [teams]);
  return { teams, isLoading };
}
