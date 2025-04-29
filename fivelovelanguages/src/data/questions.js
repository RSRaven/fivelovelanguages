// Sample questions for the Five Love Languages Quiz
// These are just two example questions. You'll need to add more to reach 30 questions.
// Each question has two options that correspond to different love languages.

const questions = [
    // Questions for men
    {
      id: 1,
      gender: 'men',
      text: {
        en: 'I feel loved when my partner...',
        uk: 'Я відчуваю любов, коли мій партнер...'
      },
      options: [
        {
          text: {
            en: 'Verbally compliments me on something I\'ve done',
            uk: 'Вербально хвалить мене за щось, що я зробив'
          },
          category: 'words'
        },
        {
          text: {
            en: 'Gives me a thoughtful gift',
            uk: 'Дарує мені обдуманий подарунок'
          },
          category: 'gifts'
        }
      ]
    },
    {
      id: 2,
      gender: 'men',
      text: {
        en: 'I would feel more appreciated if my partner...',
        uk: 'Я б відчував себе більш оціненим, якби мій партнер...'
      },
      options: [
        {
          text: {
            en: 'Helped me with something I need to get done',
            uk: 'Допомагав мені з чимось, що мені потрібно зробити'
          },
          category: 'service'
        },
        {
          text: {
            en: 'Set aside uninterrupted time to talk with me',
            uk: 'Виділяв безперервний час, щоб поговорити зі мною'
          },
          category: 'time'
        }
      ]
    },

    // Questions for women
    {
      id: 3,
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
      id: 4,
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