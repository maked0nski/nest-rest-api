import {Controller, Get, Query} from '@nestjs/common';
import {AlchemyApiService} from "./alchemy-api.service";
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Alchemy-api')
@Controller('alchemy-api')
export class AlchemyApiController {
    constructor(private readonly alchemyApiService: AlchemyApiService) {
    }

    @ApiOperation({summary: 'Not finished'})
    @Get('/nft')
    getAll() {
        return this.alchemyApiService.findAll();
    }

    @ApiOperation({summary: 'tray this owner value: "0x9eef2e4511390ce4"',})
    @ApiOkResponse({
        status: 200,
        schema: {
            example: {
                "ownerAddress": "0x9eef2e4511390ce4",
                "nfts": [
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13348",
                            "tokenMetadata": {
                                "uuid": "83699066"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "3543"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13744",
                            "tokenMetadata": {
                                "uuid": "83716052"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "3939"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "12579",
                            "tokenMetadata": {
                                "uuid": "83640897"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "2774"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "11108",
                            "tokenMetadata": {
                                "uuid": "83563003"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1303"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "14518",
                            "tokenMetadata": {
                                "uuid": "84092375"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "4713"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "30764",
                            "tokenMetadata": {
                                "uuid": "151952938"
                            }
                        },
                        "title": "Sneakerz #13828",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//13828",
                        "media": [
                            {
                                "uri": "ipfs://QmW8C4cHRq2mPcTVMPphwpf3RyQ5rYJAB3bERNsbLLYaEM/13828.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "color4",
                                    "value": "86CEBC"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #13828"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Uncommon"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "jump",
                                    "value": "84"
                                },
                                {
                                    "name": "style",
                                    "value": "Tampa Bay Omens 704"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//13828"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "4"
                                },
                                {
                                    "name": "background",
                                    "value": "Lavender Night"
                                },
                                {
                                    "name": "design",
                                    "value": "Lowtop"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "id",
                                    "value": "13828"
                                },
                                {
                                    "name": "color3",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "Stopping on a Dime"
                                },
                                {
                                    "name": "color2",
                                    "value": "86CEBC"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "Yes"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmW8C4cHRq2mPcTVMPphwpf3RyQ5rYJAB3bERNsbLLYaEM/13828.png"
                                },
                                {
                                    "name": "templateID",
                                    "value": "23846"
                                },
                                {
                                    "name": "color1",
                                    "value": "DF7126"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "34725",
                            "tokenMetadata": {
                                "uuid": "159195166"
                            }
                        },
                        "title": "Sneakerz #17786",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//17786",
                        "media": [
                            {
                                "uri": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17786.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "style",
                                    "value": "411 C0ach Special"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #17786"
                                },
                                {
                                    "name": "background",
                                    "value": "Smoke Sky"
                                },
                                {
                                    "name": "color1",
                                    "value": "ee0000"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "color3",
                                    "value": "cd0000"
                                },
                                {
                                    "name": "design",
                                    "value": "Hightop"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "Drive the Lane"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "id",
                                    "value": "17786"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//17786"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "templateID",
                                    "value": "27807"
                                },
                                {
                                    "name": "jump",
                                    "value": "76"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Rare"
                                },
                                {
                                    "name": "color4",
                                    "value": "cd0000"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17786.png"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "0"
                                },
                                {
                                    "name": "color2",
                                    "value": "390000"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "14379",
                            "tokenMetadata": {
                                "uuid": "84080071"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "4574"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "14755",
                            "tokenMetadata": {
                                "uuid": "84108967"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "4950"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "25288",
                            "tokenMetadata": {
                                "uuid": "146038905"
                            }
                        },
                        "title": "Sneakerz #8403",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//8403",
                        "media": [
                            {
                                "uri": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/8403.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "templateID",
                                    "value": "18371"
                                },
                                {
                                    "name": "id",
                                    "value": "8403"
                                },
                                {
                                    "name": "jump",
                                    "value": "77"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "2"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "color4",
                                    "value": "1f1a1d"
                                },
                                {
                                    "name": "design",
                                    "value": "Trainer"
                                },
                                {
                                    "name": "color2",
                                    "value": "648440"
                                },
                                {
                                    "name": "background",
                                    "value": "Peachy Keen"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #8403"
                                },
                                {
                                    "name": "style",
                                    "value": "902"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "None"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//8403"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/8403.png"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Common"
                                },
                                {
                                    "name": "color3",
                                    "value": "947d4c"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "color1",
                                    "value": "bd9b56"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13956",
                            "tokenMetadata": {
                                "uuid": "84026920"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "4151"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "9819",
                            "tokenMetadata": {
                                "uuid": "83524443"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "14"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "12285",
                            "tokenMetadata": {
                                "uuid": "83616988"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "2480"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13354",
                            "tokenMetadata": {
                                "uuid": "83699072"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "mintNumber",
                                    "value": "3549"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13870",
                            "tokenMetadata": {
                                "uuid": "84015816"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "4065"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "34656",
                            "tokenMetadata": {
                                "uuid": "159194957"
                            }
                        },
                        "title": "Sneakerz #17717",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//17717",
                        "media": [
                            {
                                "uri": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17717.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "enhancement",
                                    "value": "Stopping on a Dime"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//17717"
                                },
                                {
                                    "name": "jump",
                                    "value": "86"
                                },
                                {
                                    "name": "color2",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "color3",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "design",
                                    "value": "Hightop"
                                },
                                {
                                    "name": "id",
                                    "value": "17717"
                                },
                                {
                                    "name": "templateID",
                                    "value": "27738"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Rare"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17717.png"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "Yes"
                                },
                                {
                                    "name": "color4",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "color1",
                                    "value": "8B2131"
                                },
                                {
                                    "name": "background",
                                    "value": "Old Campfire"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "style",
                                    "value": "New York Golden Bulls 410"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "5"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #17717"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "10524",
                            "tokenMetadata": {
                                "uuid": "83528145"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "719"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "11354",
                            "tokenMetadata": {
                                "uuid": "83571860"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1549"
                                },
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "36976",
                            "tokenMetadata": {
                                "uuid": "209369442"
                            }
                        },
                        "title": "Sneakerz #20037",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//20037",
                        "media": [
                            {
                                "uri": "ipfs://QmX7PbnbPNzjqqEX9Mbx4zyfTdFKZUQVmu62TUwS1asHmx/20037.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "style",
                                    "value": "Duncan Robinson"
                                },
                                {
                                    "name": "background",
                                    "value": "DBO"
                                },
                                {
                                    "name": "templateID",
                                    "value": "30058"
                                },
                                {
                                    "name": "id",
                                    "value": "20037"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmX7PbnbPNzjqqEX9Mbx4zyfTdFKZUQVmu62TUwS1asHmx/20037.png"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//20037"
                                },
                                {
                                    "name": "jump",
                                    "value": "84"
                                },
                                {
                                    "name": "color1",
                                    "value": "3e5b51"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Custom"
                                },
                                {
                                    "name": "design",
                                    "value": "Trainer"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #20037"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "Bullseye"
                                },
                                {
                                    "name": "color3",
                                    "value": "6e7e55"
                                },
                                {
                                    "name": "color2",
                                    "value": "ffc190"
                                },
                                {
                                    "name": "color4",
                                    "value": "ff8837"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "4"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "30656",
                            "tokenMetadata": {
                                "uuid": "151952271"
                            }
                        },
                        "title": "Sneakerz #13720",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//13720",
                        "media": [
                            {
                                "uri": "ipfs://QmW8C4cHRq2mPcTVMPphwpf3RyQ5rYJAB3bERNsbLLYaEM/13720.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "enhancement",
                                    "value": "None"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//13720"
                                },
                                {
                                    "name": "color2",
                                    "value": "86CEBC"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmW8C4cHRq2mPcTVMPphwpf3RyQ5rYJAB3bERNsbLLYaEM/13720.png"
                                },
                                {
                                    "name": "design",
                                    "value": "Lowtop"
                                },
                                {
                                    "name": "background",
                                    "value": "Smoke Sky"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Uncommon"
                                },
                                {
                                    "name": "jump",
                                    "value": "77"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "-1"
                                },
                                {
                                    "name": "color3",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "color1",
                                    "value": "DF7126"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #13720"
                                },
                                {
                                    "name": "style",
                                    "value": "Tampa Bay Omens 706"
                                },
                                {
                                    "name": "id",
                                    "value": "13720"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "templateID",
                                    "value": "23738"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "color4",
                                    "value": "86CEBC"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "Yes"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "34933",
                            "tokenMetadata": {
                                "uuid": "159196841"
                            }
                        },
                        "title": "Sneakerz #17994",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//17994",
                        "media": [
                            {
                                "uri": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17994.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "color4",
                                    "value": "66bf3d"
                                },
                                {
                                    "name": "style",
                                    "value": "407"
                                },
                                {
                                    "name": "design",
                                    "value": "Hightop"
                                },
                                {
                                    "name": "jump",
                                    "value": "69"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Rare"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #17994"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//17994"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "1"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "None"
                                },
                                {
                                    "name": "templateID",
                                    "value": "28015"
                                },
                                {
                                    "name": "color3",
                                    "value": "6e655f"
                                },
                                {
                                    "name": "id",
                                    "value": "17994"
                                },
                                {
                                    "name": "color1",
                                    "value": "4582cc"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmUvW4EykGb4dcwWZXo5opteETw6Gd3EPbnE3c61vxBr8y/17994.png"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "color2",
                                    "value": "969590"
                                },
                                {
                                    "name": "background",
                                    "value": "Murky Lake"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "13335",
                            "tokenMetadata": {
                                "uuid": "83699053"
                            }
                        },
                        "title": "Bryson DeChambeau - Vegas, Baby!",
                        "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                        "media": [
                            {
                                "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "title",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "video",
                                    "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                                },
                                {
                                    "name": "description",
                                    "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                                },
                                {
                                    "name": "location",
                                    "value": "Las Vegas, NV"
                                },
                                {
                                    "name": "item",
                                    "value": "1"
                                },
                                {
                                    "name": "series",
                                    "value": "Bryson DeChambeau - Vegas, Baby!"
                                },
                                {
                                    "name": "setID",
                                    "value": "4"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "3530"
                                },
                                {
                                    "name": "templateID",
                                    "value": "9926"
                                },
                                {
                                    "name": "editions",
                                    "value": "5000"
                                },
                                {
                                    "name": "type",
                                    "value": "Golf"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "26867",
                            "tokenMetadata": {
                                "uuid": "151879156"
                            }
                        },
                        "title": "Sneakerz #9931",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//9931",
                        "media": [
                            {
                                "uri": "ipfs://QmZbJddYV8wcsJC955mqPPoRfK8PTSn5rLgeipSzHn4FDx/9931.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "color4",
                                    "value": "FF0000"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//9931"
                                },
                                {
                                    "name": "style",
                                    "value": "716"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Uncommon"
                                },
                                {
                                    "name": "color2",
                                    "value": "003070"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmZbJddYV8wcsJC955mqPPoRfK8PTSn5rLgeipSzHn4FDx/9931.png"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "color3",
                                    "value": "A000E0"
                                },
                                {
                                    "name": "jump",
                                    "value": "88"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "background",
                                    "value": "Smoke Sky"
                                },
                                {
                                    "name": "color1",
                                    "value": "3070B0"
                                },
                                {
                                    "name": "accessory",
                                    "value": "Duct Tape"
                                },
                                {
                                    "name": "templateID",
                                    "value": "19949"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "None"
                                },
                                {
                                    "name": "design",
                                    "value": "Lowtop"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #9931"
                                },
                                {
                                    "name": "id",
                                    "value": "9931"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "2"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "25055",
                            "tokenMetadata": {
                                "uuid": "146035059"
                            }
                        },
                        "title": "Sneakerz #8170",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//8170",
                        "media": [
                            {
                                "uri": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/8170.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "4"
                                },
                                {
                                    "name": "color1",
                                    "value": "485262"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #8170"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/8170.png"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "color3",
                                    "value": "373a3e"
                                },
                                {
                                    "name": "color4",
                                    "value": "3f4548"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "Ankle Breaker"
                                },
                                {
                                    "name": "color2",
                                    "value": "3f4548"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "rarity",
                                    "value": "Common"
                                },
                                {
                                    "name": "design",
                                    "value": "Trainer"
                                },
                                {
                                    "name": "style",
                                    "value": "909"
                                },
                                {
                                    "name": "templateID",
                                    "value": "18138"
                                },
                                {
                                    "name": "jump",
                                    "value": "82"
                                },
                                {
                                    "name": "accessory",
                                    "value": "Silver Chain"
                                },
                                {
                                    "name": "id",
                                    "value": "8170"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//8170"
                                },
                                {
                                    "name": "background",
                                    "value": "Silver Fox"
                                }
                            ]
                        }
                    },
                    {
                        "contract": {
                            "name": "Gaia",
                            "address": "0x8b148183c28ff88f",
                            "externalDomain": "ballerz.xyz",
                            "contractMetadata": {
                                "storagePath": "Gaia.CollectionStoragePath",
                                "publicPath": "Gaia.CollectionPublicPath",
                                "publicCollectionName": "Gaia.CollectionPublic"
                            }
                        },
                        "id": {
                            "tokenId": "25512",
                            "tokenMetadata": {
                                "uuid": "146042102"
                            }
                        },
                        "title": "Sneakerz #6327",
                        "description": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz",
                        "externalDomainViewUrl": "/collection/sneakerz//6327",
                        "media": [
                            {
                                "uri": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/6327.png",
                                "mimeType": "image"
                            }
                        ],
                        "metadata": {
                            "metadata": [
                                {
                                    "name": "rarity",
                                    "value": "Common"
                                },
                                {
                                    "name": "background",
                                    "value": "Cantaloupe Sky"
                                },
                                {
                                    "name": "accessory",
                                    "value": "None"
                                },
                                {
                                    "name": "enhancement",
                                    "value": "Ankle Breaker"
                                },
                                {
                                    "name": "description",
                                    "value": "The preeminent collection of digital basketball footwear, reserved only for the most stylish and skilled Ballerz"
                                },
                                {
                                    "name": "color4",
                                    "value": "000000"
                                },
                                {
                                    "name": "setID",
                                    "value": "7"
                                },
                                {
                                    "name": "img",
                                    "value": "ipfs://QmcUHu33GL3EbfRj1u2Zo5cTQqNdNF1twFXdr7uafnWS7P/6327.png"
                                },
                                {
                                    "name": "mintNumber",
                                    "value": "1"
                                },
                                {
                                    "name": "color1",
                                    "value": "FFFFFF"
                                },
                                {
                                    "name": "jump",
                                    "value": "92"
                                },
                                {
                                    "name": "teamcolor",
                                    "value": "No"
                                },
                                {
                                    "name": "id",
                                    "value": "6327"
                                },
                                {
                                    "name": "title",
                                    "value": "Sneakerz #6327"
                                },
                                {
                                    "name": "templateID",
                                    "value": "18595"
                                },
                                {
                                    "name": "dripfactor",
                                    "value": "2"
                                },
                                {
                                    "name": "color2",
                                    "value": "ffb54a"
                                },
                                {
                                    "name": "color3",
                                    "value": "902200"
                                },
                                {
                                    "name": "uri",
                                    "value": "/collection/sneakerz//6327"
                                },
                                {
                                    "name": "design",
                                    "value": "Trainer"
                                },
                                {
                                    "name": "style",
                                    "value": "900"
                                }
                            ]
                        }
                    }
                ],
                "chain": "FLOW",
                "network": "FLOW_MAINNET",
                "nftCount": 6695,
                "offset": 0

            }
        }

    })
    @Get('/nftByOwner')
    getNftByOwner(
        @Query('owner') owner?: String,
    ) {

    return this.alchemyApiService.getNftByOwner(owner);
    }

    @Get('/solana')
    getSol() {
        return this.alchemyApiService.solana();
    }
}
