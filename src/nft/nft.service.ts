import {Injectable} from '@nestjs/common';
import * as nfteyez from "@nfteyez/sol-rayz";
import {NFT} from "./nft.interface";
import axios from "axios";

@Injectable()
export class NftService {

    private nftsArr: Array<NFT> = []


    async getNftList(pubWallet: string) {

        let url = 'https://d2guc73qlgzsw3hmuffta6wrotgzxnxcbx3bhqtzlto2pwowty.arweave.net/'

        const publicAddress = await nfteyez.resolveToWalletAddress({
            text: pubWallet
        });

        const nftArray = await nfteyez.getParsedNftAccountsByOwner({
            publicAddress,
        });
        await Promise.all(
            nftArray.map(async (nft) => {
                    const response = await axios.get(nft.data.uri);
                    response.data   //деталі конкретної NFT

                    let element = {
                        name: response.data.name,
                        symbol: response.data.symbol,
                        description: response.data.description,
                        arweaveURI: response.data.image,
                        image: url + response.data.image.split('/')[3]
                    }
                    this.nftsArr.push(<NFT>element)

                }
            ))

        return this.nftsArr
    }
}
