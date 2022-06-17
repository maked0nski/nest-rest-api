import {Injectable} from '@nestjs/common';
import * as nfteyez from "@nfteyez/sol-rayz";
import {NFT} from "./types/nft.interface";
import axios from "axios";
import {chengeType, pagination} from "./helper/helper";

@Injectable()
export class NftService {

    private nftsArr: Array<NFT> = []

    async getNftList(pubWallet: string, name?, page_size?, page_number?) {

        page_size = +page_size || 20
        page_number = +page_number || 1


        const publicAddress = await nfteyez.resolveToWalletAddress({
            text: pubWallet
        });

        const nftArray = await nfteyez.getParsedNftAccountsByOwner({
            publicAddress,
        });

        await Promise.all(nftArray.map(async (nft) => {
                    const response = await axios.get(nft.data.uri);

                    if (name && Array.isArray(response)) {

                    } else {
                        this.nftsArr.push(<NFT>chengeType(response))
                    }
                }))

        if (name) {
            let filterArr = this.nftsArr.filter(item => item.name.includes(name));
            return pagination(filterArr, page_size, page_number)
        }
        return pagination(this.nftsArr, page_size, page_number)
    }
}
