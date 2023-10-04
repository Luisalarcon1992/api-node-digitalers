import mongoose, { Schema } from 'mongoose';

const productSechema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 100,
      min: 5,
    },
    description: {
      type: String,
      max: 500,
    },
    publicdate: {
      type: Number,
      required: true,
      min: 4,
      max: 4,
    },
    author: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    language: {
      type: String,
      required: true,
    },
    editorial: {
      type: String,
    },
    cathegory: {
      type: String,
      required: true,
      min: 4,
      max: 50,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    urlimagen: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    Timestamp: true,
  },
);

export default mongoose.model('Product', productSechema);
