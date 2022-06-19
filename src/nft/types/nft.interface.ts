export interface NFTMetadata {
    uri: string;
    name: string;
    symbol: string;
    description: string;
    seller_fee_basis_points: number;
    image: string;
    attributes: Array<{
        trait_type: string;
        value: string;
    }>;
    properties: {
        creators: Array<{
            address: string;
            share: number;
        }>;
        files: [
            {
                uri: string;
                type: string;
            },
        ];
    };
    collection: {
        name: string;
        family: string;
    };
}

export interface NFT {
    contract: string,
    tokenId: string,
    blockchain: string,
    favorite: string,
    name: string;
    imageUrl: string;
    imagePreview: string,
    imageThumbnail: string,
    imageOriginal: string,
    animationUrl: string,
    animationOriginal: string,
    info:{
        name: string,
        creator: string,
        released: string,
        collection: string,
        owner: string,
        contract: string,
    }
}
