// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Tournament, Team, Round, Match, Guess, UserTournament } = initSchema(schema);

export {
  User,
  Tournament,
  Team,
  Round,
  Match,
  Guess,
  UserTournament
};