import mongoose, { Schema } from 'mongoose';

const userSechema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSechema);
