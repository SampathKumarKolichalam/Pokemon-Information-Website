// UI-ready normalized data for displaying a Pokémon in list
export interface PokemonListItem {
  name: string;
  image: string;    // thumbnail URL
  url: string;      // link to detail page or PokeAPI
}

export interface PokemonDetail {
  name: string;
  image: string;      // large, official artwork
  height: number;
  weight: number;
  abilities: string;  // Comma-separated, capitalized
}
