// List result returned by PokeAPI /pokemon?limit=60 endpoint
export interface PokeApiListResult {  
  name: string;
  url: string;
}

export interface PokeApiListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeApiListResult[];
}
