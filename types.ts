export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  keywords: string[]; // For search indexing
}

export interface SearchResult {
  item: Chapter;
  matchType: 'title' | 'keyword';
}
