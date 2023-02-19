type Behaviour = {
  [key: string]: number;
  "Family friendly": number;
  "Friendly with kids": number;
  "Good with other dogs": number;
};

type Pet = {
  id: string;
  breed: string;
  description: string;
  behaviour: Behaviour;
  "key-features": string[];
  ownerEmail: string;
  price: number;
};

export default Pet;
