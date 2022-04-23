import React, { useState, useEffect } from "react";
import { ListTournamentsQuery, Tournament } from "../API";
import * as queries from "../graphql/customQueries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
export default function useTournaments() {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getTournaments = async () => {
            try {
                const response = (await API.graphql({
                    query: queries.listTournaments,
                })) as GraphQLResult<ListTournamentsQuery>;
                const tournaments =
                    (response?.data?.listTournaments?.items as Tournament[]) ?? [];
                setTournaments(tournaments);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getTournaments();
    }, []);
    return { tournaments, joinedTournaments: [] as Tournament[], isLoading };
}
