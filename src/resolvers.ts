import { User } from "./models/User";

export const resolvers = {
  Query: {
    helloWorld: () => "Hello World",
    users: () => User.find(),
  },
  Mutation: {
    createUser: async (_, {name, age, location}) => {
      const user = new User({
        name,
        age,
        location
      });

      await user.save();
      return user;
    }
  }
};