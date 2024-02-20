export type ImageFormat = string;

export interface PostalAddress {
  line1: string;
  line2?: string;
  postCode: string;
  town: string;
  country: string;
}

export interface House {
  headline: string;
  price: string;
  description?: string;
  imageUrl?: ImageFormat;
  address?: PostalAddress;
}
