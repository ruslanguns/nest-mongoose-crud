import { Document } from 'mongoose';

export interface Heroes extends Document {
    name: string;
    talents: string[];
}
