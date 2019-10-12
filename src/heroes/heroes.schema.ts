import { Schema } from 'mongoose';
import mongoose_autopopulate = require('mongoose-autopopulate');

export const HeroesSchema = new Schema({
    name: String,
    talents: [{ type: Schema.Types.ObjectId, ref: 'Talents', autopopulate: true }],
});

HeroesSchema.plugin(mongoose_autopopulate);
