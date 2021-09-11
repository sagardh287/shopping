import image1 from '../selldata/headphone/ptronlite.jpg'
import image2 from '../selldata/headphone/zebronics.jpg'
import image3 from '../selldata/headphone/lapcare.jpg'
import image4 from '../selldata/headphone/ptron.jpg'
import image5 from '../selldata/headphone/boat.jpg'
import image6 from '../selldata/headphone/cosmicgs430.jpg'
import image7 from '../selldata/headphone/boultbassbudsq2.jpg'
import image8 from '../selldata/headphone/boult.jpg'
import image9 from '../selldata/headphone/zebronicszeb.jpg'
import image10 from '../selldata/headphone/boatbasehead.jpg'
import image11 from '../selldata/headphone/limeshot.jpg'
// import image4 from '../selldata/soundbox.jpeg'
const product = [
    {
        id: "1",
        name: "pTron HBE",
        image: image1,
        Link:"https://www.amazon.in/Pride-Lite-Headphones-Cancelling-Tangle-Free/dp/B08SFFP19B?dchild=1&keywords=headphones&qid=1631351570&sr=8-20&linkCode=ll1&tag=109lesagya-21&linkId=b837b6f2e0c8e7e60cdb08053858f357&ref_=as_li_ss_tl",
        price:"below 200rs"
    }, 
    {
        id: "2",
        name: "Zebronics",
        image: image2,
        Link:"https://www.amazon.in/ZEBRONICS-Connectors-Adjustable-Indicators-Multifunction/dp/B08TJ8N5RG?dchild=1&keywords=headphones&qid=1631351570&sr=8-20&linkCode=ll1&tag=109lesagya-21&linkId=00a328c5f6891505c88fab9c2cd363db&ref_=as_li_ss_tl",
        price:"below 500rs"
    },
    {
        id: "3",
        name: "lapcare",
        image: image3,
        Link:"https://www.amazon.in/LAPCARE-Headset-LWS-004-Headphone-Flexible/dp/B08D1HDV33?dchild=1&keywords=headphones&qid=1631351570&smid=A14CZOWI0VEHLG&sr=8-18-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExME5HWEVTVjdTTzQwJmVuY3J5cHRlZElkPUEwODIzMjY3MkxFNUw3Q0lMM0ZIMCZlbmNyeXB0ZWRBZElkPUExMDQxMzMyMUdUQTNKNEpPRkVEMiZ3aWRnZXROYW1lPXNwX2F0Zl9uZXh0JmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=109lesagya-21&linkId=d86c64d16dc652779bcf95c0fc3ba697&ref_=as_li_ss_tl",
        price:"below 500rs"
    },
    {
        id: "4",
        name: "pTron lite",
        image: image4,
        Link:"https://www.amazon.in/Studio-Lite-Headphones-Adjustable-Tangle-Free/dp/B092697NCZ?dchild=1&keywords=headphones&qid=1631351570&sr=8-21&linkCode=ll1&tag=109lesagya-21&linkId=555bd4240a8925f2441a5f014591568d&ref_=as_li_ss_tl",
        price:"below 600rs"
    },
    {
        id: "5",
        name: "boAt 900",
        image: image5,
        Link:"https://www.amazon.in/Heads-900-Wired-Headphones-White/dp/B078W65FJ7?dchild=1&keywords=headphones&qid=1631350813&sr=8-20&linkCode=ll1&tag=109lesagya-21&linkId=155d42bee0ec7a1dda2b06ebe26fa721&ref_=as_li_ss_tl",
        price:"below 800rs"
    },
    {
        id: "6",
        name: "Cosmic Byte",
        image: image6,
        Link:"https://www.amazon.in/Cosmic-Byte-GS430-Microphone-Black/dp/B0859KTNZ8?dchild=1&keywords=headphones&qid=1631351898&sr=8-13&linkCode=ll1&tag=109lesagya-21&linkId=59bbc40402356f4e1b1351380707e0d2&ref_=as_li_ss_tl",
        price:"below 850rs"
    },
    {
        id: "7",
        name: "boultbass",
        image: image7,
        Link:"https://www.amazon.in/Boult-Audio-Wired-Lightweight-Comfortable/dp/B08FY4FG5X?dchild=1&keywords=headphones&qid=1631351898&sr=8-8&linkCode=ll1&tag=109lesagya-21&linkId=d4eb19b68f6888f7f971e1278045674c&ref_=as_li_ss_tl",
        price:"below 500rs"
    },
    {
        id: "8",
        name: "boult",
        image: image8,
        Link:"https://www.amazon.in/Boult-Audio-Flex-Headphones-Cancellation/dp/B07LG59HLT?dchild=1&keywords=headphones&qid=1631351898&smid=A14CZOWI0VEHLG&sr=8-11-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySlBPUzhKVDNISDFJJmVuY3J5cHRlZElkPUEwNDA2MjIxMVlCNElGWUlPUkhJQyZlbmNyeXB0ZWRBZElkPUEwNjQ4MjkwVFBQWTRaQTVCNFlTJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=109lesagya-21&linkId=30fb580196ed38f114897361cba738dc&ref_=as_li_ss_tl",
        price:"below 1150rs"
    },
    {
        id: "9",
        name: "Zebronics ",
        image: image9,
        Link:"https://www.amazon.in/Zebronics-Zeb-Symphony-Bluetooth-Earphone-Assistant/dp/B07TB9KGPR?dchild=1&keywords=headphones&qid=1631353157&rnid=3576079031&s=electronics&sr=1-17&linkCode=ll1&tag=109lesagya-21&linkId=2c0d5aa6417679dc1a71daf746242590&ref_=as_li_ss_tl",
        price:"below 600rs"
    },
    {
        id: "10",
        name: "boat base" ,
        image: image10,
        Link:"https://www.amazon.in/boAt-BassHeads-100-Headphones-Black/dp/B071Z8M4KX?dchild=1&keywords=headphones&qid=1631353157&rnid=3576079031&s=electronics&sr=1-10&linkCode=ll1&tag=109lesagya-21&linkId=096181d366ff164821b620a2ec814b35&ref_=as_li_ss_tl",
        price:"below 400rs"
    },
    {
        id: "11",
        name: "limeshot",
        image: image11,
        Link:"https://www.amazon.in/LIMESHOT-Neckband-Sweatproof-Headphones-Microphone/dp/B092R5GNP9?dchild=1&keywords=headphones&qid=1631353157&rnid=3576079031&s=electronics&sr=1-21&linkCode=ll1&tag=109lesagya-21&linkId=7db152b449d0b49a972d180a7c5f3cfd&ref_=as_li_ss_tl",
        price:"below 400rs"
    },

]

export default product;