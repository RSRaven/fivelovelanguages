// Questions for the Five Love Languages Quiz
// Each question has two options that correspond to different love languages.

const questions = [
    // Questions for men (from screenshots)
    {
      id: 1,
      gender: 'men',
      text: {
        en: '',
        uk: ''
      },
      options: [
        {
          text: {
            en: 'It\'s very pleasant for me to receive love notes from my wife',
            uk: 'Мне очень приятно получать от жены записки со словами любви'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like it when my wife hugs me',
            uk: 'Мне нравится, когда жена меня обнимает'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to spend time with my wife, to be with her',
            uk: 'Мне нравится уединяться с женой, чтобы побыть с ней вместе'
          },
          category: 'time'
        },
        {
          text: {
            en: 'When my wife helps me, I feel loved',
            uk: 'Когда жена помогает мне, я чувствую себя любимым'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel special when my wife gives me gifts',
            uk: 'Я чувствую себя счастливым, когда жена дарит мне подарки'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like taking long trips with my wife',
            uk: 'Мне нравится длительные поездки вместе с женой'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When my wife does chores for me, I am happy',
            uk: 'Когда жена стирает для меня, я счастлив'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like it when my wife touches me',
            uk: 'Мне нравится, когда жена прикасается ко мне'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel loved when my wife comes over and hugs me',
            uk: 'Я чувствую себя любимым, когда жена подходит и обнимает меня руками'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I know my wife loves me because she often surprises me with gifts',
            uk: 'Я знаю, что жена моя любит, потому что она часто удивляет меня подарками'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am ready to go anywhere with my wife',
            uk: 'Я готов поехать с женой куда угодно'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like holding hands with my wife',
            uk: 'Мне нравится держаться с женой за руки'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I value the gifts my wife gives me',
            uk: 'Я ценю подарки, которые дарит мне жена'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I like when my wife says she loves me',
            uk: 'Мне нравится, когда жена говорит, что любит меня'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife sits next to me',
            uk: 'Мне нравится, когда жена садится рядом со мной'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My wife tells me I look good, and I like it',
            uk: 'Жена говорит, что я хорошо выгляжу, и мне это нравится'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I am happy when my wife and I spend time together',
            uk: 'Я счастлив, когда мы с женой проводим время вместе'
          },
          category: 'time'
        },
        {
          text: {
            en: 'Even the smallest gifts from my wife are important to me',
            uk: 'Для меня важны даже самые маленькие подарки жены'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I feel loved when my wife tells me she is proud of me',
            uk: 'Я чувствую себя любимым, когда жена говорит, что гордится мной'
          },
          category: 'words'
        },
        {
          text: {
            en: 'When my wife cooks for me, I know she loves me',
            uk: 'Когда жена готовит для меня ужин, я знаю, что она любит меня'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'It doesn\'t matter what we do, I just like spending time with my wife',
            uk: 'Не важно, чем мы занимаемся, но мне нравится проводить время с женой'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I always enjoy hearing words of support from my wife',
            uk: 'Мне всегда приятно слышать от жены слова поддержки'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'Even small things my wife does for me are more important than her words',
            uk: 'Даже небольшие дела, которые жена делает для меня, важнее любых ее слов'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I like hugging my wife',
            uk: 'Мне нравится обнимать жену'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s praise means a lot to me',
            uk: 'Похвала из уст жены много для меня значит'
          },
          category: 'words'
        },
        {
          text: {
            en: 'It\'s important to me when my wife gives me gifts that I like',
            uk: 'Для меня очень важно, когда жена дарит мне подарки, которые мне нравятся'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I\'m content when my wife is nearby',
            uk: 'Я доволен, когда жена находится рядом'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I like when my wife strokes my back',
            uk: 'Мне нравится, когда жена гладит меня по спине'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I appreciate my wife\'s positive reaction to my achievements',
            uk: 'Меня вдохновляет позитивная реакция жены на мои достижения'
          },
          category: 'words'
        },
        {
          text: {
            en: 'It means a lot to me when my wife helps me with things she doesn\'t like to do',
            uk: 'Для меня много значит, когда жена помогает мне в том, чего она не любит делать'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I never get tired of my wife\'s kisses',
            uk: 'Я никогда не устаю от поцелуев жены'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my wife shows interest in my affairs',
            uk: 'Мне нравится, когда жена проявляет интерес к моим делам'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can always count on my wife\'s help in my affairs',
            uk: 'Я всегда могу положиться на помощь жены в моих делах'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I always get excited when I receive gifts prepared for me by my wife',
            uk: 'Я всегда волнуюсь, когда открываю подарки, приготовленные мне женой'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife compliments my appearance',
            uk: 'Мне нравится, когда жена делает комплимент моей внешности'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like when my wife listens to my ideas without criticizing me',
            uk: 'Мне нравится, когда жена выслушивает мои идеи и не перебивает меня критикой'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I can\'t resist touching my wife when she\'s around',
            uk: 'Не могу удержаться, чтобы не прикоснуться к жене, когда она рядом'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My wife sometimes carries out my errands, and I value that',
            uk: 'Жена иногда выполняет мои поручения, и я ценю это'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife truly deserves a reward for everything she does for me',
            uk: 'Жена воистину заслуживает награду за все, что делает для меня'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I\'m often amazed by how thoughtful gifts my wife gives me',
            uk: 'Я часто удивляюсь, насколько продуманные подарки делает мне жена'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like when my wife gives me her full attention',
            uk: 'Мне нравится, когда жена все свое внимание посвящает мне'
          },
          category: 'time'
        },
        {
          text: {
            en: 'Keeping the house clean is a very important matter',
            uk: 'Содержание дома в чистоте — очень важное дело'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I eagerly wait for what my wife will give me for my birthday',
            uk: 'Я с нетерпением жду, что жена подарит мне на день рождения'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'I never get tired of listening to how my wife expresses her gratitude to me',
            uk: 'Я никогда не устаю слушать, как жена выражает мне свою признательность'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife constantly shows her love for me through gifts',
            uk: 'Жена постоянно показывает свою любовь ко мне через подарки'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'My wife expresses her love by helping me with household tasks',
            uk: 'Жена проявляет свою любовь, помогая мне сделать задуманное в доме'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'When I talk, my wife doesn\'t interrupt me, and I like that',
            uk: 'Когда я говорю, жена меня не перебивает, и мне это нравится'
          },
          category: 'time'
        },
        {
          text: {
            en: 'I never get tired of receiving gifts from my wife',
            uk: 'Мне никогда не надоест получать от жены подарки'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife always notices when I\'m tired and always asks how she can help',
            uk: 'Жена всегда замечает, если я устал, и всегда спрашивает, чем она может помочь'
          },
          category: 'service'
        },
        {
          text: {
            en: 'No matter where we go or walk, I like being with my wife',
            uk: 'Куда бы мы ни пошли или поехали, мне нравится быть с женой'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like making love with my wife',
            uk: 'Мне нравится заниматься любовью с женой'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like receiving unexpected gifts from my wife',
            uk: 'Мне нравится получать неожиданные подарки от жены'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s words of encouragement always give me confidence',
            uk: 'Слова поощрения жены всегда придают мне уверенности'
          },
          category: 'words'
        },
        {
          text: {
            en: 'I like watching movies together with my wife',
            uk: 'Мне нравится смотреть фильмы вместе с женой'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife gives me the most successful and best gifts',
            uk: 'Самые удачные и лучшие подарки мне делает жена'
          },
          category: 'gifts'
        },
        {
          text: {
            en: 'It\'s hard for me to resist hugging my wife',
            uk: 'Мне трудно удержаться, чтобы не обнять жену'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'My wife\'s help means a lot to me, despite her having her own work',
            uk: 'Для меня много значит помощь жены, несмотря на наличие у нее своей работы'
          },
          category: 'service'
        },
        {
          text: {
            en: 'I feel good when my wife tells me how she values me',
            uk: 'Мне становится хорошо, когда жена говорит, как она меня ценит'
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
        uk: ''
      },
      options: [
        {
          text: {
            en: 'I like to hug and kiss my wife even after a short separation',
            uk: 'Мне нравится обнимать и целовать жену даже после короткой разлуки'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'I like when my wife says that she believes in me',
            uk: 'Мне нравится, когда жена говорит, что она верит в меня'
          },
          category: 'words'
        }
      ]
    },
    // The example questions for women
    {
      id: 31,
      gender: 'women',
      text: {
        en: 'It means more to me when...',
        uk: 'Для мене більше значить, коли...'
      },
      options: [
        {
          text: {
            en: 'My partner puts their arm around me in public',
            uk: 'Мій партнер обіймає мене на публіці'
          },
          category: 'touch'
        },
        {
          text: {
            en: 'My partner surprises me with a meaningful gift',
            uk: 'Мій партнер дивує мене значущим подарунком'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 32,
      gender: 'women',
      text: {
        en: 'I feel most connected to my partner when...',
        uk: 'Я відчуваю найбільший зв\'язок з моїм партнером, коли...'
      },
      options: [
        {
          text: {
            en: 'We have deep, meaningful conversations',
            uk: 'Ми ведемо глибокі, змістовні розмови'
          },
          category: 'words'
        },
        {
          text: {
            en: 'We spend dedicated time together without distractions',
            uk: 'Ми проводимо виділений час разом без відволікань'
          },
          category: 'time'
        }
      ]
    }
  ];

  export default questions;