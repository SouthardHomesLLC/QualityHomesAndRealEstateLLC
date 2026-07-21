import type { ImageMetadata } from "astro";

export type ListingStatus =
  | "available"
  | "pending"
  | "sold"
  | "rented"
  | "unavailable";

export interface PropertyImage {
  src: ImageMetadata;
  alt: string;
  featured?: boolean;
}

export interface HomeInfo {
  id: number;
  slug: string;

  address: string;
  city: string;
  state: string;
  zipCode: string;

  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  garageSpaces?: number;

  description?: string;
  images: PropertyImage[];
  features?: string[];

  status: ListingStatus;
  featured?: boolean;

  floorplan2DPath?: string;
  floorplan3DPath?: string;
  videoTourUrl?: string;
  listingUrl?: string;
}

export interface RentalInfo extends HomeInfo {
  monthlyRent: number;
  securityDeposit?: number;
  availableDate?: string;
  leaseTermMonths?: number;
  petsAllowed?: boolean;
  applicationUrl?: string;
}

export interface ForSaleInfo extends HomeInfo {
  purchasePrice: number;
  mlsNumber?: string;
  yearBuilt?: number;
  lotSizeAcres?: number;
}

//create a slug for a poperty listing based on the address
//do this manually when entering the info from a form (if I add forms)
//but explicitly call it when manually entering the ts like:
//slug: createPropertySlug('123 Walnut St.') which gives 123-walnut-st
//but allow it to be manually overridden
//this might not even be needed if i dont add a form for adding properties
export function createPropertySlug(address: string): string {
  return address
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
