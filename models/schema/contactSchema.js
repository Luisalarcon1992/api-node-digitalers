import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
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
    subject: {
      type: String,
      required: true,
      min: 6,
    },
    message: {
      type: String,
      required: true,
      min: 6,
    },
  },
  {
    Timestamp: true,
  },
);

export default mongoose.model('Contact', contactSchema);
