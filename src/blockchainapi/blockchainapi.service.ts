import {Injectable} from '@nestjs/common';
import axios from "axios";
import {tokenData} from "./types/NFTmetadata";
import {pagination} from "../helper/helper";

var theblockchainapi = require('theblockchainapi');

@Injectable()
export class BlockchainapiService {

    private nftsArr: Array<tokenData> = []
    private res = {
        statusCode: 200,
        data: this.nftsArr
    }

    async blockChainApi(pubWallet: string, name?, page_size?, page_number?) {
        page_size = +page_size || 20
        page_number = +page_number || 1

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
                .then(async (data) => {
                    await Promise.all(data.nfts_metadata.map(async (nft)=>{
                        const response = await axios.get(nft.data.uri);
                        this.nftsArr.push(
                            {
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
                                    creators: nft.data.creators,
                                    released: null,
                                    collection: response.data?.collection?.name || null,
                                    owner: null,
                                    contract: null,
                                }
                            }
                        )
                    }))


                    //  фільтраці імен
                    if (!name) {
                        this.res.data = pagination(this.nftsArr, page_size, page_number)
                        return this.res
                    } else {
                        let filterArr = this.res.data.filter(nft => nft.name.includes(name));
                        this.res.data = pagination(filterArr, page_size, page_number)
                        return this.res
                    }

                }, (error) => {
                    console.error(error);
                    return error;
                })

        } catch (e) {
            console.log('Failed to fetch metadata');
            return null;
        }

    }

}
