const { Book, User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      $or: [{_id: user ? user._id : URLSearchParams.id}, ];
    },

    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    CreateUser: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },

    saveBook: async (parent, { user, book }) => {
        console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    } catch (err) {
      console.log(err);
      return err
    }
    },
    deleteBooks: async () => {
        return await User.findOneAndUpdate(
            { _id:context.user._id},
            {$pull: {saveBooks: {bookId: contect.params.bookId}}}, 
            {new: true}
        );
    }
}
}

module.exports = resolvers;