const wildAnimals = [
  {
    name: 'Lion',
    transcript: '[ˈlaɪən]',
    translate: 'Лев',
    img: 'https://img.freepik.com/free-photo/cute-lion-posing-studio_23-2150852453.jpg?t=st=1719992591~exp=1719996191~hmac=c50672ba0dc1f75a49e90301e6f0b236ad72e46f6211e77561f75b858bfd3338&w=900',
  },
  {
    name: 'Tiger',
    transcript: '[ˈtaɪɡər]',
    translate: 'Тигр',
    img: 'https://img.freepik.com/free-photo/cut-tiger-studio_23-2150875324.jpg?t=st=1719992608~exp=1719996208~hmac=de342a7425774e6cd84e982e8a4c0e72588a64031816b23e620607f99b506538&w=1800',
  },
  {
    name: 'Elephant',
    transcript: '[ˈɛlɪfənt]',
    translate: 'Слон',
    img: 'https://img.freepik.com/free-photo/cute-elephant-nature_23-2150895557.jpg?t=st=1719992628~exp=1719996228~hmac=a26cd6e974b23892d9be48e07cdfd4f465087773f9ec346404441212ccbd6b4c&w=900',
  },
  {
    name: 'Girrafe',
    transcript: '[dʒɪˈræf]',
    translate: 'Жираф',
    img: 'https://img.freepik.com/free-vector/cute-giraffe-flat-style_1308-114113.jpg?t=st=1719992701~exp=1719996301~hmac=c672a2d0e0aa204584129ae33199d92521f21c03c378a625725a2ebfdbe1670b&w=740',
  },
  {
    name: 'Zebra',
    transcript: '[ˈziːbrə] ',
    translate: 'Зебра',
    img: 'https://img.freepik.com/free-vector/cute-zebra-cartoon-animal-character_1308-149417.jpg?t=st=1719992729~exp=1719996329~hmac=f0fe77218313844fbdefa9bc812b1e86ee8d4be32e5b2f933d915a20dab2cadc&w=1060',
  },
  {
    name: 'Leopard',
    transcript: ' [ˈlɛpərd]',
    translate: 'Леопард',
    img: 'https://img.freepik.com/free-photo/cute-tiger-studio_23-2150853199.jpg?t=st=1719992766~exp=1719996366~hmac=2ec113540f12fa9a948b7d04b21e73b893d608038a1b92464f5fff5c8bfeb52e&w=900',
  },
  {
    name: 'Cheetah',
    transcript: '[ˈʧiːtə]',
    translate: 'Гепард',
    img: 'https://img.freepik.com/free-photo/3d-rendered-illustration-cheetah-cartoon-character-white-background_1057-44906.jpg?t=st=1719992803~exp=1719996403~hmac=f70d05b15a1d51f03eae17a7b3a2a179feab6a375ee331f6f557d10eaf345cf6&w=1800',
  },
  {
    name: 'Wolf',
    transcript: '[wʊlf]',
    translate: 'Волк',
    img: 'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907222.jpg?t=st=1719992832~exp=1719996432~hmac=573b7505aef5b801065a74244aa24a79e618b41e104cd3341ff7cdf6923fb938&w=1800',
  },
  {
    name: 'Bear',
    transcript: '[bɛr] ',
    translate: 'Медведь',
    img: 'https://img.freepik.com/free-photo/3d-cartoon-character-practising-yoga_23-2151467813.jpg?t=st=1719992874~exp=1719996474~hmac=929737b2af1b156682ce432157446865bdcf9a49500bbf3102eec0b2907b8713&w=1060',
  },
  {
    name: 'Fox',
    transcript: '[fɑks]',
    translate: 'Лиса',
    img: 'https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395215.jpg?t=st=1719992896~exp=1719996496~hmac=05bab689cf7977d2d5c05872f33e8e19484081c8cb2dc818eebc0695446acee1&w=1800',
  },
  {
    name: 'Rhinoceros',
    transcript: ' [raɪˈnɑsərəs]',
    translate: 'Носорог',
    img: 'https://img.freepik.com/free-vector/rhinoceros-cartoon-character-standing-white-background_1308-159594.jpg?t=st=1719992921~exp=1719996521~hmac=be3d893308a66aac109adc76082ddb69d8ec9bc394e772e826a0c5ba8013803f&w=1060',
  },
  {
    name: 'Hippopotamus',
    transcript: '[ˌhɪpəˈpɑtəməs]',
    translate: 'Бегемот',
    img: 'https://img.freepik.com/free-vector/cheerful-cartoon-hippopotamus-illustration_1308-165828.jpg?t=st=1719992972~exp=1719996572~hmac=a4b5d3e770caa3ff946cd9cab6dc5cec3a828fba808a97fb886b5f6fc7549081&w=1060',
  },
  {
    name: 'Crocodile',
    transcript: ' [ˈkrɒkədaɪl]',
    translate: 'Крокодил',
    img: 'https://img.freepik.com/free-photo/cute-green-crocodile-grass-3d-illustration_1057-45560.jpg?t=st=1719992995~exp=1719996595~hmac=fcbdec7ed16bdfc7fdab8f2d69d1c21ea44da9ec4dddc217358834525d717938&w=1800',
  },
  {
    name: 'Gorilla',
    transcript: '[ɡəˈrɪlə]',
    translate: 'Горилла',
    img: 'https://img.freepik.com/free-vector/cheerful-cartoon-gorilla-sitting_1308-166549.jpg?t=st=1719993030~exp=1719996630~hmac=8d9ee24fe0619dec5ae343de1265879a46c9659ade4ce6f03d5165bf2fd767ee&w=1060',
  },
  {
    name: 'Kangaroo',
    transcript: ' [ˌkæŋɡəˈru]',
    translate: 'Кенгуру',
    img: 'https://img.freepik.com/free-vector/kangaroo-cartoon-character-isolated_1308-112585.jpg?t=st=1719993053~exp=1719996653~hmac=81f3dccf9db55c69230c5de4540ee958759809d8027d97af0b74e15bde563f0e&w=1800',
  },
  {
    name: 'Koala',
    transcript: '[ˈkoʊlə]',
    translate: 'Коала',
    img: 'https://img.freepik.com/free-vector/cute-koala-cartoon-character_1308-132636.jpg?t=st=1719993089~exp=1719996689~hmac=568a5c19fe2e3338f7d12a6a0538bcc6db5a13f9dc71601811b304e5c2c97cf2&w=1800',
  },
  {
    name: 'Panda',
    transcript: '[ˈpændə]',
    translate: 'Панда',
    img: '',
  },
  {
    name: 'Jaguar',
    transcript: ' [ˈʤæɡwɑr]',
    translate: 'Ягуар',
    img: 'https://img.freepik.com/free-photo/view-leopard-animal-wild_23-2150374822.jpg?t=st=1719993162~exp=1719996762~hmac=4308e12707ac2fc1b67838a24a878fba5c6a93a8d3df18bc148a3b3f80aed99a&w=900',
  },
  {
    name: 'Moose',
    transcript: '[mus]',
    translate: 'Лось',
    img: 'https://img.freepik.com/premium-photo/cute-funny-cartoon-moose-illustration-children-book-generative-ai_836477-23880.jpg?w=1800',
  },
];

export default wildAnimals;
