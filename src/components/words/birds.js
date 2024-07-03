const birds = [
  {
    name: 'Sparrow',
    transcript: '[ˈspæroʊ] ',
    translate: 'Воробей',
    img: 'https://img.freepik.com/free-photo/cute-cartoony-sparrow-studio_23-2151002220.jpg?t=st=1719993224~exp=1719996824~hmac=a9f1e84c774f9918dac76c0d13269067cbfac009b7ee8cc49e249506e44adbb0&w=1800',
  },
  {
    name: 'Eagle',
    transcript: '[ˈiːɡəl]',
    translate: 'Орёл',
    img: 'https://img.freepik.com/free-photo/3d-rendering-cartoonish-eagle_23-2151056212.jpg?t=st=1719993242~exp=1719996842~hmac=e23078fbd4c843a798366f4f2c2e9777cc481cfb904e0f09e884e95f989990fb&w=900',
  },
  {
    name: 'Hawk',
    transcript: '[hɔk]',
    translate: 'Ястреб',
    img: 'https://img.freepik.com/free-photo/cute-cartoony-eagle-nature_23-2151002245.jpg?t=st=1719993257~exp=1719996857~hmac=ef0f764900d4fda21829372f9f4098c4e218b5f4982723ab00418f437a869f46&w=1800',
  },
  {
    name: 'Falcon',
    transcript: '[ˈfælkən]',
    translate: 'Сокол',
    img: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-like-eagle_23-2151056161.jpg?t=st=1719993273~exp=1719996873~hmac=faebc95bf6e659504c7898b996c1663c111e5ea029cef2e15441c8165807074d&w=900',
  },
  {
    name: 'Owl',
    transcript: '[aʊl]',
    translate: 'Сова',
    img: 'https://img.freepik.com/free-photo/cartoony-owl-nature_23-2151002153.jpg?t=st=1719993296~exp=1719996896~hmac=4e53098f5155cd13cc6f5c351812b5287b171e44232338af33d4c090286036ee&w=1800',
  },
  {
    name: 'Pigeon',
    transcript: '[ˈpɪdʒən]',
    translate: 'Голубь',
    img: 'https://img.freepik.com/free-photo/cute-cartoony-dove-studio_23-2151002241.jpg?t=st=1719993332~exp=1719996932~hmac=285b56efd882c599a901690e8f8a9dc2c0f3707a2dd5bb45fba362bc26366af4&w=900',
  },
  {
    name: 'Parrot',
    transcript: '[ˈpærət]',
    translate: 'Попугай',
    img: 'https://img.freepik.com/free-photo/cartoony-parrot-studio_23-2151002298.jpg?t=st=1719991930~exp=1719995530~hmac=b2d3d128da60a4a424790547e2be935e4a93eee9ebb724deaabfb7475ac49746&w=1800',
  },
  {
    name: 'Canary',
    transcript: '[kəˈnɛri]',
    translate: 'Канарейка',
    img: 'https://img.freepik.com/free-photo/cartoony-bird-studio_23-2151002186.jpg?t=st=1719993362~exp=1719996962~hmac=13b1b4cb285457e92086f84aba918c689fcc2f3e6307ac0c5bc02d6e36765460&w=1800',
  },
  {
    name: 'Swan',
    transcript: '[swɑn]',
    translate: 'Лебедь',
    img: 'https://img.freepik.com/free-vector/cute-swan-princess_23-2148487544.jpg?t=st=1719993419~exp=1719997019~hmac=8296b224924b9213c6bc96e44791992c85c7055130ac0af94e1bb49f1b71dce1&w=1800',
  },
  {
    name: 'Duck',
    transcript: '[dʌk]',
    translate: 'Утка',
    img: 'https://img.freepik.com/free-photo/cute-cartoony-duck-studio_23-2151002231.jpg?t=st=1719992355~exp=1719995955~hmac=34910fddb29711052c5b37ce85fdd8e7d3be461e8fe689c8019bd5d9c4771f8b&w=1800',
  },
  {
    name: 'Goose',
    transcript: '[ɡus]',
    translate: 'Гусь',
    img: 'https://img.freepik.com/free-photo/cute-duckling-water-3d-illustration-horizontal_1057-45693.jpg?t=st=1719992386~exp=1719995986~hmac=b9ee94e31949d6a2ba9d4d01e3497d57dbbbfe4cc480455f302756f0828d32db&w=1800',
  },
  {
    name: 'Peacock',
    transcript: '[ˈpiːkɑk]',
    translate: 'Павлин',
    img: 'https://img.freepik.com/free-photo/cute-cartoony-peacock-nature_23-2151002274.jpg?t=st=1719993463~exp=1719997063~hmac=a013dd0f16a1d2516e564b09b2aec990a182bc4cecd492e53a47e8ebab91d5f6&w=1800',
  },
  {
    name: 'Hummingbird',
    transcript: '[ˈhʌmɪŋˌbɜrd]',
    translate: 'Колибри',
    img: 'https://img.freepik.com/free-vector/beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochures_1262-13457.jpg?t=st=1719993487~exp=1719997087~hmac=96c363db3b30c48fa6e1e634bb0154e0956320eae064824c357383080e24be87&w=1380',
  },
  {
    name: 'Ostrich',
    transcript: '[ˈɔstrɪʧ]',
    translate: 'Страус',
    img: 'https://img.freepik.com/free-photo/cartoony-ostrich-studio_23-2151002291.jpg?t=st=1719993509~exp=1719997109~hmac=f738b8ddb846705a88a1205a3edc0c2d054f34d6d5782ea5af028cbbd701540a&w=1800',
  },
  {
    name: 'Seagull',
    transcript: '[ˈsiːɡʌl]',
    translate: 'Чайка',
    img: 'https://img.freepik.com/free-photo/cartoony-bird-nature_23-2151002158.jpg?t=st=1719993530~exp=1719997130~hmac=c36a0f0d057b017b5cdc5b18e38d019ae254c9664b6c29121f1ecea306846b78&w=1800',
  },
  {
    name: 'Woodpecker',
    transcript: '[ˈwʊdˌpɛkər]',
    translate: 'Дятел',
    img: 'https://img.freepik.com/premium-photo/3d-rendered-plastic-cartoon-woodpecker-white-background_899449-143619.jpg?w=1800',
  },
  {
    name: 'Flamingo',
    transcript: '[fləˈmɪŋɡoʊ]',
    translate: 'Фламинго',
    img: 'https://img.freepik.com/free-photo/beautiful-flamingos-lake_23-2150536817.jpg?t=st=1719993671~exp=1719997271~hmac=640a13d4a24b60041e94e1b15f79122a8fc67964b6b2ab5a2f0120ee440a0437&w=900',
  },
  {
    name: 'Pelican',
    transcript: '[ˈpɛlɪkən]',
    translate: 'Пеликан',
    img: 'https://img.freepik.com/free-photo/cartoony-bird-studio_23-2151002185.jpg?t=st=1719993688~exp=1719997288~hmac=1674f735e27a723e139f56aca992e9540a3396d825cc25176a38ed1637b98b84&w=1800',
  },
];

export default birds;
