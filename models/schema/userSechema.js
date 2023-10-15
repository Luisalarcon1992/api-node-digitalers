import mongoose, { Schema } from 'mongoose';

const userSechema = new Schema(
  {
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
      min: 6,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    roll: {
      type: String,
      min: 4,
      default: 'usuario',
    },
  },
  {
    Timestamp: true,
  },
);

export default mongoose.model('User', userSechema);
