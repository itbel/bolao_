import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { OnCreateRoundSubscription, Round, RoundsByTournamentQuery } from "../API";
import { useTournamentContext } from "../contexts/TournamentContext";
import * as subscriptions from "../graphl-custom/subscriptions-custom";
import Observable from "zen-observable-ts";
import * as queries from "../graphql/queries";
export default function useRounds() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tournamentState } = useTournamentContext();
  useEffect(() => {
    const getRounds = async () => {
      if (!isLoading) setIsLoading(true);
      try {
        const response = (await API.graphql({
          query: queries.roundsByTournament,
          variables: {
            tournamentID: tournamentState.id,
          },
        })) as GraphQLResult<RoundsByTournamentQuery>;
        setRounds(
          response?.data?.roundsByTournament?.items?.sort((roundA, roundB) => {
            if (roundA?.name && roundB?.name)
              return roundB?.name?.localeCompare(roundA?.name);
            return 0;
          }) as Round[]
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRounds();
  }, [tournamentState.id]);

  useEffect(() => {
    const roundSubscription = (
      API.graphql({
        query: subscriptions.onCreateRound,
      }) as Observable<{
        provider: any;
        value: GraphQLResult<OnCreateRoundSubscription>;
      }>
    ).subscribe({
      next: async (incoming) => {
        if (incoming.value.data?.onCreateRound) {
          setRounds((prev) => [incoming.value.data?.onCreateRound as Round, ...prev]);
        }
      },
      error: (err) => {
        console.log("Error: ", err);
      },
    });
    return () => {
      roundSubscription.unsubscribe();
    };
  }, [rounds]);
  return { rounds, isLoading };
}
