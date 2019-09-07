/* eslint-disable */
const cartoonHeroes = [
  {
    id: 1,
    title: 'Տրանսֆորմեր Բամբլբի',
    duration: 0.5,
    price: 25000,
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/bamblbi_3.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/bamblbi_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/bamblbi_2.jpg',
    ],
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
  },
  {
    id: 2,
    title: 'Խաղավար Դավիթ',
    duration: 1,
    price: 12000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/davit_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/davit_2.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/davit_3.jpg',
    ],
  },
  {
    id: 4,
    title: 'Պանդա',
    duration: 1,
    price: 10000,
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/panda_2.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/panda_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/panda_3.jpg',
    ],
    providerName: 'Gayluk․am',
    priceRange: '֏֏',
  },
  {
    id: 10,
    title: 'Սպիտակ Արջ',
    duration: 1,
    price: 40000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/spitak_arj_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/spitak_arj_2.jpg',
    ],
  },
  {
    id: 14,
    title: 'Դինո',
    duration: 1,
    mainImage: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/42261190_2152560668291623_8172046377317040128_o.jpg?_nc_cat=108&_nc_ht=scontent.fevn1-4.fna&oh=4ea09e552d48490ec1f2e9b71e78ab87&oe=5D94ADCE',
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/dino_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/dino_2.jpg',
    ],
  },
  {
    id: 9,
    title: 'Կրիա',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/kria_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/kria_2.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/kria_3.jpg',
    ],
  },
  {
    id: 6,
    title: 'Օպտիմուս Պրայմ',
    duration: 0.5,
    price: 25000,
    providerName: 'Gayluk.am',
    carouselImgs: [
      'https://live.staticflickr.com/65535/47978010242_096d580bb6_k.jpg',
      'https://live.staticflickr.com/65535/47978085111_ca30e2890c_k.jpg'
    ],
    priceRange: '֏֏',
  },
  {
    id: 16,
    title: 'Մինիոն',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/29594490_2034482650099426_5950582320025073346_n.jpg?_nc_cat=110&_nc_ht=scontent.fevn1-1.fna&oh=cc73b09e5a21ad876d24ddbcd6eda08c&oe=5D8F51F6',
    ],
  },
  {
    id: 18,
    title: 'Խաղավար Շուշան',
    duration: 1,
    price: 7000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/shushanik_1.jpg',
      'https://eventor-services.s3.eu-west-2.amazonaws.com/shushanik_2.jpg',
    ],
  },
  {
    id: 7,
    title: 'Միկի Մաուս',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    carouselImgs: [
      'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/57077638_2264295157118173_9006002698327162880_n.jpg?_nc_cat=109&_nc_ht=scontent.fevn1-1.fna&oh=f66fc2ce1e2e3088dcb081795d810dca&oe=5D9248FA',
    ],
    priceRange: '֏֏',
  },
  {
    id: 8,
    title: 'Մինի Մաուս',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    carouselImgs: [
      'https://live.staticflickr.com/65535/47978158381_4084ec5eac_b.jpg',
    ],
    priceRange: '֏֏',
  },
  {
    id: 5,
    title: 'Սպիտակաձյունիկ Խաղավար',
    duration: 1,
    price: 6000,
    carouselImgs: [
      'https://eventor-services.s3.eu-west-2.amazonaws.com/spitakadzyunik_1.jpg',
    ],
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
  },
  {
    id: 11,
    title: 'Պարեկ Շունիկ',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk',
    priceRange: '֏֏',
    carouselImgs: [
      'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/27973087_2016102531937438_949893962218463143_n.jpg?_nc_cat=100&_nc_ht=scontent.fevn1-2.fna&oh=f37d9a111b68159cb28d0c846da8144c&oe=5D90F398',
    ],
  },
  {
    id: 12,
    title: 'Սարդ֊Մարդ',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk․am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://scontent.fevn1-3.fna.fbcdn.net/v/t31.0-8/28699106_2024951114385913_3106791073345730684_o.jpg?_nc_cat=111&_nc_ht=scontent.fevn1-3.fna&oh=d42ccdd0a83cbf4a2add9fba2aab0f96&oe=5D897160',
    ],
  },
  {
    id: 13,
    title: 'Արքայադուստր Էլզա',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://live.staticflickr.com/65535/47978202068_82eda952de_b.jpg'
    ],
  },
  {
    id: 15,
    title: 'Ատամիկ',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/48371932_2193580384189651_2883807163279474688_n.jpg?_nc_cat=100&_nc_ht=scontent.fevn1-2.fna&oh=8a8ab648f5cdc8f314e181f8b7d42057&oe=5D9184EF',
    ],
  },
  {
    id: 17,
    title: 'Կարմիր Ռենջեր',
    duration: 1,
    price: 6000,
    providerName: 'Gayluk.am',
    priceRange: '֏֏',
    carouselImgs: [
      'https://live.staticflickr.com/65535/47978109337_e2fe9863a2_b.jpg',
    ],
  },
]

export default cartoonHeroes;