import React, { useContext, useState } from "react";
import {
    TournamentContextProviderProps,
    TournamentContextType,
    TournamentState,
} from "./context.types";

const tournamentStateInit: TournamentState = {
    id: null,
    name: null,
};

const TournamentContext = React.createContext<TournamentContextType>({
    tournamentState: tournamentStateInit,
});

export const useTournamentContext = () => {
    return useContext(TournamentContext);
};

export const TournamentProvider = (props: TournamentContextProviderProps) => {
    const [tournamentState, setTournamentState] =
        useState<TournamentState>(tournamentStateInit);
    const setTournament = (tournamentState: TournamentState) => {
        setTournamentState({ id: tournamentState.id, name: tournamentState.name });
    };
    return (
        <TournamentContext.Provider value={{ tournamentState, setTournament }}>
            {props.children}
        </TournamentContext.Provider>
    );
};