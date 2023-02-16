type Behaviour = {
  [key: string]: number;
  "Family friendly": number;
  "Friendly with kids": number;
  "Good with other dogs": number;
};

type Pet = {
  breed: string;
  description: string;
  behaviour: Behaviour;
  keyFeatures: string[];
  ownerEmail: string;
  price: number;
  image: string;
};

export default Pet;
