type ImageFormat = string;

interface PostalAddress {
  line1: string;
  line2?: string;
  postCode: string;
  town: string;
  country: string;
}

interface House {
  headline: string;
  price: string;
  description?: string;
  imageUrl?: ImageFormat;
  address?: PostalAddress;
}

export { House, PostalAddress, ImageFormat };
