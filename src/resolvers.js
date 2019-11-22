import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
    Query: {
        hello: () => "Hello World with GraphQL",
        greet: (root, { name }, ctx) => {
            console.log(ctx);
            return `Hello ${name}, how are you?`;
        },
        tasks: () => tasks,
        users: async () => {
            try {
                return await User.find();
            } catch (err) {
                console.log("Error Users: ", err)
            }
        }
    },
    Mutation: {
        createTask: (_, { input }) => {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        createUser: async (_, { input }) => {
            try {
                const newUser = new User(input);
                await newUser.save();
                return newUser;
            } catch (err) {
                console.log("Error createUser: ", err);
            }
        },
        deleteUser: async (_, { _id }) => {
            try {
                return await User.findByIdAndDelete(_id);
            } catch (err) {
                console.log("Error deleteUser", err)
            }
        },
        updateUser: async (_, { _id, input }) => {
            try {
                return await User.findByIdAndUpdate(_id, input, { new: true });
            } catch (err) {
                console.log("Error updateUser", err)
            }
        }
    }
};