/* eslint-disable */
const venues = [
  {
    id: 1,
    title: 'BeeForce VR Cafe',
    address: 'Արամի 4/3',
    description: 'Վիրտուալ իրականության նոր հասցե`սուր զգացողությունների և ակտիվ ժամանցի սիրահարների համար։ Այստեղ կարող եք խաղալ բազում հետաքրքիր խաղեր՝ զգալով վիրտուալ աշխարհի հզորությունը։ BeeForce VR Cafe-ն աշխատանքային ժամերն են 10:00-00:00։ Գինը որոշվում է ըստ խաղի ժամանակի. 15րոպե - 2000դրամ, 30րոպե - 3000դրամ, 1ժամ - 5000դրամ։',
    priceRange: '֏֏',
    price: null,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/beeforce_1.jpg',      
      '/assets/images/services/venues/beeforce_2.jpg',      
      '/assets/images/services/venues/beeforce_3.jpg',      
      '/assets/images/services/venues/beeforce_4.jpg',      
      '/assets/images/services/venues/beeforce_5.jpg',      
      '/assets/images/services/venues/beeforce_6.jpg',      
      '/assets/images/services/venues/beeforce_7.jpg',      
      '/assets/images/services/venues/beeforce_8.jpg',      
    ],
    rooms: 1,
    minPeople: 1,
    maxPeople: 15,
    details: {
      wifi: true,
      vegetarian: true,
      parking: false,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: false,
    }
  },
  {
    id: 3,
    title: '4teen Cafe and Restaurant',
    address: 'Չարենց 22',
    description: '4TEEN-ը եկել է նոր ու հետաքրքիր ձևաչափով, անչափ համեղ ուտեստներով ու որ ամենակարևորն է՝ եկել է Ձեր յուրաքանչյուր օրը տոն դարձնելու առաքելությամբ։ 4TEEN ռեստորանը հրաշալի վայր է Ձեր տոնակատարությունները անմոռանալի դարձնելու համար։ Ձեր միջոցառումները կլինեն տարբերվող, հետաքրքիր ու զվարճալի՝ համեղ ուտեստների, հրաշալի մթնոլորտի և զվարճալի խաղերի շնորհիվ։',
    priceRange: '֏֏֏',
    price: 10000,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/4teen_1.jpg',      
      '/assets/images/services/venues/4teen_2.jpg',      
      '/assets/images/services/venues/4teen_3.jpg',      
      '/assets/images/services/venues/4teen_4.jpg',      
      '/assets/images/services/venues/4teen_5.jpg',      
      '/assets/images/services/venues/4teen_6.jpg',      
      '/assets/images/services/venues/4teen_7.jpg',      
      '/assets/images/services/venues/4teen_8.jpg',      
    ],
    entranceFee: 5000,
    rooms: 2,
    minPeople: 1,
    maxPeople: 120,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: true,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: false,
    }
  },
  {
    id: 9,
    title: 'Դրախտ ռեստորան',
    address: 'Աճառյան փ․, 1/1',
    description: '«Դրախտ» ռեստորանն իր հյուրընկալ դռներն է բացում բոլոր նրանց համար, ովքեր ուզում են կտրվել աղմկոտ քաղաքի առօրյաից, վայելել բնությունը և մի լավ ուրախանալ հարազատների ու ընկերների հետ։ «Դրախտ»-ը ավելի քան 25 տարվա պատմություն ունի և միշտ եղել է երևանցիների ամենասիրելի վայրերից մեկը։ «Դրախտ»-ում առաջարկում են համեղ խոհանոց, հիասքանչ մթնոլորտ, բարձրակարգ սպասարկում, կենդանի երաժշտություն և խելամիտ գներ։',
    priceRange: '֏֏',
    price: null,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/draxt_1.jpg',      
      '/assets/images/services/venues/draxt_2.jpg',      
      '/assets/images/services/venues/draxt_3.jpg',      
      '/assets/images/services/venues/draxt_4.jpg',      
    ],
    entranceFee: null,
    rooms: 7,
    minPeople: 1,
    maxPeople: 250,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: false,
      creditCard: true,
      DJ: true,
      gamingMachines: false,
      VIProom: true,
      indoor: true,
      outdoor: true,
    },
  },
  {
    id: 8,
    title: 'Թանգարան Կոմպլեքս',
    address: 'Արգավանդ,.գ Ղուկասավան',
    description: 'Եթե ցանկանում եք ՁԵր երեխայի ծնունդը նշել բաց երկնքի տակ ,ապա Թանգարան Կոմպլեքսը հիանալի լուծում է։ Հաճելի միջավայրը, բնությունը, պարզ ու մաքուր օդը՝ քաղաքի աղմուկից հեռու այս վայրը դարձնում են ավելի սիրելի ու յուրահատուկ։',
    priceRange: '֏֏',
    price: 4000,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/tangaran_1.jpg',
      '/assets/images/services/venues/tangaran_2.jpg',
      '/assets/images/services/venues/tangaran_3.jpg',
      '/assets/images/services/venues/tangaran_4.jpg',
      '/assets/images/services/venues/tangaran_5.jpg'
    ],
    entranceFee: null,
    rooms: 1,
    minPeople: 1,
    maxPeople: 300,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: false,
      creditCard: false,
      DJ: false,
      gamingMachines: false,
      VIProom: false,
      indoor: false,
      outdoor: true,
    }
   },
   {
    id: 7,
    title: 'El Garden Kids Zone',
    address: 'Ծիծեռնակաբերդի 8, Երևան, Հայաստան',
    description: 'Եթե սիրում եք բնությունը և նախընտրում եք բնության գրկում վայելել համեղ ճաշատեսակներ ու խմիչքներ, ապա EL Garden-ը Ձեր ցանկացած վայրն է:' + '&#10;' + 'Կանաչապատ տարածք, թափանցիկ վրաններ,ծառերից կախված ճոճանակներ, սրճարանի ողջ տարածքով ազատ շրջող բադեր ու նապաստակներ,բարեհամբույր սպասարկում, հարուստ ճաշացանկ և, իհարկե, մաքուր օդ։ Ահա այն հակիրճ ցանկը, որը կարող է բնութագրել EL Garden-ը։ Անվանումն արդեն հուշում է իր գաղափարի մասին, սակայն հաճելիորեն կզարմանաք, երբ ինքներդ մոտենաք այգուն։ Այն գեղեցիկ է տարվա բոլոր եղանակներին։ Հատուկ երեխաների համար առանձնացված Kids Zone֊ում կա փոքրիկ ֆերմա և խաղահրապարակ, որտեղ կարող եք կազմակերպել Ձեր երեխայի ամենակարևոր միջոցառումները։ Kids Zone-ում Ժամը 7֊ից սկսվում է ակտիվ և ուրախ շոու ծրագիրը։ 1.5 ժամ տևողությամբ շոու ծրագիրը իր մեջ ներառում է կարաոկե, ամենաընկերասեր և պրոֆեսիոնալ խաղավարների հետ պարային և թիմային խաղեր, ինչպես նաև թեժ դիսկո որակյալ և ժամանակակից երաժշտության ներքո։ Մինչև 3 տարեկան երեխաներին հոգ կտանեն տարածքում աշխատող հոգատար դայակները, ովքեր կզբոսնեն տարածքում և կհետևեն Ձեր երեխային։ Այս ծառայության մեկ ժամի արժեքը 1000 դրամ է։' + '&#10;' + 'EL Garden-ը այլընտրանքային ժամանցի վայր է Երևանում, որը գտնվում է Համալիրի ետնամասում։ Եթե զբոսնելու ցանկություն ունեք, ապա կարող եք բարձրանալ ոտքով, իսկ եթե նախընտրում եք մեքենայով բարձրանալ, ապա մոտեցեք Ծիծեռնակաբերդի խճուղու կողմից:' + '&#10;' +'EL Garden-ն ունի բավական մեծ ավտոկայանատեղի, ինչի շնորհիվ Դուք կարող եք չմտահոգվել Ձեր մեքենայի անվտանգության համար:',
    priceRange: '֏֏Դ',
    price: 5000,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/elGarden_1.jpg',
      '/assets/images/services/venues/elGarden_2.jpg',
      '/assets/images/services/venues/elGarden_3.jpg',
      '/assets/images/services/venues/elGarden_4.jpg',
      '/assets/images/services/venues/elGarden_5.jpg',
      '/assets/images/services/venues/elGarden_6.jpg'
    ],
    entranceFee: 5000,
    rooms: 1,
    minPeople: 1,
    maxPeople: 55,
    details: {
      wifi: false,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: true,
      gamingMachines: false,
      VIProom: false,
      indoor: true,
      outdoor: true,
    }
  },
  {
    id: 2,
    title: 'Good Time Ընտանեկան Ժամանցի Կենտրոն',
    address: 'Հալաբյան 34/3',
    description: 'Good Time ընտանեկան ժամանցի կենտրոնում Ձեր ընտանիքի յուրաքանչյուր անդամ՝ անկախ տարիքից, այնտեղ կգտնի իրեն հետաքրքիր ժամանցի անկյուն: Կենտրոնում գործում է մանկական սրճարան և մինչև 150 անձի համար նախատեսված միջոցառումների սրահ: Սրահում դուք կարող եք անցկացնել Ձեր և Ձեր փոքրիկի ծննդյան տարեդարձը, կնունքը, ատամհատիկը՝ նշել ցանկացած միջոցառում: Սրահի պարահրապարակում կազմակերպվում են շոու-ծրագրեր, որոնց մասնակցում են կրկեսային արտիստներ, ակրոբատներ, ծաղրածուներ, երգ , պար, բազում ինտերակտիվ խաղեր, որոնց մասնակցում են ինչպես փոքրիկները, այնպես էլ նրանց ծնողները: Կենտրոնը բաղկացած է 5 հարկից, որտեղ տեղակայված են բազմաթիվ խաղեր և ատրակցիոններ ',
    carouselImgs: [
      '/assets/images/services/venues/goodTime_1.jpg',
      '/assets/images/services/venues/goodTime_2.jpg',
      '/assets/images/services/venues/goodTime_3.jpg',
      '/assets/images/services/venues/goodTime_4.jpg',
      '/assets/images/services/venues/goodTime_5.jpg'
    ],
    priceRange: '֏֏',
    price: 4000,
    currency: 'AMD',
    entranceFee: 1000,
    rooms: 1,
    minPeople: 1,
    maxPeople: 150,
    details: {
      wifi: true,
      vegetarian: true,
      parking: false,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: true,
      VIProom: false,
      indoor: true,
      outdoor: false,
    },
    foodInfo: {
      packages: [
        {
          name: 'Մինի',
          foodIncluded: 'Փայտիկի վրա հավի խորոված, մայրաքաղաքային աղցան, այլ աղցան, ջրեղեն',
          showIncluded: null,
          pricePerPerson: 2000,
        },
        {
          name: 'Ստանդարդ',
          foodIncluded: 'Փայտիկի վրա խոզի խորոված, մայրաքաղաքային աղցան, ամառային աղցան, ջրեղեն',
          showIncluded: '1 ժամանոց ուրախ խաղային ծրագիր',
          pricePerPerson: 3500,
        },
      ],
      menu: [
        {
          id: 0,
          title: "Տաք ուտեստներ",
          items: [
            {
              name: "Տապակած խոզի միս կարտոֆիլով",
              price: 1500,
              description: "170 գ",
              pieces: 8,
              intendedFor: 4,
            },
            {
              name: "Ճուտ",
              price: 2000,
              description: "1 հատ",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Հավի լանգետ",
              price: 850,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: 8,
              intendedFor: 4,
            },
            {
              name: "Տապակած հավ",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Խոզի խորոված (նախնական պատվեր)",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Քուֆթա/1 գնդիկ (նախնական պատվեր)",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Խոզի մսից ռուլետ (նախնական պատվեր)",
              price: 2000,
              description: "Սունկ, գազար, բիբար",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Հավի ռուլետ (նախնական պատվեր)",
              price: 2000,
              description: "Բաստուրմա, ձու, մայոնեզ",
              pieces: null,
              intendedFor: 4,
            },
            {
              name: "Խոզի միսը փայտիկների վրա",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: 3,
              intendedFor: 4,
            },
            {
              name: "Տապակած Հավի կրծքամիս փայտիկների վրա",
              price: 2000,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              pieces: 3,
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
    },
    decorations: [
      {
        id: 1,
        title: 'Քենդի Բար',
        description: 'Էլ ի՜նչ ծնունդ, առանց քենդիբարի։ Մինիոններ, արքայադստրեր, լեգոներ, թե՞ ջունգլիներ։ Ընտրեք Ձեր սիրելի թեմատիկան և պատվիրեք քենդիբարի ձևավորումը Good Time-ում։',
        providerName: 'Good Time',
        startingPrice: 15000,
        priceRange: '֏֏',
        carouselImgs: [
          'https://live.staticflickr.com/65535/48029881148_cb202777b6_b.jpg',
          'https://live.staticflickr.com/65535/48029881208_b22e4f919a_b.jpg',
          'https://live.staticflickr.com/65535/48029945822_6f7b495071_b.jpg',
          'https://live.staticflickr.com/65535/48029881393_2a1c6aa7dc_b.jpg',
          'https://live.staticflickr.com/65535/48029839776_27ef6b1bd3_b.jpg'
        ],
      }
    ]
  },
  {
    id: 11,
    title: 'Փոքրիկ Էյնշտեյն',
    address: 'Կոմիտաս 40/2',
    description: 'Փոքրիկ Էյնշտեյն գիտության թանգարանը Ձեր երեխայի ծննդյան տոնը յուրօրինակ, բովանդակային ու հետաքրքիր նշելու հիանալի տարբերակ է։\n' +
        'Թանգանարում ցուցադրված են ավելի քան 35 ցուցանմուշ ֆիզիկայի տարբեր բնագավառներից, որոնց հետ կապված անցկացվում է էքսկուրսիա, բացատրվում հիմքում ընկած գիտությունը՝ տարիքային խմբին համապատասխան, ստեղծվում ենք կապ, թե տվյալ երևույթը մեր կյանքում որտեղ է հանդիպում, ինչպես ենք կիրառում: \n' +
        'Նախապես ստանալով գիդի ցուցումները՝ էքսկուրսիայից հետո այցելուները անձամբ փորձարկում են բոլոր ցուցանմուշները:\n' +
        '\n' +
        'Ծննդյան տոնի տևողությունը կազմում է 2 ժամից մինչև 3-3.5 ժամ, որն իր մեջ ներառում է.\n' +
        '\n' +
        '1. Ինտերակտիվ գիտության թանգարանի ծառայությունը։\n' +
        '2. Սնունդ\n' +
        '3. Տորթի արարողություն​\n' +
        '4. Շոու ծրագիր\n',
    priceRange: '֏֏',
    price: null,
    currency: 'AMD',
    entranceFee: 3000,
    carouselImgs: [
      '/assets/images/services/venues/einstein_1.jpg',
      '/assets/images/services/venues/einstein_2.jpg',
      '/assets/images/services/venues/einstein_3.jpg',
    ],
    rooms: 1,
    minPeople: 1,
    maxPeople: 30,
    details: {
      wifi: false,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: false,
      DJ: false,
      gamingMachines: false,
      VIProom: false,
      indoor: true,
      outdoor: false,
    },
    foodInfo: {
      packages: [
        {
          name: 'Մինի',
          foodIncluded: 'Փայտիկի վրա հավի խորոված, մայրաքաղաքային աղցան, այլ աղցան, ջրեղեն',
          showIncluded: null,
          pricePerPerson: 2000,
        },
        {
          name: 'Ստանդարդ',
          foodIncluded: 'Փայտիկի վրա խոզի խորոված, մայրաքաղաքային աղցան, ամառային աղցան, ջրեղեն',
          showIncluded: '1 ժամանոց ուրախ խաղային ծրագիր',
          pricePerPerson: 3500,
        },
      ],
      menu: [
        {
          id: 0,
          title: "Տաք ուտեստներ",
          items: [
            {
              name: "Տապակած խոզի միս կարտոֆիլով",
              price: 1500,
              description: "170 գ"
            },
            {
              name: "Ճուտ",
              price: 2000,
              description: "1 հատ"
            },
            {
              name: "Հավի լանգետ",
              price: 850,
              description: "90 գ"
            },
            {
              name: "Տապակած հավ",
              price: 2800,
              description: "700 գ"
            },
            {
              name: "Խոզի խորոված (նախնական պատվեր)",
              price: 3500,
              description: "450 գ"
            },
            {
              name: "Քուֆթա/1 գնդիկ (նախնական պատվեր)",
              price: 3200,
              description: "500 գ"
            },
            {
              name: "Խոզի մսից ռուլետ (նախնական պատվեր)",
              price: 1500,
              description: "Սունկ, գազար, բիբար, 110գ"
            },
            {
              name: "Տավարի մսից ռուլետ (նախնական պատվեր)",
              price: 1300,
              description: "Սունկ, գազար, բիբար, 110գ"
            },
            {
              name: "Հավի ռուլետ (նախնական պատվեր)",
              price: 1700,
              description: "Բաստուրմա, ձու, մայոնեզ, 220 գ"
            },
            {
              name: "Խոզի միսը փայտիկների վրա",
              price: 1200,
              description: "3 կտոր, 100 գ"
            },
            {
              name: "Տապակած հավի կրծքամիս փայտիկների վրա",
              price: 850,
              description: "3 կտոր, 90 գ"
            },
            {
              name: "Տապակած հավի կրծքամիս փայտիկների վրա",
              price: 600,
              description: "2 կտոր, 60 գ"
            },
            {
              name: "Հավի քյաբաբ",
              price: 700,
              description: "100 գ"
            },
            {
              name: "Տավարի քյաբաբ",
              price: 800,
              description: "100գ"
            },
            {
              name: "Չաշաշուլի",
              price: 1200,
              description: "150 գ"
            },
            {
              name: "Տավարի միս սպիտակ սոուսի մեջ",
              price: 1200,
              description: "150 գ"
            },
            {
              name: "Տավարի միս և սունկ սպիտակ սոուսի մեջ",
              price: 1300,
              description: "150 գ"
            },
            {
              name: "Հավի կրծքամիս քարիով",
              price: 1100,
              description: "150 գ"
            },
            {
              name: "Հավի կրծքամիս սպիտակ սոուսի մեջ",
              price: 1100,
              description: "125 գ"
            },
            {
              name: "Հավի կրծքամիս և սունկ սպիտակ սոուսի մեջ",
              price: 1300,
              description: "150 գ"
            },
            {
              name: "Հավի կրծքամիս և սունկ կարմիր սոուսի մեջ",
              price: 1200,
              description: "135 գ"
            },
            {
              name: "Խոզի միս հնդկական ընկույզով կարմիր կիսաքաղցր սոուսի մեջ",
              price: 1300,
              description: "150 գ"
            },
            {
              name: "Կախասունկ տապակած ձվով",
              price: 800,
              description: "150 գ"
            },
          ]
        },
        {
          id: 1,
          title: "Խավարտներ",
          items: [
            {
              name: "Հնդկաձավար",
              price: 400,
              description: "150 գ"
            },
            {
              name: "Դեղին բրինձ շաֆրանով",
              price: 400,
              description: "140 գ"
            },
            {
              name: "Տապակած կանաչ լոբի",
              price: 1000,
              description: "120 գ"
            },
            {
              name: "Պաստա մսով սոուսի մեջ",
              price: 800,
              description: "180 գ"
            },
            {
              name: "Խորոված բանջարեղեն",
              price: 1000,
              description: "Սմբուկ, բիբար, լոլիկ, 200 գ"
            },
            {
              name: "Սնկով հաճարով փլավ",
              price: 600,
              description: "150 գ"
            },
            {
              name: "Տապակած դդմիկ սամիթով",
              price: 1000,
              description: "125 գ"
            },
            {
              name: "Տապակած կարտոֆիլ սամիթով",
              price: 500,
              description: "200 գ"
            },
            {
              name: "Պյուրե",
              price: 350,
              description: "150 գ"
            },
            {
              name: "Խորոված կարտոֆիլ (պլեճ)",
              price: 500,
              description: "250 գ"
            },
            {
              name: "Ֆրի փոքր",
              price: 550,
              description: "100 գ"
            },
            {
              name: "Ֆրի մեծ",
              price: 750,
              description: "180 գ"
            },
            {
              name: "Տապակած ծաղկակաղամբ ձվով",
              price: 500,
              description: "200 գ"
            },
            {
              name: "Ձվածեղ",
              price: 700,
              description: "2 ձու"
            },
            {
              name: "Ձվածեղ լոլիկով",
              price: 1000,
              description: "2 ձու"
            },
          ]
        },
        {
          id: 2,
          title: "Աղցաններ",
          items: [
            {
              name: "Աշնանային",
              price: 2200,
              description: "Հավի կրծքամիս, սունկ մարինացված, եգիպտացորեն, 300 գ"
            },
            {
              name: "Գարնանային",
              price: 2600,
              description: "Սունկ, տավարի միս, գազար, 300 գ"
            },
            {
              name: "Վենեգրետ",
              price: 1000,
              description: "300 գ"
            },
            {
              name: "Հունական",
              price: 1800,
              description: "400 գ"
            },
            {
              name: "Ջամայկա",
              price: 2400,
              description: "Հավի կրծքամիս, պանիր, նարինջ, 330 գ"
            },
            {
              name: "Կաղամբով",
              price: 800,
              description: "230 գ"
            },
            {
              name: "Ամառային",
              price: 1200,
              description: "400 գ"
            },
            {
              name: "Գազարով",
              price: 1000,
              description: "Մայոնեզ, ընկույզ, 300 գ"
            },
            {
              name: "Սմբուկով ու բիբարով",
              price: 1800,
              description: "Մայոնեզ, ընկույզ, 300 գ"
            },
            {
              name: "Թարմություն",
              price: 800,
              description: "Կաղամբ, գազար, բազուկ, խնձոր, 230 գ"
            },
            {
              name: "Բազուկով",
              price: 1000,
              description: "Մայոնեզ, ընկույզ, 300 գ"
            },
            {
              name: "Սեզոնային",
              price: 1200,
              description: "Վարունգ, բիբար, եգիպտացորեն, գազար, 250 գ"
            },
            {
              name: "Մայրաքաղաքային",
              price: 1600,
              description: "Հավով, 300 գ"
            },
            {
              name: "Մայրաքաղաքային",
              price: 2000,
              description: "Տվարի մսով, 300 գ"
            },
            {
              name: "Թաբուլե",
              price: 1400,
              description: "300 գ"
            },
            {
              name: "Կեսար",
              price: 2000,
              description: "250 գ"
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
    id: 5,
    title: 'Baby Club Մանկական սրճարան',
    address: 'Դավթաշեն, 2-րդ թաղամաս, 45/6 շենք',
    description: '«Բեյբի Քլաբ» մանկական ժամանցի կենտրոնն առանձնանում է իր տարբերվող ինտերիերով, էքստերիերով և դիզայնով: «Բեյբի Քլաբ»-ն ունի երեք առանձնացված սրահներ՝ մեկ ընդհանուր և երկու VIP: Ընդհանուր սրահում յուրաքանչյուր բալիկ կգտնի իր նախասիրություններին հատուկ անկյուն: Ամենաբազմազան ու միանգամայն անվտանգ ատրակցիոնները, ինչպես նաև Ձեր փոքրիկների սիրելի բատուտը, տեղ են գտել սրճարանի ամենատաքուկ անկյունում: Ձեր փոքրիկը ցանկանում է չտարբերվե՞լ մեծահասակներից, ուրեմն հենց իր համար սրճարանում առանձնացված է յուրահատուկ կոկտեյլների ու անզուգական ըմպելիքների անկյունը: Այստեղ գիտեն նաև, թե ինչպես հաճոյանալ ամենաքմահաճ բալիկի քիմքին: Ճաշացանկում տեղ գտած կերակրատեսակները խոստանում են զարմացնել ու բավարարել յուրաքանչյուր փոքրիկ հաճախորդի: VIP սրահներից մեկում իրենց առիթները կարող են նշել նաև 15 - ից բարձր տարիքի աղջիկները, ովքեր սիրում են տարբերվել իրենց ընտրությամբ: Երկրորդ  VIP սրահը նախատեսված է բոլոր նրանց համար, ովքեր կնախընտրեն առանձին վայելել իրենց կարևորագույն օրը` վստահ լինելով, որ այն կվերածվի իսկական հեքիաթի: Անզուգական լուսային ու ձայնային էֆեկտներ, շոու-ներկայացումներ` բեմադրված հատուկ Ձեր փոքրիկի համար՝ իր նախասիրություններին համահունչ: Ըստ ցանկության, Ձեր փոքրիկի օրը իսկական տոնի կվերածեն նաև հատուկ նրա համար հրավիրված հայտնի երգիչ երգչուհինեն ու թատերական խմբերը:',
    priceRange: '֏֏',
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/babyclub_1.jpg',
      '/assets/images/services/venues/babyclub_2.jpg',
      '/assets/images/services/venues/babyclub_3.jpg',
      '/assets/images/services/venues/babyclub_4.jpg',
      '/assets/images/services/venues/babyclub_5.jpg',
    ],
    entranceFee: null,
    rooms: 3,
    price: 3500,
    minPeople: 10,
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
      outdoor: false,
    }
  },
  // {
  //   id: 4,
  //   title: 'Dino Club',
  //   address: 'Ձորաղբյուր, 16 թաղամաս',
  //   description: 'Dino Club-ը հրաշքների աշխարհ է ընտանեկան ժամանցի համար, ուր միլիոնավոր դարերի խորքից վերադարձել են Դինոզավրերը: Այստեղ դու կհանդիպես բուսակեր Ստեգոզավրից սկսած մինչև ամենասարսափազդու հանրահայտ գիշատիչ Տիրանոզավրը:',
  //   priceRange: '֏',
  //   price: 60000,
  //   currency: 'AMD',
  //   entranceFee: 0,
  //   rooms: 2,
  //   minPeople: 40,
  //   maxPeople: 100,
  //   carouselImgs: [
  //     'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/31768648_182129515773322_1361308589049774080_n.jpg?_nc_cat=108&_nc_ht=scontent.fevn1-4.fna&oh=7d62427e2489b396f805551e502d692c&oe=5D6584E8',
  //   ],
  //   details: {
  //     wifi: true,
  //     vegetarian: true,
  //     parking: true,
  //     danceMusic: true,
  //     creditCard: true,
  //     DJ: false,
  //     gamingMachines: false,
  //     VIProom: true,
  //     indoor: true,
  //     outdoor: true,
  //   }
  // },
  // {
  //   id: 5,
  //   title: "Tutti Frutti Kid's Cafe",
  //   address: 'Սայաթ֊Նովա 13',
  //   description: 'Դարձնենք տոն և հաճելի հիշողություն Ձեր ամենասովորական օրը: Սիրով հրավիրում ենք Tutti Frutti մանկական սրճարան նշելու Ձեր փոքրիկի ցանկացած միջոցառում՝ ծնունդ, կնունք, ատամհատիկ և այլ հանդիսություններ:\n' +
  //       '\n' +
  //       'Tutti Frutti-ն ճանաչված է թարմ և համեղ ուտեստներով, մատչելի գներով և հոգատար վերաբերմունքով: Սրճարանը երաշխավորում է բարձր տրամադրություն և զվարճալի ժամանց:\n' +
  //       '\n' +
  //       'Մեզ մետ շոու ծրագիրը, հեքիաթային կերպարները, մուլտ հերոսները և տոնական փուչիկը կազմում են միջոցառման անբաժան մասը: Ձեզ սպասում են բազում անակնկալներ և նվերներ: \n' +
  //       '\n' +
  //       'Առանձին գործում է խաղասրահ, որտեղ անհատական հսկողությամբ Ձեր երեխաները կարող են օգտվել ատրակցիոն խաղերից և լաբիրինթից:\n',
  //   priceRange: '֏֏',
  //   price: 2300,
  //   currency: 'AMD',
  //   entranceFee: 0,
  //   rooms: 1,
  //   minPeople: 10,
  //   carouselImgs: [
  //     'https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/16387354_1765905207062224_1480749109949869367_n.jpg?_nc_cat=106&_nc_ht=scontent.fevn1-4.fna&oh=d89421bd861c75b6ffcc676e6287ecf6&oe=5D536C20',
  //   ],
  //   maxPeople: 60,
  //   details: {
  //     wifi: true,
  //     vegetarian: true,
  //     parking: true,
  //     danceMusic: true,
  //     creditCard: true,
  //     DJ: false,
  //     gamingMachines: false,
  //     VIProom: true,
  //     indoor: true,
  //     outdoor: true,
  //   }
  // },
  {
    id: 6,
    title: 'Lady Sunbathe Zone',
    address: 'Տիգրան Մեծ 16',
    description: 'Lady Sunbath Zone-ը միայն կանանց ու երեխաների համար նախատեսված ամառային ժամանցի վայր է, որտեղ կարելի է երեխաների հետ լավ ժամանակ անցկացնել, լողալ, արևայրուք ընդունել, օգտվել կից սրճարանից և իհարկե նշել ձեր երեխայի ծնունդը ամենաամառային և տարբերվող պայմաններում։ Տարածքում չկան սուր ծայրերով առարկաներ, մաքսիմալ փակ է ամբողջ տարածքը: Մի խոսքով այստեղ մաքսիմալ ապահովված է երեխաների անվտանգությունը։ Ավելին՝ Lady sunbathe zone-ում կա նաև դայակ, ով հետևում է երեխաներին։',
    priceRange: '֏֏',
    price: 4000,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/sunbathe_3.jpg',
      '/assets/images/services/venues/sunbathe_2.jpg',
      '/assets/images/services/venues/sunbathe_4.jpg',
      '/assets/images/services/venues/sunbathe_5.jpg',
    ],
    entranceFee: null,
    rooms: 1,
    minPeople: 1,
    maxPeople: 100,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: false,
      DJ: false,
      gamingMachines: false,
      VIProom: false,
      indoor: false,
      outdoor: true,
    }
  },
  {
    id: 4,
    title: 'Pioneer Brazilian Restaurant',
    address: 'Բաղրամյան 2',
    description: 'Այս բրազիլական ռեստորանը հիանալի վայր է մի պահ Բրազիլիայի շունչը զգալու և բրազիլական անկրնկնելի ուտելիքները համտեսելու համար՝ այն էլ ինչքան ուզեք:',
    priceRange: '֏',
    price: 10000,
    currency: 'AMD',
    carouselImgs: [
      '/assets/images/services/venues/pioneer_1.jpg',
      '/assets/images/services/venues/pioneer_2.jpg',
      '/assets/images/services/venues/pioneer_3.jpg',
      '/assets/images/services/venues/pioneer_4.jpg',
      '/assets/images/services/venues/pioneer_5.jpg',
    ],
    entranceFee: 10000,
    rooms: 1,
    minPeople: 1,
    maxPeople: 100,
    details: {
      wifi: true,
      vegetarian: true,
      parking: true,
      danceMusic: true,
      creditCard: true,
      DJ: false,
      gamingMachines: false,
      VIProom: false,
      indoor: true,
      outdoor: false,
    }
  },
];

export default venues;
