// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Tournament, Match, Team, Guess, UserTournament } = initSchema(schema);

export {
  User,
  Tournament,
  Match,
  Team,
  Guess,
  UserTournament
};