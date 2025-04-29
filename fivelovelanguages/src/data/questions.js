// Questions for the Five Love Languages Quiz
// Each question has two options that correspond to different love languages.

const questions = [
    // Questions for men
    {
      id: 1,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'It\'s very pleasant for me to receive love notes from my wife',
            ru: 'Мне очень приятно получать от жены записки со словами любви',
            uk: 'Мені дуже приємно отримувати від дружини записки зі словами любові'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like it when my wife hugs me',
            ru: 'Мне нравится, когда жена меня обнимает',
            uk: 'Мені подобається, коли дружина мене обіймає'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 2,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to spend time with my wife, to be with her',
            ru: 'Мне нравится уединяться с женой, чтобы побыть с ней вместе',
            uk: 'Мені подобається усамітнюватися з дружиною, щоб побути з нею разом'
          },
          category: 'time'
        },
        {
          text: {
            en: 'When my wife helps me, I feel loved',
            ru: 'Когда жена помогает мне, я чувствую себя любимым',
            uk: 'Коли дружина допомагає мені, я відчуваю себе коханим'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 3,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel special when my wife gives me gifts',
            ru: 'Я чувствую себя счастливым, когда жена дарит мне подарки',
            uk: 'Я відчуваю себе щасливим, коли дружина дарує мені подарунки'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like taking long trips with my wife',
            ru: 'Мне нравится длительные поездки вместе с женой',
            uk: 'Мені подобаються тривалі поїздки разом з дружиною'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 4,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When my wife does chores for me, I am happy',
            ru: 'Когда жена стирает для меня, я счастлив',
            uk: 'Коли дружина пере для мене, я щасливий'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like it when my wife touches me',
            ru: 'Мне нравится, когда жена прикасается ко мне',
            uk: 'Мені подобається, коли дружина торкається мене'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 5,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel loved when my wife comes over and hugs me',
            ru: 'Я чувствую себя любимым, когда жена подходит и обнимает меня руками',
            uk: 'Я відчуваю себе коханим, коли дружина підходить і обіймає мене руками'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I know my wife loves me because she often surprises me with gifts',
            ru: 'Я знаю, что жена моя любит, потому что она часто удивляет меня подарками',
            uk: 'Я знаю, що дружина моя любить, тому що вона часто дивує мене подарунками'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 6,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am ready to go anywhere with my wife',
            ru: 'Я готов поехать с женой куда угодно',
            uk: 'Я готовий поїхати з дружиною куди завгодно'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like holding hands with my wife',
            ru: 'Мне нравится держаться с женой за руки',
            uk: 'Мені подобається триматися з дружиною за руки'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 7,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I value the gifts my wife gives me',
            ru: 'Я ценю подарки, которые дарит мне жена',
            uk: 'Я ціную подарунки, які дарує мені дружина'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like when my wife says she loves me',
            ru: 'Мне нравится, когда жена говорит, что любит меня',
            uk: 'Мені подобається, коли дружина каже, що любить мене'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 8,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife sits next to me',
            ru: 'Мне нравится, когда жена садится рядом со мной',
            uk: 'Мені подобається, коли дружина сідає поруч зі мною'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My wife tells me I look good, and I like it',
            ru: 'Жена говорит, что я хорошо выгляжу, и мне это нравится',
            uk: 'Дружина каже, що я добре виглядаю, і мені це подобається'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 9,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am happy when my wife and I spend time together',
            ru: 'Я счастлив, когда мы с женой проводим время вместе',
            uk: 'Я щасливий, коли ми з дружиною проводимо час разом'
          },
          category: 'time'
        },
        {
          text: {
            en: 'Even the smallest gifts from my wife are important to me',
            ru: 'Для меня важны даже самые маленькие подарки жены',
            uk: 'Для мене важливі навіть найменші подарунки дружини'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 10,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel loved when my wife tells me she is proud of me',
            ru: 'Я чувствую себя любимым, когда жена говорит, что гордится мной',
            uk: 'Я відчуваю себе коханим, коли дружина каже, що пишається мною'
          },
          category: 'words'
        },
        {
          text: {
            en: 'When my wife cooks for me, I know she loves me',
            ru: 'Когда жена готовит для меня ужин, я знаю, что она любит меня',
            uk: 'Коли дружина готує для мене вечерю, я знаю, що вона любить мене'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 11,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'It doesn\'t matter what we do, I just like spending time with my wife',
            ru: 'Не важно, чем мы занимаемся, но мне нравится проводить время с женой',
            uk: 'Не важливо, чим ми займаємося, але мені подобається проводити час з дружиною'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I always enjoy hearing words of support from my wife',
            ru: 'Мне всегда приятно слышать от жены слова поддержки',
            uk: 'Мені завжди приємно чути від дружини слова підтримки'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 12,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'Even small things my wife does for me are more important than her words',
            ru: 'Даже небольшие дела, которые жена делает для меня, важнее любых ее слов',
            uk: 'Навіть невеликі справи, які дружина робить для мене, важливіші за будь-які її слова'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like hugging my wife',
            ru: 'Мне нравится обнимать жену',
            uk: 'Мені подобається обіймати дружину'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 13,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s praise means a lot to me',
            ru: 'Похвала из уст жены много для меня значит',
            uk: 'Похвала з вуст дружини багато для мене значить'
          },
          category: 'words'
        },
        {
          text: {
            en: 'It\'s important to me when my wife gives me gifts that I like',
            ru: 'Для меня очень важно, когда жена дарит мне подарки, которые мне нравятся',
            uk: 'Для мене дуже важливо, коли дружина дарує мені подарунки, які мені подобаються'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 14,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I\'m content when my wife is nearby',
            ru: 'Я доволен, когда жена находится рядом',
            uk: 'Я задоволений, коли дружина знаходиться поруч'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like when my wife strokes my back',
            ru: 'Мне нравится, когда жена гладит меня по спине',
            uk: 'Мені подобається, коли дружина гладить мене по спині'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 15,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I appreciate my wife\'s positive reaction to my achievements',
            ru: 'Меня вдохновляет позитивная реакция жены на мои достижения',
            uk: 'Мене надихає позитивна реакція дружини на мої досягнення'
          },
          category: 'words'
        },
        {
          text: {
            en: 'It means a lot to me when my wife helps me with things she doesn\'t like to do',
            ru: 'Для меня много значит, когда жена помогает мне в том, чего она не любит делать',
            uk: 'Для мене багато значить, коли дружина допомагає мені в тому, чого вона не любить робити'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 16,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I never get tired of my wife\'s kisses',
            ru: 'Я никогда не устаю от поцелуев жены',
            uk: 'Я ніколи не втомлююся від поцілунків дружини'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my wife shows interest in my affairs',
            ru: 'Мне нравится, когда жена проявляет интерес к моим делам',
            uk: 'Мені подобається, коли дружина проявляє інтерес до моїх справ'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 17,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can always count on my wife\'s help in my affairs',
            ru: 'Я всегда могу положиться на помощь жены в моих делах',
            uk: 'Я завжди можу покластися на допомогу дружини в моїх справах'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I always get excited when I receive gifts prepared for me by my wife',
            ru: 'Я всегда волнуюсь, когда открываю подарки, приготовленные мне женой',
            uk: 'Я завжди хвилююся, коли відкриваю подарунки, приготовлені мені дружиною'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 18,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife compliments my appearance',
            ru: 'Мне нравится, когда жена делает комплимент моей внешности',
            uk: 'Мені подобається, коли дружина робить комплімент моїй зовнішності'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like when my wife listens to my ideas without criticizing me',
            ru: 'Мне нравится, когда жена выслушивает мои идеи и не перебивает меня критикой',
            uk: 'Мені подобається, коли дружина вислуховує мої ідеї і не перебиває мене критикою'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 19,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can\'t resist touching my wife when she\'s around',
            ru: 'Не могу удержаться, чтобы не прикоснуться к жене, когда она рядом',
            uk: 'Не можу втриматися, щоб не доторкнутися до дружини, коли вона поруч'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My wife sometimes carries out my errands, and I value that',
            ru: 'Жена иногда выполняет мои поручения, и я ценю это',
            uk: 'Дружина іноді виконує мої доручення, і я ціную це'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 20,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife truly deserves a reward for everything she does for me',
            ru: 'Жена воистину заслуживает награду за все, что делает для меня',
            uk: 'Дружина воістину заслуговує на нагороду за все, що робить для мене'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I\'m often amazed by how thoughtful gifts my wife gives me',
            ru: 'Я часто удивляюсь, насколько продуманные подарки делает мне жена',
            uk: 'Я часто дивуюся, наскільки продумані подарунки робить мені дружина'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 21,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife gives me her full attention',
            ru: 'Мне нравится, когда жена все свое внимание посвящает мне',
            uk: 'Мені подобається, коли дружина всю свою увагу присвячує мені'
          },
          category: 'time'
        },
        {
          text: {
            en: 'Keeping the house clean is a very important matter',
            ru: 'Содержание дома в чистоте — очень важное дело',
            uk: 'Підтримання дому в чистоті — дуже важлива справа'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 22,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I eagerly wait for what my wife will give me for my birthday',
            ru: 'Я с нетерпением жду, что жена подарит мне на день рождения',
            uk: 'Я з нетерпінням чекаю, що дружина подарує мені на день народження'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I never get tired of listening to how my wife expresses her gratitude to me',
            ru: 'Я никогда не устаю слушать, как жена выражает мне свою признательность',
            uk: 'Я ніколи не втомлююся слухати, як дружина висловлює мені свою вдячність'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 23,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife constantly shows her love for me through gifts',
            ru: 'Жена постоянно показывает свою любовь ко мне через подарки',
            uk: 'Дружина постійно показує свою любов до мене через подарунки'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'My wife expresses her love by helping me with household tasks',
            ru: 'Жена проявляет свою любовь, помогая мне сделать задуманное в доме',
            uk: 'Дружина проявляє свою любов, допомагаючи мені зробити задумане в будинку'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 24,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When I talk, my wife doesn\'t interrupt me, and I like that',
            ru: 'Когда я говорю, жена меня не перебивает, и мне это нравится',
            uk: 'Коли я говорю, дружина мене не перебиває, і мені це подобається'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I never get tired of receiving gifts from my wife',
            ru: 'Мне никогда не надоест получать от жены подарки',
            uk: 'Мені ніколи не набридне отримувати від дружини подарунки'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 25,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife always notices when I\'m tired and always asks how she can help',
            ru: 'Жена всегда замечает, если я устал, и всегда спрашивает, чем она может помочь',
            uk: 'Дружина завжди помічає, якщо я втомився, і завжди запитує, чим вона може допомогти'
          },
          category: 'service'
        },
        {
          text: {
            en: 'No matter where we go or walk, I like being with my wife',
            ru: 'Куда бы мы ни пошли или поехали, мне нравится быть с женой',
            uk: 'Куди б ми не пішли або поїхали, мені подобається бути з дружиною'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 26,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like making love with my wife',
            ru: 'Мне нравится заниматься любовью с женой',
            uk: 'Мені подобається займатися коханням з дружиною'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like receiving unexpected gifts from my wife',
            ru: 'Мне нравится получать неожиданные подарки от жены',
            uk: 'Мені подобається отримувати несподівані подарунки від дружини'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 27,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s words of encouragement always give me confidence',
            ru: 'Слова поощрения жены всегда придают мне уверенности',
            uk: 'Слова заохочення дружини завжди надають мені впевненості'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like watching movies together with my wife',
            ru: 'Мне нравится смотреть фильмы вместе с женой',
            uk: 'Мені подобається дивитися фільми разом з дружиною'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 28,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife gives me the most successful and best gifts',
            ru: 'Самые удачные и лучшие подарки мне делает жена',
            uk: 'Найвдаліші та найкращі подарунки мені робить дружина'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'It\'s hard for me to resist hugging my wife',
            ru: 'Мне трудно удержаться, чтобы не обнять жену',
            uk: 'Мені важко втриматися, щоб не обійняти дружину'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 29,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s help means a lot to me, despite her having her own work',
            ru: 'Для меня много значит помощь жены, несмотря на наличие у нее своей работы',
            uk: 'Для мене багато значить допомога дружини, незважаючи на наявність у неї своєї роботи'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I feel good when my wife tells me how she values me',
            ru: 'Мне становится хорошо, когда жена говорит, как она меня ценит',
            uk: 'Мені стає добре, коли дружина говорить, як вона мене цінує'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 30,
      gender: 'men',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to hug and kiss my wife even after a short separation',
            ru: 'Мне нравится обнимать и целовать жену даже после короткой разлуки',
            uk: 'Мені подобається обіймати і цілувати дружину навіть після короткої розлуки'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my wife says that she believes in me',
            ru: 'Мне нравится, когда жена говорит, что она верит в меня',
            uk: 'Мені подобається, коли дружина каже, що вона вірить у мене'
          },
          category: 'words'
        }
      ]
    },
    // Questions for women
    {
      id: 1,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to receive love notes from my husband',
            ru: 'Мне нравится получать от мужа любовные записки',
            uk: 'Мені подобається отримувати від чоловіка любовні записки'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like it when my husband hugs me',
            ru: 'Мне нравится, когда муж меня обнимает',
            uk: 'Мені подобається, коли чоловік мене обіймає'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 2,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to spend time alone with my husband',
            ru: 'Мне нравится уединяться с мужем',
            uk: 'Мені подобається усамітнюватися з чоловіком'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I feel loved when my husband washes my car',
            ru: 'Я чувствую себя любимой, когда муж моет мою машину',
            uk: 'Я відчуваю себе коханою, коли чоловік миє мою машину'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 3,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am happy when I receive gifts from my husband',
            ru: 'Я счастлива, когда получаю от мужа подарки',
            uk: 'Я щаслива, коли отримую від чоловіка подарунки'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like long trips with my husband',
            ru: 'Мне нравятся длительные поездки вместе с мужем',
            uk: 'Мені подобаються тривалі поїздки разом з чоловіком'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 4,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel my husband\'s love when he helps me with the laundry',
            ru: 'Я чувствую любовь мужа, когда он помогает мне со стиркой белья',
            uk: 'Я відчуваю любов чоловіка, коли він допомагає мені з пранням білизни'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like it when my husband touches me',
            ru: 'Мне нравится, когда муж прикасается ко мне',
            uk: 'Мені подобається, коли чоловік торкається мене'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 5,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I see that my husband loves me when he embraces me',
            ru: 'Я вижу, что муж любит меня, когда он обхватывает меня руками',
            uk: 'Я бачу, що чоловік любить мене, коли він обхоплює мене руками'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I know that my husband loves me because he surprises me with unexpected gifts',
            ru: 'Я знаю, что муж любит меня, потому что он удивляет меня неожиданными подарками',
            uk: 'Я знаю, що чоловік любить мене, тому що він дивує мене несподіваними подарунками'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 6,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am ready to go anywhere with my husband',
            ru: 'Я готова поехать с мужем куда угодно',
            uk: 'Я готова поїхати з чоловіком куди завгодно'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like when my husband and I hold hands',
            ru: 'Мне нравится, когда мы с мужем держимся за руки',
            uk: 'Мені подобається, коли ми з чоловіком тримаємося за руки'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 7,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I value the gifts that my husband gives me',
            ru: 'Я ценю подарки, которые дарит мне муж',
            uk: 'Я ціную подарунки, які дарує мені чоловік'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like when my husband says that he loves me',
            ru: 'Мне нравится, когда муж говорит, что любит меня',
            uk: 'Мені подобається, коли чоловік каже, що любить мене'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 8,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my husband sits next to me',
            ru: 'Мне нравится, когда муж садится рядом со мной',
            uk: 'Мені подобається, коли чоловік сідає поруч зі мною'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My husband says I look good, and I like it',
            ru: 'Муж говорит, что я хорошо выгляжу, и мне это нравится',
            uk: 'Чоловік каже, що я добре виглядаю, і мені це подобається'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 9,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am happy when my husband and I spend time together',
            ru: 'Я счастлива, когда мы с мужем проводим время вместе',
            uk: 'Я щаслива, коли ми з чоловіком проводимо час разом'
          },
          category: 'time'
        },
        {
          text: {
            en: 'Even the smallest gifts from my husband are important to me',
            ru: 'Мне важны даже самые скромные подарки от мужа',
            uk: 'Мені важливі навіть найскромніші подарунки від чоловіка'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 10,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel love from my husband when he says he is proud of me',
            ru: 'Я чувствую любовь мужа, когда он говорит, что гордится мной',
            uk: 'Я відчуваю любов чоловіка, коли він каже, що пишається мною'
          },
          category: 'words'
        },
        {
          text: {
            en: 'When my husband helps clear the table, I know he loves me',
            ru: 'Когда муж помогает убрать со стола, я вижу, что он любит меня',
            uk: 'Коли чоловік допомагає прибрати зі столу, я бачу, що він любить мене'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 11,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to do any activities together with my husband',
            ru: 'Мне нравится делать любые дела вместе с мужем',
            uk: 'Мені подобається робити будь-які справи разом з чоловіком'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like when my husband supports me with positive words',
            ru: 'Мне нравится, когда муж поддерживает меня позитивными словами',
            uk: 'Мені подобається, коли чоловік підтримує мене позитивними словами'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 12,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'Even insignificant things my husband does for me are more important than any of his words',
            ru: 'Даже незначительные дела, которые муж делает для меня, важнее любых его слов',
            uk: 'Навіть незначні справи, які чоловік робить для мене, важливіші за будь-які його слова'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like hugging my husband',
            ru: 'Мне нравится обнимать мужа',
            uk: 'Мені подобається обіймати чоловіка'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 13,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'Praise from my husband means a lot to me',
            ru: 'Похвала мужа для меня много значит',
            uk: 'Похвала чоловіка для мене багато значить'
          },
          category: 'words'
        },
        {
          text: {
            en: 'It\'s important to me when my husband gives me something I really like',
            ru: 'Для меня важно, когда муж дарит мне то, что мне действительно нравится',
            uk: 'Для мене важливо, коли чоловік дарує мені те, що мені дійсно подобається'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 14,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel good when my husband is nearby',
            ru: 'Мне хорошо, когда муж находится рядом',
            uk: 'Мені добре, коли чоловік знаходиться поруч'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like when my husband gives me a massage',
            ru: 'Мне нравится, когда муж делает мне массаж',
            uk: 'Мені подобається, коли чоловік робить мені масаж'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 15,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my husband praises me for my achievements',
            ru: 'Мне нравится, когда муж хвалит меня за успехи',
            uk: 'Мені подобається, коли чоловік хвалить мене за успіхи'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I appreciate when my husband helps me with things he doesn\'t like to do',
            ru: 'Я ценю, когда муж помогает мне в том, что ему не нравится делать',
            uk: 'Я ціную, коли чоловік допомагає мені в тому, що йому не подобається робити'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 16,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I never get tired of my husband\'s kisses',
            ru: 'Поцелуи мужа мне никогда не надоедают',
            uk: 'Поцілунки чоловіка мені ніколи не набридають'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my husband shows interest in my affairs',
            ru: 'Мне нравится, когда муж проявляет интерес к моим делам',
            uk: 'Мені подобається, коли чоловік проявляє інтерес до моїх справ'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 17,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can always count on my husband\'s help in my affairs',
            ru: 'Я всегда могу рассчитывать на помощь мужа в моих делах',
            uk: 'Я завжди можу розраховувати на допомогу чоловіка в моїх справах'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I always get excited opening gifts from my husband',
            ru: 'Я всегда волнуюсь, открывая подарки мужа',
            uk: 'Я завжди хвилююся, відкриваючи подарунки чоловіка'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 18,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my husband compliments my appearance',
            ru: 'Мне нравится, когда муж делает комплименты по поводу моей внешности',
            uk: 'Мені подобається, коли чоловік робить компліменти щодо моєї зовнішності'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like when my husband listens to me attentively and respectfully',
            ru: 'Мне нравится, когда муж внимательно и уважительно меня слушает',
            uk: 'Мені подобається, коли чоловік уважно і з повагою мене слухає'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 19,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can\'t resist touching my husband when he\'s nearby',
            ru: 'Не могу удержаться, чтобы не прикоснуться к мужу, когда он рядом',
            uk: 'Не можу втриматися, щоб не доторкнутися до чоловіка, коли він поруч'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My husband sometimes carries out my errands, and I value that',
            ru: 'Муж иногда выполняет мои поручения, и я ценю это',
            uk: 'Чоловік іноді виконує мої доручення, і я ціную це'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 20,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My husband truly deserves a great reward for everything he does for me',
            ru: 'Муж достоин большой награды за все, что он делает для меня',
            uk: 'Чоловік гідний великої нагороди за все, що він робить для мене'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I\'m often amazed by the thoughtful gifts my husband gives me',
            ru: 'Меня иногда удивляет, насколько продуманные подарки дарит мне муж',
            uk: 'Мене іноді дивує, наскільки продумані подарунки дарує мені чоловік'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 21,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like that all my husband\'s attention is focused on me',
            ru: 'Мне нравится, что все внимание мужа приковано ко мне',
            uk: 'Мені подобається, що вся увага чоловіка прикута до мене'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like that my husband helps me with cleaning the house',
            ru: 'Мне нравится, что муж помогает мне с уборкой дома',
            uk: 'Мені подобається, що чоловік допомагає мені з прибиранням будинку'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 22,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I eagerly wait for what my husband will give me for my birthday',
            ru: 'Я с нетерпением жду, что подарит мне муж на день рождения',
            uk: 'Я з нетерпінням чекаю, що подарує мені чоловік на день народження'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I never get tired of hearing how my husband appreciates me',
            ru: 'Мне никогда не надоест слушать, как муж меня ценит',
            uk: 'Мені ніколи не набридне слухати, як чоловік мене цінує'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 23,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My husband shows his love through gifts',
            ru: 'Своими подарками муж показывает свою любовь',
            uk: 'Своїми подарунками чоловік показує свою любов'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'My husband shows his love by helping me even when I don\'t ask',
            ru: 'Муж проявляет свою любовь ко мне, помогая даже тогда, когда я не прошу',
            uk: 'Чоловік проявляє свою любов до мене, допомагаючи навіть тоді, коли я не прошу'
          },
          category: 'service'
        }
      ]
    },
    {
      id: 24,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When I talk, my husband doesn\'t interrupt me, and I like that',
            ru: 'Когда я говорю, муж меня не перебивает, и мне это нравится',
            uk: 'Коли я говорю, чоловік мене не перебиває, і мені це подобається'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I never get tired of receiving gifts from my husband',
            ru: 'Мне никогда не надоест получать от мужа подарки',
            uk: 'Мені ніколи не набридне отримувати від чоловіка подарунки'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 25,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When I\'m tired, my husband always asks how he can help',
            ru: 'Когда я устаю, муж всегда спрашивает, чем он может помочь',
            uk: 'Коли я втомлююся, чоловік завжди запитує, чим він може допомогти'
          },
          category: 'service'
        },
        {
          text: {
            en: 'No matter where we go, I like being with my husband',
            ru: 'Я люблю ездить и ходить с мужем, причем не важно, куда',
            uk: 'Я люблю їздити і ходити з чоловіком, причому не важливо, куди'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 26,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I love sitting with my husband, cozying up next to me',
            ru: 'Мне нравится сидеть с мужем, уютно устроившись рядом',
            uk: 'Мені подобається сидіти з чоловіком, затишно влаштувавшись поруч'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like receiving unexpected gifts from my husband',
            ru: 'Мне нравится получать неожиданные подарки от мужа',
            uk: 'Мені подобається отримувати несподівані подарунки від чоловіка'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 27,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My husband\'s words of encouragement give me confidence',
            ru: 'Воодушевляющие слова мужа придают мне чувство уверенности',
            uk: 'Надихаючі слова чоловіка надають мені відчуття впевненості'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like watching movies with my husband',
            ru: 'Мне нравится смотреть фильмы с мужем',
            uk: 'Мені подобається дивитися фільми з чоловіком'
          },
          category: 'time'
        }
      ]
    },
    {
      id: 28,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I receive the best gifts from my husband',
            ru: 'Самые лучшие подарки я всегда получаю от мужа',
            uk: 'Найкращі подарунки я завжди отримую від чоловіка'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like when my husband constantly hugs me',
            ru: 'Мне нравится, когда муж постоянно меня обнимает',
            uk: 'Мені подобається, коли чоловік постійно мене обіймає'
          },
          category: 'touch'
        }
      ]
    },
    {
      id: 29,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I really appreciate when my husband helps me despite having his own activities',
            ru: 'Мне очень приятно, когда муж помогает мне несмотря на свою занятость',
            uk: 'Мені дуже приємно, коли чоловік допомагає мені незважаючи на свою зайнятість'
          },
          category: 'service'
        },
        {
          text: {
            en: 'It\'s very pleasant when my husband says he values me',
            ru: 'Мне очень приятно, когда муж говорит, что он ценит меня',
            uk: 'Мені дуже приємно, коли чоловік каже, що він цінує мене'
          },
          category: 'words'
        }
      ]
    },
    {
      id: 30,
      gender: 'women',
      text: {
        en: '',
        ru: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to hug and kiss my husband even after a short separation',
            ru: 'Мне нравится целовать и обнимать мужа даже после короткой разлуки',
            uk: 'Мені подобається цілувати і обіймати чоловіка навіть після короткої розлуки'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my husband says he missed me',
            ru: 'Мне нравится, когда муж говорит, что скучал по мне',
            uk: 'Мені подобається, коли чоловік каже, що сумував за мною'
          },
          category: 'words'
        }
      ]
    },
  ];

  export default questions;