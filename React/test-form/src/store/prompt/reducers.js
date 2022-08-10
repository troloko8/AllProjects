import { CHANGE_PROMPTS } from './actions';

const prompts = [
  {
    name: 'Фамилия',
    text: 'Указывается фамилия в точном соответствии с указанной в документе. Между двойной фамилией ставится пробел.',
    example: ['ШМАЛОВ', 'Дудь']
  },
  {
    name: 'Имя Отчество',
    text: 'Указывается имя и отвество в точном соответствии с указанной в документе. Между двойной фамилией ставится пробел.',
    example: ['Анатолий Константинович', 'Андрей Адольфович']
  },
  {
    name: 'Фамилия Имя Отчество',
    text: 'Указывать ФИО нужно в сокращенном виде - Фамилия И.О.',
    example: ['Титаренко А.К.', 'Ананян В.В.']
  },
  {
    name: 'Место рождения - Государство',
    text: 'Указываейте страну рождения',
    example: []
  },
  {
    name: 'Город или населенный пункт',
    text: 'Указываейте город рождения в котором родился иностранный гражданин',
    example: ['Харьков', 'Париж']
  },
  {
    name: 'Гражданство (подданство)',
    text: 'Что-то там про гражнаство',
    example: ['Украина', 'Россия', 'Мадагаскар']
  },
  {
    name: 'Вид документа',
    text: 'Что-то про тип документа (много текста...)',
    example: ['333-3333']
  },
  {
    name: 'Серия документа',
    text: 'Серия документа - четыре буквы или цифры, без пробелов',
    example: ['IK53']
  },
  {
    name: 'Серия',
    text: 'Серия документа - четыре буквы или цифры, без пробелов',
    example: ['IK53']
  },
  {
    name: 'Номер документа',
    text: 'Номер документа, только арабские цифры без \'№\' ',
    example: ['1234564233',]
  },
  {
    name: 'Номер',
    text: 'Номер документа, только арабские цифры без \'№\' ',
    example: ['1234564233',]
  },
  {
    name: 'Профессия',
    text: 'Указывать в случае наличия',
    example: ['Програмист', 'Дизайнер', 'Аналист']
  },
  {
    name: 'Год рождения',
    text: 'Указывать только год рождения',
    example: ['195X']
  },
  {
    name: 'Серия и номер паспорта',
    text: 'Серия номера через проблем',
    example: ['IK53 2232XX']
  },
]


const defaultState = {
  name: 'default',
  text: 'Место для подсказок и примеров',
  example: []
}

export const promptReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PROMPTS:
      let prompt = prompts.find((el) => {
        if (el.name == action.payload) {
          return el
        }
      })
      prompt === undefined ? prompt = defaultState : prompt = prompt
      return {
        ...state,
        name: prompt.name,
        text: prompt.text,
        example: prompt.example
      }
    default:
      break
  }

  return state;
}