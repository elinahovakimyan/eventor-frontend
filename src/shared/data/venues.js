/* eslint-disable */

export const venues = [
  {
    id: 1,
    title: 'Փոքրիկ Էյնշտեյն',
    address: 'Կոմիտաս 40/2',
    mainImage: 'https://static.wixstatic.com/media/f7a67a_1f319a8fa1c749f7924f1d12665268f5~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1082,h_721,al_c,q_90,usm_0.66_1.00_0.01/f7a67a_1f319a8fa1c749f7924f1d12665268f5~mv2_d_4272_2848_s_4_2.webp',
    description: 'Փոքրիկ Էյնշտեյն գիտության թանգարանը Ձեր երեխայի ծննդյան տոնը յուրօրինակ, բովանդակային ու հետաքրքիր նշելու հիանալի տարբերակ է։\n' +
        'Թանգանարում ցուցադրված են ավելի քան 35 ցուցանմուշ ֆիզիկայի տարբեր բնագավառներից, որոնց հետ կապված անցկացվում է էքսկուրսիա, բացատրվում հիմքում ընկած գիտությունը՝ տարիքային խմբին համապատասխան, ստեղծվում ենք կապ, թե տվյալ երևույթը մեր կյանքում որտեղ է հանդիպում, ինչպես ենք կիրառում: \n' +
        'Նախապես ստանալով գիդի ցուցումները՝ էքսկուրսիայից հետո այցելուները անձամբ փորձարկում են բոլոր ցուցանմուշները:\n' +
        '\n' +
        'Ծննդյան տոնի տևողությունը կազմում է 2 ժամից մինչև 3-3.5 ժամ, որն իր մեջ ներառում եմ։\n' +
        '\n' +
        '1. Ինտերակտիվ գիտության թանգարանի ծառայությունը։\n' +
        '2. Սնունդ\n' +
        '3. Տորթի արարողություն​\n' +
        '4. Շոու ծրագիր\n',
    priceRange: '֏֏֏',
    price: 12000,
    currency: 'AMD',
    entranceFee: 3000,
    rooms: 2,
    minPeople: 1,
    maxPeople: '?',
    details: {
      wifi: '?',
      vegetarian: '?',
      parking: '?',
      danceMusic: '?',
      creditCard: '?',
      DJ: '?',
      gamingMachines: false,
      VIProom: false,
      indoor: true,
      outdoor: false,
    },
    foodInfo: {
      packages: [
        {
          name: 'mini',
          includes: 'dwhi dwhi',
          pricePerPerson: 2000,
        }
      ],
      menu: [
        {
          id: 0,
          title: "Տաք ուտեստներ",
          items: [
            {
              name: "Հավի խորոված փայտիկի վրա",
              price: 3000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: 8,
              intendedFor: 4,
            },
            {
              name: "Խոզի խորոված փայտիկի վրա",
              price: 6000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Տապակած կարտոֆիլ",
              price: 1000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: 8,
              intendedFor: 4,
            },
            {
              name: "Շոգեխաշած սունկ",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: null,
              intendedFor: 4,
            },
          ]
        },
        {
          id: 1,
          title: "Աղցաններ",
          items: [
            {
              name: "Մայրաքաղաքային",
              price: 2000,
              description: "Բաղադրության մեջ մտնում է խոզի միս, թթու վարունգ, կանաչ ոլոռ, համեմ։",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Ամառային",
              price: 1400,
              description: "Բաղադրության մեջ մտնում է լոլիկ, վարունգ, պանիր։",
              pieces: null,
              intendedFor: 4,
            },
          ]
        },
        {
          id: 2,
          title: "Խմիչքներ",
          items: [
            {
              name: "Գինի",
              price: 2000,
              description: "Կարասի կիսաչոր գինի",
              pieces: null,
              intendedFor: 1,
            },
          ]
        },
      ]
    }
  },
  {
    id: 2,
    title: 'Good Time Ընտանեկան Ժամանցի Կենտրոն',
    address: 'Հալաբյան 34/3',
    mainImage: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/45779656_2254529951450804_7647215654512099328_n.jpg?_nc_cat=108&_nc_ht=scontent.fevn1-4.fna&oh=3157d1cd9d207fbbec9981c77f63d798&oe=5D9881E4',
    description: 'Անմոռանալի ծննդյան տոնակատարություններ Good Time-ի պարահրապարակում։',
    priceRange: '֏֏֏',
    price: 120000,
    currency: 'AMD',
    entranceFee: 1000,
    rooms: 3,
    minPeople: 25,
    maxPeople: 80,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: false,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    }
  },
  {
    id: 3,
    title: '4teen Cafe and Restaurant',
    address: 'Սայաթ-Նովա 4',
    mainImage: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/50663817_249459439286920_3249539446898425856_o.jpg?_nc_cat=109&_nc_ht=scontent.fevn1-1.fna&oh=3d0a884db29ee449f42cf8467657bfb3&oe=5D644761',
    description: 'Մեղեդի մեղեդի մեղեդի։ Չափազանց հարմար է պարային ծնունդների համար։ Հիմնականում դեռահաս տարիքի երեխաներին է համապատասխանում։',
    priceRange: '֏֏',
    price: 10000,
    currency: 'AMD',
    entranceFee: 5000,
    rooms: 1,
    minPeople: 5,
    maxPeople: 80,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    }
  },
  {
    id: 4,
    title: 'Dino Club',
    address: 'Ձորաղբյուր, 16 թաղամաս',
    mainImage: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/31768648_182129515773322_1361308589049774080_n.jpg?_nc_cat=108&_nc_ht=scontent.fevn1-4.fna&oh=7d62427e2489b396f805551e502d692c&oe=5D6584E8',
    description: 'DINOLAND-ը հրաշքների աշխարհ է ընտանեկան ժամանցի համար, ուր միլիոնավոր դարերի խորքից վերադարձել են Դինոզավրերը: Այստեղ դու կհանդիպես բուսակեր Ստեգոզավրից սկսած մինչև ամենասարսափազդու հանրահայտ գիշատիչ Տիրանոզավրը:',
    priceRange: '֏',
    price: 60000,
    currency: 'AMD',
    entranceFee: 0,
    rooms: 2,
    minPeople: 40,
    maxPeople: 100,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    }
  },
  {
    id: 5,
    title: "Tutti Frutti Kid's Cafe",
    address: 'Սայաթ֊Նովա 13',
    mainImage: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/16387354_1765905207062224_1480749109949869367_n.jpg?_nc_cat=106&_nc_ht=scontent.fevn1-4.fna&oh=d89421bd861c75b6ffcc676e6287ecf6&oe=5D536C20',
    description: 'Դարձնենք տոն և հաճելի հիշողություն Ձեր ամենասովորական օրը: Սիրով հրավիրում ենք Tutti Frutti մանկական սրճարան նշելու Ձեր փոքրիկի ցանկացած միջոցառում՝ ծնունդ, կնունք, ատամհատիկ և այլ հանդիսություններ:\n' +
        '\n' +
        'Tutti Frutti-ն ճանաչված է թարմ և համեղ ուտեստներով, մատչելի գներով և հոգատար վերաբերմունքով: Սրճարանը երաշխավորում է բարձր տրամադրություն և զվարճալի ժամանց:\n' +
        '\n' +
        'Մեզ մետ շոու ծրագիրը, հեքիաթային կերպարները, մուլտ հերոսները և տոնական փուչիկը կազմում են միջոցառման անբաժան մասը: Ձեզ սպասում են բազում անակնկալներ և նվերներ: \n' +
        '\n' +
        'Առանձին գործում է խաղասրահ, որտեղ անհատական հսկողությամբ Ձեր երեխաները կարող են օգտվել ատրակցիոն խաղերից և լաբիրինթից:\n',
    priceRange: '֏֏',
    price: 2300,
    currency: 'AMD',
    entranceFee: 0,
    rooms: 1,
    minPeople: 10,
    maxPeople: 60,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    }
  },
  {
    id: 6,
    title: 'Pioneer Brazilian Restaurant',
    address: 'Բաղրամյան 2',
    mainImage: 'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/28070_414495201957471_1420722805_n.jpg?_nc_cat=107&_nc_ht=scontent.fevn1-4.fna&oh=84ad55b63d1168cc3bff8e8d0fadad05&oe=5D5A9FCF',
    description: 'Ադրենալինի սիրահար երեխաները կարող են գալ այստեղ՝ տեսնելու թե ինչքան ցուրտ կարող է լինել Երկիր մոլորակը։',
    priceRange: '֏',
    price: 10000,
    currency: 'AMD',
    entranceFee: 10000,
    rooms: 1,
    minPeople: 40,
    maxPeople: 100,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    }
  },
];
