import { Schema } from 'mongoose';

export const HeroesSchema = new Schema({
    name: String,
    talent: [{ type: Schema.Types.ObjectId, ref: 'Talents' }],
});
