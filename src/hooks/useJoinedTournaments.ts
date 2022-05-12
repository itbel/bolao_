import { useState, useEffect } from "react";
import { GetTournamentQuery, GetUserQuery, Tournament } from "../API";
import * as queries from "../graphql/queries";
import * as customQueries from "../graphl-custom/queries-custom";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useUserContext } from "../contexts/UserContext";
export default function useTournaments() {
  const [joinedTournaments, setJoinedTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userState } = useUserContext();
  useEffect(() => {
    const getJoinedTournaments = async () => {
      try {
        if (!userState?.id) throw new Error("User not found");
        const response = (await API.graphql({
          query: queries.getUser,
          variables: { email: userState.id },
        })) as GraphQLResult<GetUserQuery>;
        const tournamentIds = response?.data?.getUser?.joinedTournaments?.items?.map(
          (a) => a?.tournamentID
        );
        console.log("tournamentIds.length", tournamentIds?.length);
        const joinedTours: GraphQLResult<GetTournamentQuery>[] = [];
        tournamentIds?.forEach((id) => {
          joinedTours.push(
            API.graphql({
              query: customQueries.getTournament,
              variables: {
                id: id,
              },
            }) as GraphQLResult<GetTournamentQuery>
          );
        });
        const allJoinedTours = await Promise.all(joinedTours);
        const allJoinedToursItems = allJoinedTours.map(
          (a) => a.data?.getTournament
        ) as Tournament[];
        setJoinedTournaments(allJoinedToursItems);
      } catch (error: any) {
        console.error(error?.errors);
      } finally {
        setIsLoading(false);
      }
    };
    getJoinedTournaments();
  }, []);
  return {
    joinedTournaments,
    isLoading,
  };
}
