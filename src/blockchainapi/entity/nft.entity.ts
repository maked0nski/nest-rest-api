export class CatEntity {
    key: number
    updateAuthority: string
    mint: string
    data: {
        "name": string,
        "symbol": string,
        "uri": string,
        "sellerFeeBasisPoints": number,
        "creators": [
            {
                "address": string,
                "verified": number,
                "share":number
            }
        ]
    }
    primarySaleHappened: number
    isMutable: number
    editionNonce: null
}
