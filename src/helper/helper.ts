export function pagination(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function chengeType(nft, response) {
    // let url = 'https://d2guc73qlgzsw3hmuffta6wrotgzxnxcbx3bhqtzlto2pwowty.arweave.net/'
    return {
        contract: response.data?.contract || null,
        tokenId: response.data?.tokenId || null,
        blockchain: response.data?.blockchain || null,
        favorite: response.data?.favorite || null,
        name: response.data.name,
        imageUrl: response.data.image,
        imagePreview: null,
        imageThumbnail: null,
        imageOriginal: null,
        animationUrl: response.data?.animation_url || null,
        animationOriginal: null,
        info: {
            name: response.data.name,
            creator: nft.data?.creators?.[0].address || null,
            released: null,
            collection: response.data?.collection?.name || null,
            owner: null,
            contract: null,
        }
    };
}
