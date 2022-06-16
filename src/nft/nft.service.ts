import {Injectable} from '@nestjs/common';
import * as nfteyez from "@nfteyez/sol-rayz";
import {NFT, NFTMetadata} from "./nft.interface";
import axios from "axios";

@Injectable()
export class NftService {

    private nftsArr: Array<NFT>


    async getNftList(pubWallet: string) {

        const publicAddress = await nfteyez.resolveToWalletAddress({
            text: pubWallet
        });

        // тут отримую  масив данни
        const nftArray = await nfteyez.getParsedNftAccountsByOwner({
            publicAddress,
        });

        //Хочу перебрати масив,та зробити запит на nft.data.uri отримати деталі конкретної NFT та скастувати до вигляду інтерфейса NFT
        const cachedMetadata = (
            await Promise.all(
                nftArray.map(async (nft) => {
                        const response = await axios.get(nft.data.uri);
                        // console.log(response.data);   //деталі конкретної NFT
                        response.data
                            .map((item) => {
                                    let element = {
                                        name: item.name,
                                        symbol: item.symbol,
                                        description: item.description,
                                        arweaveURI: item.image,
                                        image: item.image.split('/')[3]
                                    }
                                    this.nftsArr.push(<NFT>element)
                                })}
                )))


        // let parsedAccountByMint = nfteyez.decodeTokenMetadata();
        // .filter((nft) => nft)
        // .map((nft) => JSON.parse(nft!) as NFT);

        // console.log(connection);
        return cachedMetadata
        // return this.nftsArr
    }
}
