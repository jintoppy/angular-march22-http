import { User } from './user';

export type SearchResponse = {
    total_count: number;
    incomplete_results: boolean;
    items: User[]
}