
export type NTFmetadata = {
    nfts_owned: string[],
    nfts_metadata: NFTdata[]
}

type NFTdata = {
    isMutable: boolean,
    mint: string,
    primarySaleHappened: boolean,
    updateAuthority: string,
    explorerUrl: string,
    data: {
        creators: []
        name: string,
        share: number[],
        symbol: string,
        uri: string,
        verified: number[],
    }
    metadata_account:string,
    edition_nonce: number,
    token_standard:number,
    collection: object,
    uses:number
}

export interface tokenData  {
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
        creators: [],
        released: string,
        collection: string,
        owner: string,
        contract: string,
    }
}