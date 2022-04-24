import { useState, useEffect } from "react";
import { ListTournamentsQuery, Tournament } from "../API";
import * as customQueries from "../graphql/queries-custom";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
export default function useTournaments() {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getAllTournaments = async () => {
            try {
                const response = (await API.graphql({
                    query: customQueries.listTournaments,
                })) as GraphQLResult<ListTournamentsQuery>;
                console.log({ response });
                const tournaments =
                    (response?.data?.listTournaments?.items as Tournament[]) ?? [];
                setTournaments(tournaments);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getAllTournaments();
    }, []);
    console.log("tournaments", tournaments);
    return {
        tournaments,
        isLoading,
    };
}
