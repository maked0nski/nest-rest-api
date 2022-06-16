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
    name: string;
    symbol: string;
    description: string,
    updateAuthority: string;
    arweaveURI: string;
    image: string;
    external_url: ''
}
