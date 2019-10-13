import { Schema } from 'mongoose';

export const HeroesSchema = new Schema({
    name: String,
    talents: [{ type: Schema.Types.ObjectId, ref: 'Talents' }],
});
