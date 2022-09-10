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
    me: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
    saveBook: async (parent, args) => {
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        {$addToSet: { saveBooks: body}}, 
        {new: true, runValisators: true}

      );
    },
    deleteBooks: async () => {
        return await User.findOneAndUpdate(
            { _id:context.user._id},
            {$pull: {saveBooks: {bookId: contect.params.bookId}}}, 
            {new: true}
        )
    }

}
}

module.exports = resolvers;