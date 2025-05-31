export interface Review {
  autor: string;
  data: string;
  rating: number;
  comentariu: string;
}

export interface BaseCharacteristics {
  brand: string;
  seria: string;
  tip_produs: string;
  volum: string;
  tara: string;
}

export interface BaseProduct {
  id: number;
  promotie: "HIT" | "NEW" | "DEAL";
  poza?: string;
  nume: string;
  categorie: string;
  volum: string;
  pret: number;
  recenzii?: Review[];
}

export interface HairCharacteristics extends BaseCharacteristics {
  scop: string;
  tip_de_par: string;
}

export interface BodyCharacteristics extends BaseCharacteristics {
  scop: string;
}

export interface PerfumeCharacteristics extends BaseCharacteristics {
  gen: "femei" | "bărbați" | "unisex";
  tipuri_de_aromă: string;
  note_de_varf: string[];
}

export interface MakeupEyesCharacteristics extends BaseCharacteristics {
  culoare: string;
  scop: string;
}

export interface MakeupLipsCharacteristics extends BaseCharacteristics {
  culoare: string;
}

export interface Product<TCharacteristics extends BaseCharacteristics>
  extends BaseProduct {
  caracteristici: TCharacteristics;
}

export type _MakeupProduct =
  | Product<CharacteristicsForCategory<"machiaj_ochi">>
  | Product<CharacteristicsForCategory<"machiaj_buze">>;
export type _HairProduct = Product<CharacteristicsForCategory<"par">>;
export type _BodyProduct = Product<CharacteristicsForCategory<"corp">>;
export type _PerfumeProduct = Product<CharacteristicsForCategory<"parfumuri">>;

export type HairProduct = Product<HairCharacteristics>;
export type BodyProduct = Product<BodyCharacteristics>;
export type PerfumeProduct = Product<PerfumeCharacteristics>;
export type MakeupEyesProduct = Product<MakeupEyesCharacteristics>;
export type MakeupLipsProduct = Product<MakeupLipsCharacteristics>;

export interface ProductCategories {
  par: HairProduct[];
  corp: BodyProduct[];
  parfumuri: PerfumeProduct[];
  machiaj_ochi: MakeupEyesProduct[];
  machiaj_buze: MakeupLipsProduct[];
}

// Type-safe category access
export type CategoryName = keyof ProductCategories;

// Type mapping for category characteristics
export type CharacteristicsForCategory<T extends CategoryName> = T extends "par"
  ? HairCharacteristics
  : T extends "corp"
  ? BodyCharacteristics
  : T extends "parfumuri"
  ? PerfumeCharacteristics
  : T extends "machiaj_ochi"
  ? MakeupEyesCharacteristics
  : T extends "machiaj_buze"
  ? MakeupLipsCharacteristics
  : never;
