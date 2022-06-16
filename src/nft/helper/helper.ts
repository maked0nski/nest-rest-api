export function pagination(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function chengeType(response){
    let url = 'https://d2guc73qlgzsw3hmuffta6wrotgzxnxcbx3bhqtzlto2pwowty.arweave.net/'
    let element = {
        name: response.data.name,
        symbol: response.data.symbol,
        description: response.data.description,
        arweaveURI: response.data.image,
        image: url + response.data.image.split('/')[3]
    }
    return element;
}