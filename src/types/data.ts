interface INFTData {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: string;
  bids: IBid[];
}

interface IBid {
  id: string;
  name: string;
  price: number;
  image: string;
  date: string;
}

export type {INFTData};
