const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const  Community  = require('../models/Community');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose')
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email});
      }
      throw new AuthenticationError('You must be signed in');
    },
    communities: async () => {
      return Community.find();
    },
    commmunity: async (parent, args) => {
      return Community.findOne({ _id: parent.commmunity});
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    //add a updateUser funtion and  find a user using id and update data like community and location 
    updateUser: async (parent, { _id ,community,location,}) => {
      let id = new mongoose.Types.ObjectId(_id)
      const user = await User.findOne({id});
      const updateUser = await User.updateOne({community,location})
      const token = signToken(updateUser);
      return { token,updateUser } ;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
