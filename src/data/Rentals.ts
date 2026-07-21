import {
    createPropertySlug,
    type RentalInfo
} from '@data/HomeInfo';

import exterior123Walnut from '@assets/properties/123-walnut/exterior.webp';
import kitchen123Walnut from '@assets/properties/123-walnut/kitchen.webp';
import livingRoom123Walnut from '@assets/properties/123-walnut/living-room.webp';

export const rentals: RentalInfo[] = [
    {
        id: 101,
        slug: createPropertySlug('210 North 7th St.'),
        address: '210 North 7th St.',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47807',
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 950,
        garageSpaces: 1,
        description:
            'An updated two-bedroom rental conveniently located near downtown Terre Haute.',
        images: [
            {
                src: exterior123Walnut,
                alt: 'Front exterior of 123 Walnut Street',
                featured: true
            },
            {
                src: kitchen123Walnut,
                alt: 'Modern kitchen with an oversized island'
            },
            {
                src: livingRoom123Walnut,
                alt: 'Open-concept living room'
            }
        ],
        features: [
            'Updated interior',
            'Washer and dryer hookups',
            'Off-street parking',
            'Lawn care included'
        ],
        status: 'available',
        featured: true,
        monthlyRent: 1250,
        securityDeposit: 1250,
        availableDate: '2026-08-01',
        leaseTermMonths: 12,
        petsAllowed: true,
        applicationUrl: 'https://example.com/apply/210-north-7th'
    },
    {
        id: 102,
        slug: createPropertySlug('3345 East Davis Drive'),
        address: '3345 East Davis Drive',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47802',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1325,
        garageSpaces: 2,
        description:
            'A three-bedroom home with an attached garage and a spacious backyard.',
         images: [
            {
                src: exterior123Walnut,
                alt: 'Front exterior of 123 Walnut Street',
                featured: true
            },
            {
                src: kitchen123Walnut,
                alt: 'Modern kitchen with an oversized island'
            },
            {
                src: livingRoom123Walnut,
                alt: 'Open-concept living room'
            }
        ],
        features: [
            'Attached garage',
            'Primary suite',
            'Dishwasher',
            'Back patio'
        ],
        status: 'available',
        featured: true,
        monthlyRent: 1650,
        securityDeposit: 1650,
        availableDate: '2026-08-15',
        leaseTermMonths: 12,
        petsAllowed: true,
        applicationUrl: 'https://example.com/apply/3345-east-davis'
    },
    {
        id: 103,
        slug: createPropertySlug('825 Parkview Court'),
        address: '825 Parkview Court',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47803',
        bedrooms: 2,
        bathrooms: 1.5,
        squareFeet: 1100,
        description:
            'A low-maintenance townhome located near shopping, dining, and local parks.',
         images: [
            {
                src: exterior123Walnut,
                alt: 'Front exterior of 123 Walnut Street',
                featured: true
            },
            {
                src: kitchen123Walnut,
                alt: 'Modern kitchen with an oversized island'
            },
            {
                src: livingRoom123Walnut,
                alt: 'Open-concept living room'
            }
        ],
        features: [
            'Townhome',
            'Private entrance',
            'Central air',
            'Reserved parking'
        ],
        status: 'rented',
        monthlyRent: 1350,
        securityDeposit: 1350,
        leaseTermMonths: 12,
        petsAllowed: false
    },
    {
        id: 104,
        slug: createPropertySlug('1602 Poplar St.'),
        address: '1602 Poplar St.',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47803',
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 725,
        description:
            'A comfortable one-bedroom rental with an efficient layout and convenient location.',
         images: [
            {
                src: exterior123Walnut,
                alt: 'Front exterior of 123 Walnut Street',
                featured: true
            },
            {
                src: kitchen123Walnut,
                alt: 'Modern kitchen with an oversized island'
            },
            {
                src: livingRoom123Walnut,
                alt: 'Open-concept living room'
            }
        ],
        features: [
            'One-level living',
            'Off-street parking',
            'Central air',
            'Water included'
        ],
        status: 'unavailable',
        monthlyRent: 900,
        securityDeposit: 900,
        leaseTermMonths: 12,
        petsAllowed: false
    }
];

export const featuredRentals = rentals
    .filter((rental) => rental.featured && rental.status === 'available')
    .slice(0, 3);