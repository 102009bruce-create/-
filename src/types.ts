export type MBTIDimension = 'EI' | 'SN' | 'TF' | 'JP';
export type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  dimension: MBTIDimension;
  options: {
    text: string;
    type: MBTIType;
  }[];
}

export interface PersonalityResult {
  type: string;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}

export interface Score {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}
