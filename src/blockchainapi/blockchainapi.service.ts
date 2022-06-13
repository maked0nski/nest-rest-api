import {Injectable} from '@nestjs/common';

var theblockchainapi = require('theblockchainapi');

@Injectable()
export class BlockchainapiService {

    // private resultResponse = {
    //     "nfts_owned": [
    //         "5eQp9YUAePbAaYHzdgnFi4gfwuhxHPb9QmsVYcojMynX",
    //         "4fdEJs2DwbQbZgtp1ZQVao5JFAifgowcUsERDmox188t",
    //         "BsaM4Srq5AJb1HMeLKuDRvm4qGZ5KByZAGj8MFMfTzcz",
    //         "yiAR4BGXdEFcLDGRSpeEYQjrwVCLqsraLTzYGBB85Ws",
    //         "9njiwavG3g3pUEAQz6xPURFsf7AQ9KCRFdaoDUNQrMkj"
    //     ],
    //     "nfts_metadata": [
    //         {
    //             "data": {
    //                 "creators": [
    //                     "SeAYFLgPd9wyc7e2H16WitsyrtzrZfaRhDS5Fvjf4ZG",
    //                     "Bk8BNDc4qyZvWf4V1qXbNtA9LpzK6vQkdD17CZm3zwGs",
    //                     "GyLTjMRZ1CQKGaUR4Et6SXFTda5BfBsc384jFHj3Tx9X",
    //                     "mnKzuL9RMtR6GeSHBfDpnQaefcMsiw7waoTSduKNiXM"
    //                 ],
    //                 "name": "Kotaro Shark #121",
    //                 "share": [
    //                     0,
    //                     45,
    //                     45,
    //                     10
    //                 ],
    //                 "symbol": "KS",
    //                 "uri": "https://monkelabs.nyc3.digitaloceanspaces.com/kotaro-sharks/json/b492b65a2d7271ec8eab9613843a9728.json",
    //                 "verified": [
    //                     1,
    //                     0,
    //                     0,
    //                     0
    //                 ]
    //             },
    //             "is_mutable": true,
    //             "mint": "yiAR4BGXdEFcLDGRSpeEYQjrwVCLqsraLTzYGBB85Ws",
    //             "primary_sale_happened": true,
    //             "update_authority": "SeAYFLgPd9wyc7e2H16WitsyrtzrZfaRhDS5Fvjf4ZG",
    //             "explorer_url": "https://explorer.solana.com/address/yiAR4BGXdEFcLDGRSpeEYQjrwVCLqsraLTzYGBB85Ws",
    //             "metadata_account": "AbJS34ExihTU4uuHRibB7MVjRZB3UaohoQwzZx1pMAcW",
    //             "edition_nonce": 251,
    //             "token_standard": 0,
    //             "collection": {
    //                 "key": "11111111111111111111111111111111"
    //             },
    //             "uses": 0
    //         },
    //         {
    //             "data": {
    //                 "creators": [
    //                     "B79HXDDjs42UCavP1DGaBFQc8Wa5YPqKPXJ9CpE1R366",
    //                     "ZiYbSxngAvpb3ooYF7TMdnBjxjzXSV1aoynz3BpbXKL",
    //                     "945ETfw6zr2L9ebZJJ1K2rFHtF7QqPqc5LUd3pXttRds"
    //                 ],
    //                 "name": "Saiba Fight Club #2597",
    //                 "share": [
    //                     0,
    //                     50,
    //                     50
    //                 ],
    //                 "symbol": "SFC",
    //                 "uri": "https://arweave.net/Xf9pCkHA0ntdGqrLjSkx-IdkW9cfFkNXHrWGoFBbDbU",
    //                 "verified": [
    //                     1,
    //                     0,
    //                     0
    //                 ]
    //             },
    //             "is_mutable": true,
    //             "mint": "BsaM4Srq5AJb1HMeLKuDRvm4qGZ5KByZAGj8MFMfTzcz",
    //             "primary_sale_happened": true,
    //             "update_authority": "Se5HZHWz5rqSDiih4ydU1oYxPryYGFAE7tmTu2yfYR5",
    //             "explorer_url": "https://explorer.solana.com/address/BsaM4Srq5AJb1HMeLKuDRvm4qGZ5KByZAGj8MFMfTzcz",
    //             "metadata_account": "H6U3i9YVFrsvr43tTvk6g4KHe9ayCGfowE1JLgqGmSNV",
    //             "edition_nonce": 255,
    //             "token_standard": 0,
    //             "collection": {
    //                 "key": "BmX9FDT3T2ZjwdonvBLNMnCiXRD99A7tTQAA43pj6yR6"
    //             },
    //             "uses": 0
    //         },
    //         {
    //             "data": {
    //                 "creators": [
    //                     "B79HXDDjs42UCavP1DGaBFQc8Wa5YPqKPXJ9CpE1R366",
    //                     "ZiYbSxngAvpb3ooYF7TMdnBjxjzXSV1aoynz3BpbXKL",
    //                     "945ETfw6zr2L9ebZJJ1K2rFHtF7QqPqc5LUd3pXttRds"
    //                 ],
    //                 "name": "Saiba Fight Club #2876",
    //                 "share": [
    //                     0,
    //                     50,
    //                     50
    //                 ],
    //                 "symbol": "SFC",
    //                 "uri": "https://arweave.net/ofrH5Xv9j61qLHuODfMW0BsQZOTuyN3DMFkvW7yJ4IU",
    //                 "verified": [
    //                     1,
    //                     0,
    //                     0
    //                 ]
    //             },
    //             "is_mutable": true,
    //             "mint": "4fdEJs2DwbQbZgtp1ZQVao5JFAifgowcUsERDmox188t",
    //             "primary_sale_happened": true,
    //             "update_authority": "Se5HZHWz5rqSDiih4ydU1oYxPryYGFAE7tmTu2yfYR5",
    //             "explorer_url": "https://explorer.solana.com/address/4fdEJs2DwbQbZgtp1ZQVao5JFAifgowcUsERDmox188t",
    //             "metadata_account": "BCqGaEp5g2PeWv4CZSiUmNU77JoVjismEvBpEQpQLURU",
    //             "edition_nonce": 255,
    //             "token_standard": 0,
    //             "collection": {
    //                 "key": "BmX9FDT3T2ZjwdonvBLNMnCiXRD99A7tTQAA43pj6yR6"
    //             },
    //             "uses": 0
    //         },
    //         {
    //             "data": {
    //                 "creators": [
    //                     "B79HXDDjs42UCavP1DGaBFQc8Wa5YPqKPXJ9CpE1R366",
    //                     "ZiYbSxngAvpb3ooYF7TMdnBjxjzXSV1aoynz3BpbXKL",
    //                     "945ETfw6zr2L9ebZJJ1K2rFHtF7QqPqc5LUd3pXttRds"
    //                 ],
    //                 "name": "Saiba Fight Club #4000",
    //                 "share": [
    //                     0,
    //                     50,
    //                     50
    //                 ],
    //                 "symbol": "SFC",
    //                 "uri": "https://arweave.net/tBJv-oOrLFyHX-GRGPskQlHgA2vfSOQWwDr44Wovk6g",
    //                 "verified": [
    //                     1,
    //                     0,
    //                     0
    //                 ]
    //             },
    //             "is_mutable": true,
    //             "mint": "9njiwavG3g3pUEAQz6xPURFsf7AQ9KCRFdaoDUNQrMkj",
    //             "primary_sale_happened": true,
    //             "update_authority": "Se5HZHWz5rqSDiih4ydU1oYxPryYGFAE7tmTu2yfYR5",
    //             "explorer_url": "https://explorer.solana.com/address/9njiwavG3g3pUEAQz6xPURFsf7AQ9KCRFdaoDUNQrMkj",
    //             "metadata_account": "HoehSC6pBqaLjFFZTT5GrpcoPcckurAhHabqiQMpKZDP",
    //             "edition_nonce": 255,
    //             "token_standard": 0,
    //             "collection": {
    //                 "key": "BmX9FDT3T2ZjwdonvBLNMnCiXRD99A7tTQAA43pj6yR6"
    //             },
    //             "uses": 0
    //         }
    //     ]
    // };


    async blockChainApi(pubWallet: string, name?:string) {
        try {
            let defaultClient = theblockchainapi.ApiClient.instance;

            let APIKeyID = defaultClient.authentications['APIKeyID'];
            APIKeyID.apiKey = process.env.API_KEY_ID
            let APISecretKey = defaultClient.authentications['APISecretKey'];
            APISecretKey.apiKey = process.env.API_SECRET_KEY

            let apiInstance = new theblockchainapi.SolanaWalletApi();

            // String | The network ID (devnet, mainnet-beta)
            let network = 'mainnet-beta';
            return await apiInstance.solanaGetNFTsBelongingToWallet(network, pubWallet)
                .then((data) => {
                    if (!name) {
                        console.log('in if block' + name)
                        return data;
                    } else {
                        console.log(name)
                        return data.nfts_metadata.filter(nft => nft.data.name.includes(name));
                    }

                }, (error) => {
                    console.error(error);
                    return error;
                })

        } catch (e) {
            console.log('Failed to fetch metadata');
            return null ;
        }

    }

}
