export interface PokeApiAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokeApiSprite {
  front_default: string | null;
  other?: {
    ['official-artwork']?: {
      front_default?: string | null;
    };
  };
}

export interface PokeApiDetailResponse {
  name: string;
  height: number;
  weight: number;
  abilities: PokeApiAbility[];
  sprites: PokeApiSprite;
}
