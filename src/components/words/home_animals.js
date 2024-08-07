const homeAnimals = [
  {
    name: 'Cat',
    transcript: '[kæt]',
    translate: 'Кошка',
    img: 'https://img.freepik.com/free-vector/cute-cat-jumping-pose-vector_1308-138264.jpg?t=st=1719991566~exp=1719995166~hmac=fdf01e8b7ff155eb6e2e8e7601a42d71281787723fc21673da5b441c4bfd12eb&w=1800',
  },
  {
    name: 'Kitten',
    transcript: '[ˈkɪtən]',
    translate: 'Котёнок',
    img: 'https://img.freepik.com/free-vector/little-cute-cat-cartoon-character_1308-138075.jpg?t=st=1719991688~exp=1719995288~hmac=9810e34666a7b97eaa27a925c0c4b1f768b49f2faac7ebf60a3da07cbf5da387&w=1060',
  },
  {
    name: 'Dog',
    transcript: '[dɔɡ] ',
    translate: 'Собака',
    img: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907242.jpg?t=st=1719991708~exp=1719995308~hmac=a8b92e3095ea7e3e71b5e36a6aaf89b1179a10c8b2dbb473ca50a003431c9f4b&w=900',
  },
  {
    name: 'Puppy',
    transcript: '[ˈpʌpi]',
    translate: 'Щенок',
    img: 'https://img.freepik.com/free-photo/adorable-dalmatian-dog-studio_23-2150797090.jpg?t=st=1719991724~exp=1719995324~hmac=993f5d29a3ac539c37d93b772089fcfe76da9056e54f411a46b86667947c00e6&w=1800',
  },
  {
    name: 'Rabbit',
    transcript: '[ˈræbɪt]',
    translate: 'Кролик',
    img: 'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288886.jpg?t=st=1719991771~exp=1719995371~hmac=5883c98ab159a1844c1e3aaba0c0065933ccdfdb03e5b0a098f5b137d4769f17&w=1800',
  },
  {
    name: 'Hamster',
    transcript: '[ˈhæmstər]',
    translate: 'Хомяк',
    img: 'https://img.freepik.com/premium-photo/cute-fat-mouse_1037171-62048.jpg?w=1800',
  },
  {
    name: 'Guinea pig',
    transcript: '[ˈɡɪni pɪɡ]',
    translate: 'Морская свинка',
    img: 'https://img.freepik.com/free-photo/beautiful-guinea-pig-pet-portrait_23-2149152076.jpg?t=st=1719991873~exp=1719995473~hmac=476b3b1979786c978d9098e688337b03dbab7d6b9b93083bdc56f4d392b3271f&w=900',
  },
  {
    name: 'Rat',
    transcript: '[ræt]',
    translate: 'Крыса',
    img: 'https://img.freepik.com/free-photo/cute-possum-playing-piano_23-2151041022.jpg?t=st=1719991896~exp=1719995496~hmac=97357a221b02e749ee84e23220d91ac1f86ed17a0a407f5a27477646467448d3&w=1800',
  },
  {
    name: 'Parrot',
    transcript: '[ˈpærət]',
    translate: 'Попугай',
    img: 'https://img.freepik.com/free-photo/cartoony-parrot-studio_23-2151002298.jpg?t=st=1719991930~exp=1719995530~hmac=b2d3d128da60a4a424790547e2be935e4a93eee9ebb724deaabfb7475ac49746&w=1800',
  },
  {
    name: 'Fish',
    transcript: ' [fɪʃ] ',
    translate: 'Рыба',
    img: 'https://img.freepik.com/free-photo/view-animated-cartoon-3d-fish_23-2150985082.jpg?t=st=1719991945~exp=1719995545~hmac=24dc874703c7f53eef6c1a684996bdbd20af8b5dc212ff8586dc217c0df087f2&w=900',
  },
  {
    name: 'Goldfish',
    transcript: '[ˈɡoʊldfɪʃ]',
    translate: 'Золотая рыбка',
    img: 'https://img.freepik.com/free-photo/3d-cartoon-fish-underwater_23-2150720914.jpg?t=st=1719991957~exp=1719995557~hmac=da1b87eff8253abdf252d1547eda6febf425808298b17d12c7d6f0daa7e427f8&w=740',
  },
  {
    name: 'Turtle',
    transcript: '[ˈtɜrtl]',
    translate: 'Черепаха',
    img: 'https://img.freepik.com/free-vector/happy-turtle-mascot-illustration_24908-82956.jpg?t=st=1719991997~exp=1719995597~hmac=f9e999c57f49b96c39218218efb05c25264b23dd64bd991cea24b3f6013191dd&w=1800',
  },
  {
    name: 'Cow',
    transcript: '[kaʊ] ',
    translate: 'Корова',
    img: 'https://img.freepik.com/free-photo/3d-cartoon-cow-illustration_23-2151581373.jpg?t=st=1719992013~exp=1719995613~hmac=db244621dc6ee2824ff8e24654595a67c3c26087382f95272a12905f26d22c3b&w=1800',
  },
  {
    name: 'Horse',
    transcript: '[hɔrs]',
    translate: 'Лошадь',
    img: 'https://img.freepik.com/free-photo/horse-cartoon-illustration_23-2151451258.jpg?t=st=1719992072~exp=1719995672~hmac=7b5d6509e61672385d68b9cfcea25266ba41cf502827a0367fdd9cbf1ab7ba30&w=1800',
  },
  {
    name: 'Pig',
    transcript: '[pɪɡ]',
    translate: 'Свинка',
    img: 'https://img.freepik.com/free-vector/cheerful-cartoon-pig-illustration_1308-166360.jpg?t=st=1719992139~exp=1719995739~hmac=4e72dc02deef2465174ef2791c6e02dbc76bf263bc47668db45b0b653f4d8ac1&w=996',
  },
  {
    name: 'Sheep',
    transcript: '[ʃip]',
    translate: 'Овечка',
    img: 'https://img.freepik.com/premium-photo/fluffy-baby-sheep-with-curly-wool_917213-4617.jpg?w=1060',
  },
  {
    name: 'Chiken',
    transcript: '[ˈʧɪkɪn] ',
    translate: 'Курица',
    img: 'https://img.freepik.com/free-vector/chicken-holding-green-leaf-white-background_1308-43652.jpg?t=st=1719992274~exp=1719995874~hmac=6d495ef81578adb05e941036c9d32e6570c263e75f71cbc3f00592cd1a4b3f43&w=1060',
  },
  {
    name: 'Rooster',
    transcript: '[ˈru:stər]',
    translate: 'Петух',
    img: 'https://img.freepik.com/free-vector/chicken-cartoon-character-riding-skateboard_1308-87902.jpg?t=st=1719992333~exp=1719995933~hmac=1fbe7eb8dfaca5f2dedc9efcbd2cd58fcc48b1fe5827efcef6f9a7ab1535dc84&w=1800',
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
    name: 'Goat',
    transcript: '[ɡoʊt]',
    translate: 'Коза',
    img: 'https://img.freepik.com/premium-photo/3d-cartoon-charakter-animal_1016686-23377.jpg?w=1060',
  },
  {
    name: 'Turkey',
    transcript: '[ˈtɜrki]',
    translate: 'Индюк',
    img: 'https://img.freepik.com/premium-vector/happy-thanksgiving-day-funny-cartoon-character-thanksgiving-turkey-bird_88465-2323.jpg?w=1380',
  },
  {
    name: 'Donkey',
    transcript: ' [ˈdɒŋki]',
    translate: 'Осёл',
    img: 'https://img.freepik.com/free-vector/cute-horse-cartoon-isolated_1308-146112.jpg?t=st=1719992565~exp=1719996165~hmac=978afa3d748cd334a8a8f1cc7393ab51417796b93337edf1f22ceae11d5a4098&w=1380',
  },
];

export default homeAnimals;
