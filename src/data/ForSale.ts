import {
    createPropertySlug,
    type ForSaleInfo,
} from '@data/HomeInfo';

import exterior123Walnut from '@assets/properties/123-walnut/exterior.webp';
import kitchen123Walnut from '@assets/properties/123-walnut/kitchen.webp';
import livingRoom123Walnut from '@assets/properties/123-walnut/living-room.webp';

export const homesForSale: ForSaleInfo[] = [
    {
        id: 1,
        slug: createPropertySlug('123 Walnut St.'),
        address: '123 Walnut St.',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47803',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1450,
        garageSpaces: 2,
        description:
            'A newly constructed home featuring an open-concept layout, modern finishes, and a spacious primary suite.',
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
            'New construction',
            'Open-concept layout',
            'Granite countertops',
            'Walk-in primary closet',
            'Covered back patio'
        ],
        status: 'available',
        featured: true,
        floorplan2DPath: '/floorplans/123-walnut-2d.webp',
        videoTourUrl: 'https://www.youtube.com/watch?v=example',
        listingUrl: 'https://example.com/listings/123-walnut',
        purchasePrice: 249900,
        mlsNumber: '105001',
        yearBuilt: 2026,
        lotSizeAcres: 0.24
    },
    {
        id: 2,
        slug: createPropertySlug('456 Oak Ave.'),
        address: '456 Oak Ave.',
        city: 'Terre Haute',
        state: 'IN',
        zipCode: '47804',
        bedrooms: 4,
        bathrooms: 2.5,
        squareFeet: 2100,
        garageSpaces: 2,
        description:
            'A spacious four-bedroom home with flexible living areas, an attached garage, and a large backyard.',
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
            'Stainless steel appliances',
            'Kitchen pantry',
            'Home office',
            'Large backyard',
            'Attached garage'
        ],
        status: 'pending',
        featured: true,
        purchasePrice: 289500,
        mlsNumber: '105002',
        yearBuilt: 2024,
        lotSizeAcres: 0.33
    },
    {
        id: 3,
        slug: createPropertySlug('782 Maple Drive'),
        address: '782 Maple Drive',
        city: 'Brazil',
        state: 'IN',
        zipCode: '47834',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1680,
        garageSpaces: 2,
        description:
            'A comfortable ranch-style home offering an updated interior and a quiet neighborhood setting.',
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
            'Single-story layout',
            'Updated flooring',
            'Fenced backyard',
            'Laundry room'
        ],
        status: 'sold',
        purchasePrice: 224900,
        mlsNumber: '105003',
        yearBuilt: 2019,
        lotSizeAcres: 0.28
    },
    {
        id: 4,
        slug: createPropertySlug('91 South Lake Road'),
        address: '91 South Lake Road',
        city: 'Clinton',
        state: 'IN',
        zipCode: '47842',
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1825,
        garageSpaces: 2,
        description:
            'A well-maintained home with generous living space, an updated kitchen, and an inviting outdoor area.',
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
            'Updated kitchen',
            'Fireplace',
            'Covered porch',
            'Storage shed'
        ],
        status: 'available',
        purchasePrice: 269900,
        yearBuilt: 2021,
        lotSizeAcres: 0.41
    }
];

export const featuredHomesForSale = homesForSale
    .filter((home) => home.featured && home.status === 'available')