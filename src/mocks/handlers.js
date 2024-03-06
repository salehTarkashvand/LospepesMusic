import { http, HttpResponse } from 'msw';
 
export const handlers = [
  http.get('/api/charts', (resolver) => {
    return HttpResponse.json([
      {
        "properties": {},
        "tracks": [
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "686595065",
                "title": "Beautiful Things",
                "subtitle": "Benson Boone",
                "share": {
                    "subject": "Beautiful Things - Benson Boone",
                    "text": "Beautiful Things by Benson Boone",
                    "href": "https://www.shazam.com/track/686595065/beautiful-things",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/f4/92/54f49210-e260-b519-ebbd-f4f40ee710cd/054391342751.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Beautiful Things by Benson Boone.",
                    "html": "https://www.shazam.com/snippets/email-share/686595065?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/94/6d/76/946d767c-9bb6-5810-f2ff-4e39cddf169e/1705e288-fea7-4e28-a5b2-e82261611304_file_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/686595065"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/94/6d/76/946d767c-9bb6-5810-f2ff-4e39cddf169e/1705e288-fea7-4e28-a5b2-e82261611304_file_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/f4/92/54f49210-e260-b519-ebbd-f4f40ee710cd/054391342751.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/f4/92/54f49210-e260-b519-ebbd-f4f40ee710cd/054391342751.jpg/400x400cc.jpg",
                    "joecolor": "b:2c2c2cp:e6e6e6s:d0d0d0t:c0c0c0q:afafaf"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1724488124"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2d/4e/7b/2d4e7b94-5521-568f-f269-c8643001d32b/mzaf_1995669796140896759.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/beautiful-things/1724488123?i=1724488124&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/beautiful-things/1724488123?i=1724488124&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "benson-boone",
                        "id": "42",
                        "adamid": "1587414058"
                    }
                ],
                "url": "https://www.shazam.com/track/686595065/beautiful-things",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1587414058/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1726561628",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1726561628?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "691987825",
                "title": "Tshwala Bam (feat. S.N.E & EeQue)",
                "subtitle": "Titom & Yuppe",
                "share": {
                    "subject": "Tshwala Bam (feat. S.N.E & EeQue) - Titom & Yuppe",
                    "text": "Tshwala Bam (feat. S.N.E & EeQue) by Titom & Yuppe",
                    "href": "https://www.shazam.com/track/691987825/tshwala-bam-feat-s-n-e-eeque",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3c/05/10/3c0510b7-006a-30df-fdb9-2176e84b63ed/0766214662044.png/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Tshwala Bam (feat. S.N.E & EeQue) by Titom & Yuppe.",
                    "html": "https://www.shazam.com/snippets/email-share/691987825?lang=en-US&country=US",
                    "snapchat": "https://www.shazam.com/partner/sc/track/691987825"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3c/05/10/3c0510b7-006a-30df-fdb9-2176e84b63ed/0766214662044.png/400x400cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3c/05/10/3c0510b7-006a-30df-fdb9-2176e84b63ed/0766214662044.png/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3c/05/10/3c0510b7-006a-30df-fdb9-2176e84b63ed/0766214662044.png/400x400cc.jpg",
                    "joecolor": "b:0c1011p:ffffffs:fee0c8t:cecfcfq:ceb6a3"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1731092116"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/04/87/a7/0487a771-8f2e-e27c-0ccf-4c7bb55e6da4/mzaf_9878701674755392134.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/tshwala-bam-feat-s-n-e-eeque/1731092115?i=1731092116&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/tshwala-bam-feat-s-n-e-eeque/1731092115?i=1731092116&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "titom",
                        "id": "42",
                        "adamid": "351973082"
                    },
                    {
                        "alias": "yuppe",
                        "id": "42",
                        "adamid": "1496720968"
                    }
                ],
                "url": "https://www.shazam.com/track/691987825/tshwala-bam-feat-s-n-e-eeque",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/351973082/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "668834911",
                "title": "Lose Control",
                "subtitle": "Teddy Swims",
                "share": {
                    "subject": "Lose Control - Teddy Swims",
                    "text": "Lose Control by Teddy Swims",
                    "href": "https://www.shazam.com/track/668834911/lose-control",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Lose Control by Teddy Swims.",
                    "html": "https://www.shazam.com/snippets/email-share/668834911?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/db/e4/71dbe424-71f4-95b5-34e6-768b2ebf8e10/5b1f9c52-c047-4424-b60a-a8fb4347c3db_ami-identity-6acfba2c102ce0d21662c3346bcf6aa8-2023-09-13T22-38-15.508Z_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/668834911"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/db/e4/71dbe424-71f4-95b5-34e6-768b2ebf8e10/5b1f9c52-c047-4424-b60a-a8fb4347c3db_ami-identity-6acfba2c102ce0d21662c3346bcf6aa8-2023-09-13T22-38-15.508Z_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg",
                    "joecolor": "b:902400p:f8e8c6s:ed965ct:e3c19eq:db7f49"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1691699836"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/73/df/40/73df40b0-997e-bff6-2738-bd22fcea788f/mzaf_14027507605037085841.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/lose-control/1691699589?i=1691699836&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/lose-control/1691699589?i=1691699836&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "teddy-swims",
                        "id": "42",
                        "adamid": "1462541757"
                    }
                ],
                "url": "https://www.shazam.com/track/668834911/lose-control",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1462541757/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1694403743",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1694403743?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "629034396",
                "title": "Amathole",
                "subtitle": "Joezi & Lizwi",
                "share": {
                    "subject": "Amathole - Joezi & Lizwi",
                    "text": "Amathole by Joezi & Lizwi",
                    "href": "https://www.shazam.com/track/629034396/amathole",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/e7/45/7ae74529-2c51-a8a8-dee3-6c061a3804c3/cover.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Amathole by Joezi & Lizwi.",
                    "html": "https://www.shazam.com/snippets/email-share/629034396?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b7/01/ab/b701ab96-513f-97e4-81f7-9f77bc95cef0/mzl.ipcebgiu.jpg/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/629034396"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/b7/01/ab/b701ab96-513f-97e4-81f7-9f77bc95cef0/mzl.ipcebgiu.jpg/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/e7/45/7ae74529-2c51-a8a8-dee3-6c061a3804c3/cover.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/e7/45/7ae74529-2c51-a8a8-dee3-6c061a3804c3/cover.jpg/400x400cc.jpg",
                    "joecolor": "b:000000p:f6a8a4s:f1767et:c58683q:c05e65"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1640871698"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/81/1f/9c/811f9c42-ca46-3989-9c54-04ce60a2eb68/mzaf_9826398751024953469.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/amathole/1640871694?i=1640871698&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/amathole/1640871694?i=1640871698&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "joezi",
                        "id": "42",
                        "adamid": "1536744401"
                    },
                    {
                        "alias": "lizwi",
                        "id": "42",
                        "adamid": "1062376357"
                    }
                ],
                "url": "https://www.shazam.com/track/629034396/amathole",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1536744401/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "687291766",
                "title": "Praise Jah In the Moonlight",
                "subtitle": "YG Marley",
                "share": {
                    "subject": "Praise Jah In the Moonlight - YG Marley",
                    "text": "Praise Jah In the Moonlight by YG Marley",
                    "href": "https://www.shazam.com/track/687291766/praise-jah-in-the-moonlight",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/63/2c/be632c80-7091-66dd-7578-2865151e8982/cover_4062851821834.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Praise Jah In the Moonlight by YG Marley.",
                    "html": "https://www.shazam.com/snippets/email-share/687291766?lang=en-US&country=US",
                    "snapchat": "https://www.shazam.com/partner/sc/track/687291766"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/63/2c/be632c80-7091-66dd-7578-2865151e8982/cover_4062851821834.jpg/400x400cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/63/2c/be632c80-7091-66dd-7578-2865151e8982/cover_4062851821834.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/63/2c/be632c80-7091-66dd-7578-2865151e8982/cover_4062851821834.jpg/400x400cc.jpg",
                    "joecolor": "b:a39566p:000000s:1b1b1bt:211e14q:36342a"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1723309988"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/eb/19/ed/eb19ed41-d748-d24d-134e-0beaddde5249/mzaf_5247888329211244592.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/praise-jah-in-the-moonlight/1723309984?i=1723309988&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/praise-jah-in-the-moonlight/1723309984?i=1723309988&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "yg-marley",
                        "id": "42",
                        "adamid": "1496864889"
                    }
                ],
                "url": "https://www.shazam.com/track/687291766/praise-jah-in-the-moonlight",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1496864889/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "678665902",
                "title": "Mwaki",
                "subtitle": "ZERB & Sofiya Nzau",
                "share": {
                    "subject": "Mwaki - ZERB & Sofiya Nzau",
                    "text": "Mwaki by ZERB & Sofiya Nzau",
                    "href": "https://www.shazam.com/track/678665902/mwaki",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/89/2f/f8/892ff8a7-2799-2225-06b9-4311ba95f15f/8720996908372.png/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Mwaki by ZERB & Sofiya Nzau.",
                    "html": "https://www.shazam.com/snippets/email-share/678665902?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/77/2d/88/772d880f-c14a-e9ab-ee90-8b170f04b6e9/pr_source.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/678665902"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/77/2d/88/772d880f-c14a-e9ab-ee90-8b170f04b6e9/pr_source.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/89/2f/f8/892ff8a7-2799-2225-06b9-4311ba95f15f/8720996908372.png/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/89/2f/f8/892ff8a7-2799-2225-06b9-4311ba95f15f/8720996908372.png/400x400cc.jpg",
                    "joecolor": "b:190d0ap:ef803ds:f97440t:c46933q:cc5f36"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1708588826"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d4/03/18/d40318ce-7949-b94f-d5bd-c10a4ded494a/mzaf_9253451330093057030.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/mwaki/1708588822?i=1708588826&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/mwaki/1708588822?i=1708588826&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "zerb",
                        "id": "42",
                        "adamid": "275494817"
                    },
                    {
                        "alias": "sofiya-nzau",
                        "id": "42",
                        "adamid": "1607473541"
                    }
                ],
                "url": "https://www.shazam.com/track/678665902/mwaki",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/275494817/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1728679185",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1728679185?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "691577092",
                "title": "TEXAS HOLD 'EM",
                "subtitle": "Beyoncé",
                "share": {
                    "subject": "TEXAS HOLD 'EM - Beyoncé",
                    "text": "TEXAS HOLD 'EM by Beyoncé",
                    "href": "https://www.shazam.com/track/691577092/texas-hold-em",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/e0/73/1be0738e-c0c8-306b-5fed-9403b8383e06/196871850414.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover TEXAS HOLD 'EM by Beyoncé.",
                    "html": "https://www.shazam.com/snippets/email-share/691577092?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/691577092"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/e0/73/1be0738e-c0c8-306b-5fed-9403b8383e06/196871850414.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/e0/73/1be0738e-c0c8-306b-5fed-9403b8383e06/196871850414.jpg/400x400cc.jpg",
                    "joecolor": "b:241711p:e9e4e0s:e0a17bt:c2bbb7q:bb8565"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1730408498"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d3/a4/2d/d3a42d18-d36d-b065-e761-2ed148b812c1/mzaf_16114005326486891839.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/texas-hold-em/1730408497?i=1730408498&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/texas-hold-em/1730408497?i=1730408498&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "beyonc%C3%A9",
                        "id": "42",
                        "adamid": "1419227"
                    }
                ],
                "url": "https://www.shazam.com/track/691577092/texas-hold-em",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1419227/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "677978279",
                "title": "Made For Me",
                "subtitle": "Muni Long",
                "share": {
                    "subject": "Made For Me - Muni Long",
                    "text": "Made For Me by Muni Long",
                    "href": "https://www.shazam.com/track/677978279/made-for-me",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1c/c1/e0/1cc1e064-255c-e1b8-71fa-00cc68a5918e/23UM1IM06665.rgb.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Made For Me by Muni Long.",
                    "html": "https://www.shazam.com/snippets/email-share/677978279?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e3/fa/50/e3fa502d-b547-59af-c145-82c8ce21bfd2/pr_source.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/677978279"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e3/fa/50/e3fa502d-b547-59af-c145-82c8ce21bfd2/pr_source.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1c/c1/e0/1cc1e064-255c-e1b8-71fa-00cc68a5918e/23UM1IM06665.rgb.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1c/c1/e0/1cc1e064-255c-e1b8-71fa-00cc68a5918e/23UM1IM06665.rgb.jpg/400x400cc.jpg",
                    "joecolor": "b:afaab1p:000000s:1f1e20t:232224q:3b3a3d"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1707416065"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d7/2d/5e/d72d5eb5-f58a-79d6-53c8-5d24f978f09f/mzaf_9685450038740072122.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/made-for-me/1707416056?i=1707416065&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/made-for-me/1707416056?i=1707416065&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "muni-long",
                        "id": "42",
                        "adamid": "1531512544"
                    }
                ],
                "url": "https://www.shazam.com/track/677978279/made-for-me",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1531512544/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1725542045",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1725542045?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "683057339",
                "title": "Stumblin' In",
                "subtitle": "CYRIL",
                "share": {
                    "subject": "Stumblin' In - CYRIL",
                    "text": "Stumblin' In by CYRIL",
                    "href": "https://www.shazam.com/track/683057339/stumblin-in",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/f7/7a/d2f77a84-6a4b-81fc-f678-c482ec64fffa/5054197910432.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Stumblin' In by CYRIL.",
                    "html": "https://www.shazam.com/snippets/email-share/683057339?lang=en-US&country=US",
                    "snapchat": "https://www.shazam.com/partner/sc/track/683057339"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/f7/7a/d2f77a84-6a4b-81fc-f678-c482ec64fffa/5054197910432.jpg/400x400cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/f7/7a/d2f77a84-6a4b-81fc-f678-c482ec64fffa/5054197910432.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/f7/7a/d2f77a84-6a4b-81fc-f678-c482ec64fffa/5054197910432.jpg/400x400cc.jpg",
                    "joecolor": "b:181c23p:f4f6f5s:c8c090t:c8cbcbq:a49f7a"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1716033386"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0d/52/57/0d525722-e92d-731c-4370-adb8184efe41/mzaf_14824753906911238288.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/stumblin-in/1716033381?i=1716033386&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/stumblin-in/1716033381?i=1716033386&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "cyril",
                        "id": "42",
                        "adamid": "1552317527"
                    }
                ],
                "url": "https://www.shazam.com/track/683057339/stumblin-in",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1552317527/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1733251848",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1733251848?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "687742934",
                "title": "The Sound of Silence (CYRIL Remix)",
                "subtitle": "Disturbed",
                "share": {
                    "subject": "The Sound of Silence (CYRIL Remix) - Disturbed",
                    "text": "The Sound of Silence (CYRIL Remix) by Disturbed",
                    "href": "https://www.shazam.com/track/687742934/the-sound-of-silence-cyril-remix",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/70/8a/94708ae0-6c8b-a56c-23c9-02b7c84798df/054391308696.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover The Sound of Silence (CYRIL Remix) by Disturbed.",
                    "html": "https://www.shazam.com/snippets/email-share/687742934?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/63/8b/44/638b44b1-a2a6-0c44-8afb-d98929fa11b7/pr_source.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/687742934"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/63/8b/44/638b44b1-a2a6-0c44-8afb-d98929fa11b7/pr_source.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/70/8a/94708ae0-6c8b-a56c-23c9-02b7c84798df/054391308696.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/70/8a/94708ae0-6c8b-a56c-23c9-02b7c84798df/054391308696.jpg/400x400cc.jpg",
                    "joecolor": "b:010101p:fdefefs:febba0t:cabfbfq:cb9680"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1728548345"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/85/81/2b/85812b48-a272-5108-aa42-fabf3e7cb9b9/mzaf_18033868338570997429.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/the-sound-of-silence-cyril-remix/1728548343?i=1728548345&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/the-sound-of-silence-cyril-remix/1728548343?i=1728548345&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "disturbed",
                        "id": "42",
                        "adamid": "156807"
                    }
                ],
                "url": "https://www.shazam.com/track/687742934/the-sound-of-silence-cyril-remix",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/156807/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "621863643",
                "title": "End of Beginning",
                "subtitle": "Djo",
                "share": {
                    "subject": "End of Beginning - Djo",
                    "text": "End of Beginning by Djo",
                    "href": "https://www.shazam.com/track/621863643/end-of-beginning",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/94/31/e59431de-7591-58e6-c4d4-105b6373ad6a/5056494917336_1.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover End of Beginning by Djo.",
                    "html": "https://www.shazam.com/snippets/email-share/621863643?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a6/02/1f/a6021f7c-f9ad-9347-506e-0f024d9fffc3/pr_source.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/621863643"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a6/02/1f/a6021f7c-f9ad-9347-506e-0f024d9fffc3/pr_source.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/94/31/e59431de-7591-58e6-c4d4-105b6373ad6a/5056494917336_1.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/94/31/e59431de-7591-58e6-c4d4-105b6373ad6a/5056494917336_1.jpg/400x400cc.jpg",
                    "joecolor": "b:110d0ap:e59a78s:d59439t:bb7e62q:ad7930"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1632448108"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d0/94/59/d09459cc-a6b4-ac65-c301-e10ec37b64a4/mzaf_580207731335378846.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/end-of-beginning/1632447652?i=1632448108&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/end-of-beginning/1632447652?i=1632448108&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "djo",
                        "id": "42",
                        "adamid": "1473178582"
                    }
                ],
                "url": "https://www.shazam.com/track/621863643/end-of-beginning",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1473178582/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "688114425",
                "title": "redrum",
                "subtitle": "21 Savage",
                "share": {
                    "subject": "redrum - 21 Savage",
                    "text": "redrum by 21 Savage",
                    "href": "https://www.shazam.com/track/688114425/redrum",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/de/82/b9/de82b98d-56a1-e27b-10ea-46964f4585e4/196871714549.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover redrum by 21 Savage.",
                    "html": "https://www.shazam.com/snippets/email-share/688114425?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/93/59/c7/9359c74e-bd6a-e33a-b02b-89302f2afd6a/mzl.gvvnvwyf.jpeg/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/688114425"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/93/59/c7/9359c74e-bd6a-e33a-b02b-89302f2afd6a/mzl.gvvnvwyf.jpeg/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/de/82/b9/de82b98d-56a1-e27b-10ea-46964f4585e4/196871714549.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/de/82/b9/de82b98d-56a1-e27b-10ea-46964f4585e4/196871714549.jpg/400x400cc.jpg",
                    "joecolor": "b:191a1ep:d2cacds:d0b796t:ada7aaq:ab977e"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1724494724"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/77/40/72/774072ad-b182-85cf-8ba1-3d6a861c02a4/mzaf_2612032592331347153.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/redrum/1724494274?i=1724494724&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/redrum/1724494274?i=1724494724&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "21-savage",
                        "id": "42",
                        "adamid": "894820464"
                    }
                ],
                "url": "https://www.shazam.com/track/688114425/redrum",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/894820464/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1726276331",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1726276331?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "691437508",
                "title": "CARNIVAL (feat. Playboi Carti)",
                "subtitle": "¥$, Kanye West, Ty Dolla $ign & Rich The Kid",
                "share": {
                    "subject": "CARNIVAL (feat. Playboi Carti) - ¥$, Kanye West, Ty Dolla $ign & Rich The Kid",
                    "text": "CARNIVAL (feat. Playboi Carti) by ¥$, Kanye West, Ty Dolla $ign & Rich The Kid",
                    "href": "https://www.shazam.com/track/691437508/carnival-feat-playboi-carti",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0f/22/cc/0f22cc99-5c36-102e-8f33-e28dc4be7c99/cover.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover CARNIVAL (feat. Playboi Carti) by ¥$, Kanye West, Ty Dolla $ign & Rich The Kid.",
                    "html": "https://www.shazam.com/snippets/email-share/691437508?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/80/8f/5e/808f5eeb-6c1c-d197-694f-b65820296071/e79820b6-7593-4359-af1b-756bee2be910_ami-identity-9f8306089f73a88aefa6d6f49061f749-2024-02-23T17-29-39.273Z_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/691437508"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/80/8f/5e/808f5eeb-6c1c-d197-694f-b65820296071/e79820b6-7593-4359-af1b-756bee2be910_ami-identity-9f8306089f73a88aefa6d6f49061f749-2024-02-23T17-29-39.273Z_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0f/22/cc/0f22cc99-5c36-102e-8f33-e28dc4be7c99/cover.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0f/22/cc/0f22cc99-5c36-102e-8f33-e28dc4be7c99/cover.jpg/400x400cc.jpg",
                    "joecolor": "b:0c0e0dp:dbc3b5s:d1b8aat:b29e93q:a9968b"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1731223674"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/96/59/7f/96597f9a-eb0d-e7e0-d58b-090406a36957/mzaf_11772419971450380785.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/carnival-feat-playboi-carti/1731223673?i=1731223674&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/carnival-feat-playboi-carti/1731223673?i=1731223674&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "%C2%A5%24",
                        "id": "42",
                        "adamid": "1718573158"
                    },
                    {
                        "alias": "kanye-west",
                        "id": "42",
                        "adamid": "2715720"
                    },
                    {
                        "alias": "ty-dolla-%24ign",
                        "id": "42",
                        "adamid": "602917745"
                    },
                    {
                        "alias": "rich-the-kid",
                        "id": "42",
                        "adamid": "561444659"
                    }
                ],
                "url": "https://www.shazam.com/track/691437508/carnival-feat-playboi-carti",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1718573158/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "669034433",
                "title": "CLEARED - Remix",
                "subtitle": "Lilithzplug",
                "share": {
                    "subject": "CLEARED - Remix - Lilithzplug",
                    "text": "CLEARED - Remix by Lilithzplug",
                    "href": "https://www.shazam.com/track/669034433/cleared-remix",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/56/42/1856423c-b9ef-9d4b-950a-d757c7d0ffb1/35111.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover CLEARED - Remix by Lilithzplug.",
                    "html": "https://www.shazam.com/snippets/email-share/669034433?lang=en-US&country=US",
                    "snapchat": "https://www.shazam.com/partner/sc/track/669034433"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/56/42/1856423c-b9ef-9d4b-950a-d757c7d0ffb1/35111.jpg/400x400cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/56/42/1856423c-b9ef-9d4b-950a-d757c7d0ffb1/35111.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/18/56/42/1856423c-b9ef-9d4b-950a-d757c7d0ffb1/35111.jpg/400x400cc.jpg",
                    "joecolor": "b:1a1a1ap:e0e0e0s:d58dc0t:b9b9b9q:b0769f"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1719712051"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e8/63/92/e863926c-8928-90d7-f075-f7046eac6b55/mzaf_1247391373386705556.plus.aac.p.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/cleared-remix/1719712047?i=1719712051&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/cleared-remix/1719712047?i=1719712051&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "lilithzplug",
                        "id": "42",
                        "adamid": "1659235571"
                    }
                ],
                "url": "https://www.shazam.com/track/669034433/cleared-remix",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1659235571/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "682603992",
                "title": "Lovin On Me",
                "subtitle": "Jack Harlow",
                "share": {
                    "subject": "Lovin On Me - Jack Harlow",
                    "text": "Lovin On Me by Jack Harlow",
                    "href": "https://www.shazam.com/track/682603992/lovin-on-me",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/95/0e/c1950e0a-3fc8-83c2-8913-a14dd33bfe62/075679664990.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Lovin On Me by Jack Harlow.",
                    "html": "https://www.shazam.com/snippets/email-share/682603992?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/53/75/cc/5375ccad-4b82-14d9-5ec2-fbb115a2a54b/58260d2f-76b6-42e0-a341-ab18d43395de_ami-identity-3ff3598bfa72166b015e2de21b1793d1-2023-11-10T01-46-30.297Z_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/682603992"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/53/75/cc/5375ccad-4b82-14d9-5ec2-fbb115a2a54b/58260d2f-76b6-42e0-a341-ab18d43395de_ami-identity-3ff3598bfa72166b015e2de21b1793d1-2023-11-10T01-46-30.297Z_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/95/0e/c1950e0a-3fc8-83c2-8913-a14dd33bfe62/075679664990.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/95/0e/c1950e0a-3fc8-83c2-8913-a14dd33bfe62/075679664990.jpg/400x400cc.jpg",
                    "joecolor": "b:100f2fp:c3c7dcs:b0a5dbt:9fa2b9q:9087b8"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1715277428"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ef/09/34/ef09346f-91c8-bc8d-7a40-b94d871bcf98/mzaf_11177645511189211683.plus.aac.p.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/lovin-on-me/1715277427?i=1715277428&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/lovin-on-me/1715277427?i=1715277428&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "jack-harlow",
                        "id": "42",
                        "adamid": "1047679432"
                    }
                ],
                "url": "https://www.shazam.com/track/682603992/lovin-on-me",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1047679432/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1715709386",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1715709386?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "40628368",
                "title": "Unwritten",
                "subtitle": "Natasha Bedingfield",
                "share": {
                    "subject": "Unwritten - Natasha Bedingfield",
                    "text": "Unwritten by Natasha Bedingfield",
                    "href": "https://www.shazam.com/track/40628368/unwritten",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/93/fa/e793fade-8420-48ff-314d-42f5f2c89a01/886449065233.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Unwritten by Natasha Bedingfield.",
                    "html": "https://www.shazam.com/snippets/email-share/40628368?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2c/70/00/2c700059-0898-3232-21f6-8f0c1eaa07ce/pr_source.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/40628368"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2c/70/00/2c700059-0898-3232-21f6-8f0c1eaa07ce/pr_source.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/93/fa/e793fade-8420-48ff-314d-42f5f2c89a01/886449065233.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/93/fa/e793fade-8420-48ff-314d-42f5f2c89a01/886449065233.jpg/400x400cc.jpg",
                    "joecolor": "b:010104p:f7cbbas:edc0a8t:c6a296q:be9a87"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1553122660"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4c/71/5a/4c715a20-0c2d-3c86-4172-ed413d67ffcc/mzaf_4983171306115869130.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/unwritten/1553122214?i=1553122660&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/unwritten/1553122214?i=1553122660&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "natasha-bedingfield",
                        "id": "42",
                        "adamid": "17768486"
                    }
                ],
                "url": "https://www.shazam.com/track/40628368/unwritten",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/17768486/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=327233930",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/327233930?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "675031499",
                "title": "greedy",
                "subtitle": "Tate McRae",
                "share": {
                    "subject": "greedy - Tate McRae",
                    "text": "greedy by Tate McRae",
                    "href": "https://www.shazam.com/track/675031499/greedy",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover greedy by Tate McRae.",
                    "html": "https://www.shazam.com/snippets/email-share/675031499?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/74/a1/57/74a15767-5217-7879-4653-77228e1a7875/420699b5-ed1e-4d6d-ade7-7cf50ff93f99_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-12-08T04-31-43.953Z_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/675031499"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/74/a1/57/74a15767-5217-7879-4653-77228e1a7875/420699b5-ed1e-4d6d-ade7-7cf50ff93f99_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-12-08T04-31-43.953Z_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg",
                    "joecolor": "b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1716103127"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e5/57/42/e5574282-62ba-222f-d7e6-632d6563a57e/mzaf_5618521591563245693.plus.aac.p.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/greedy/1716102849?i=1716103127&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/greedy/1716102849?i=1716103127&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "tate-mcrae",
                        "id": "42",
                        "adamid": "1446365464"
                    }
                ],
                "url": "https://www.shazam.com/track/675031499/greedy",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1446365464/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1707092755",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1707092755?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "689892499",
                "title": "Training Season",
                "subtitle": "Dua Lipa",
                "share": {
                    "subject": "Training Season - Dua Lipa",
                    "text": "Training Season by Dua Lipa",
                    "href": "https://www.shazam.com/track/689892499/training-season",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/82/89/15/828915ea-d716-61c4-3de7-ef00c1f800fb/5054197853630.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Training Season by Dua Lipa.",
                    "html": "https://www.shazam.com/snippets/email-share/689892499?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/49/02/c0/4902c03e-916b-542b-1579-b77d94d0134b/bf4e6e03-3339-4a5c-89cd-bee88f31bd28_ami-identity-6a4cdfcea5ca482d082ae1239048d924-2024-01-25T20-22-37.098Z_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/689892499"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/49/02/c0/4902c03e-916b-542b-1579-b77d94d0134b/bf4e6e03-3339-4a5c-89cd-bee88f31bd28_ami-identity-6a4cdfcea5ca482d082ae1239048d924-2024-01-25T20-22-37.098Z_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/82/89/15/828915ea-d716-61c4-3de7-ef00c1f800fb/5054197853630.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/82/89/15/828915ea-d716-61c4-3de7-ef00c1f800fb/5054197853630.jpg/400x400cc.jpg",
                    "joecolor": "b:edefecp:100c0cs:181614t:3c3939q:42413f"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1727526894"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/97/b8/fc/97b8fc75-77b3-9150-0c3e-b616d8037991/mzaf_16017909866296779710.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/training-season/1727526670?i=1727526894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/training-season/1727526670?i=1727526894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "dua-lipa",
                        "id": "42",
                        "adamid": "1031397873"
                    }
                ],
                "url": "https://www.shazam.com/track/689892499/training-season",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1031397873/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1731262552",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1731262552?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "594385994",
                "title": "Soaked",
                "subtitle": "Shy Smith",
                "share": {
                    "subject": "Soaked - Shy Smith",
                    "text": "Soaked by Shy Smith",
                    "href": "https://www.shazam.com/track/594385994/soaked",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/93/df/2493df03-c539-c105-d078-6440863cfe07/196871834537.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Soaked by Shy Smith.",
                    "html": "https://www.shazam.com/snippets/email-share/594385994?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/ab/c1/09/abc10907-dfdb-b758-e98a-4fd7fb20e633/2a49918f-dc73-4f3d-b5f4-8c97f38ac0e3_file_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/594385994"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/ab/c1/09/abc10907-dfdb-b758-e98a-4fd7fb20e633/2a49918f-dc73-4f3d-b5f4-8c97f38ac0e3_file_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/93/df/2493df03-c539-c105-d078-6440863cfe07/196871834537.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/24/93/df/2493df03-c539-c105-d078-6440863cfe07/196871834537.jpg/400x400cc.jpg",
                    "joecolor": "b:20182dp:f3e1e9s:eee3dat:c9b8c3q:c5bbb7"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1729391335"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2f/be/4e/2fbe4e4f-3b6a-7596-5420-6a4dc5f5d44e/mzaf_17902489975726510822.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/soaked/1729390957?i=1729391335&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/soaked/1729390957?i=1729391335&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": true,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "shy-smith",
                        "id": "42",
                        "adamid": "1596682790"
                    }
                ],
                "url": "https://www.shazam.com/track/594385994/soaked",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1596682790/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1732256163",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1732256163?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            },
            {
                "layout": "5",
                "type": "MUSIC",
                "key": "356758171",
                "title": "Unravel Me",
                "subtitle": "Sabrina Claudio",
                "share": {
                    "subject": "Unravel Me - Sabrina Claudio",
                    "text": "Unravel Me by Sabrina Claudio",
                    "href": "https://www.shazam.com/track/356758171/unravel-me",
                    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/8d/91/068d91c9-e1fd-4b60-b9fa-6d1a918dd863/075679885241.jpg/400x400cc.jpg",
                    "twitter": "I used @Shazam to discover Unravel Me by Sabrina Claudio.",
                    "html": "https://www.shazam.com/snippets/email-share/356758171?lang=en-US&country=US",
                    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/e8/38/19/e8381997-b402-6ee9-4608-bb8f090b9de4/8bfb8cc8-e55c-41fe-905d-2b4ba1e0795f_file_cropped.png/800x800cc.jpg",
                    "snapchat": "https://www.shazam.com/partner/sc/track/356758171"
                },
                "images": {
                    "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/e8/38/19/e8381997-b402-6ee9-4608-bb8f090b9de4/8bfb8cc8-e55c-41fe-905d-2b4ba1e0795f_file_cropped.png/800x800cc.jpg",
                    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/8d/91/068d91c9-e1fd-4b60-b9fa-6d1a918dd863/075679885241.jpg/400x400cc.jpg",
                    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/8d/91/068d91c9-e1fd-4b60-b9fa-6d1a918dd863/075679885241.jpg/400x400cc.jpg",
                    "joecolor": "b:a19d9cp:120709s:311d15t:2f2526q:483730"
                },
                "hub": {
                    "type": "APPLEMUSIC",
                    "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                    "actions": [
                        {
                            "name": "apple",
                            "type": "applemusicplay",
                            "id": "1291440788"
                        },
                        {
                            "name": "apple",
                            "type": "uri",
                            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/af/74/33/af743378-6ac7-68f2-727b-ad9fdb42d616/mzaf_661595998171330323.plus.aac.ep.m4a"
                        }
                    ],
                    "options": [
                        {
                            "caption": "OPEN",
                            "actions": [
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "applemusicopen",
                                    "uri": "https://music.apple.com/us/album/unravel-me/1291440782?i=1291440788&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                },
                                {
                                    "name": "hub:applemusic:deeplink",
                                    "type": "uri",
                                    "uri": "https://music.apple.com/us/album/unravel-me/1291440782?i=1291440788&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                }
                            ],
                            "beacondata": {
                                "type": "open",
                                "providername": "applemusic"
                            },
                            "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                            "type": "open",
                            "listcaption": "Open in Apple Music",
                            "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                            "colouroverflowimage": false,
                            "providername": "applemusic"
                        }
                    ],
                    "explicit": false,
                    "displayname": "APPLE MUSIC"
                },
                "artists": [
                    {
                        "alias": "sabrina-claudio",
                        "id": "42",
                        "adamid": "1128029190"
                    }
                ],
                "url": "https://www.shazam.com/track/356758171/unravel-me",
                "highlightsurls": {
                    "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/US/web/1128029190/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1238781622",
                    "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/US/web/highlights/1238781622?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
                },
                "properties": {}
            }
        ]
    }
    ])
  }),
]