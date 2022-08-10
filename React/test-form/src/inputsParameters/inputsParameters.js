export const InputsParameters = [
  {
    title: 'Данные иностранного гражданина',
    typeTitle: 'main',
    type: ['text'],
    textInputs: [['Фамилия', 'Имя Отчество', 'Гражданство (подданство)']],
    typeInputText: 'last',
    indexDataInput: [false]
  },
  {
    title: 'Дата и место рождения',
    typeTitle: 'additional',
    type: ['text'],
    textInputs: [['День рождения', 'Место рождения - Государство', 'Город или населенный пункт']],
    typeInputText: 'last',
    indexDataInput: [0]
  },
  {
    title: 'Пол',
    typeTitle: 'additional',
    type: ['checkbox'],
    textInputs: [['Мужской', 'Женский']],
    typeInputText: 'none',
    indexDataInput: [false]
  },
  {
    title: 'Документ удостоверяющий личность',
    typeTitle: 'additional',
    type: ['text'],
    textInputs: [['Вид документа', 'Серия документа', 'Номер документа', "Дата выдачи", "Действителен до"]],
    typeInputText: 'first',
    indexDataInput: [3, 4]
  },
  {
    title: 'Данные документа подтверждающего право на пребывания в РФ',
    typeTitle: 'main',
    type: ['checkbox', 'text'],
    textInputs: [['Виза', 'Вид на жительство', "Разрешение на временное проживание"], ["Серия документа", "Номер документа", "Дата выдачи", "Действителен до"]],
    typeInputText: 'none',
    indexDataInput: [2, 3],
    additional: 'addTitle'
  },
  {
    title: 'Цель въезда в РФ',
    typeTitle: 'additional',
    type: ['checkbox', 'text'],
    textInputs: [['Служебная', 'Туризм', "Деловая", "Учеба", "Работа", "Частная", "Транзит", "Гуманитарная", "Другая"], ["Профессия", "Дата въезда", "Дата выезда"]],
    typeInputText: 'first',
    indexDataInput: [1, 2]
  },
  {
    title: 'Данные миграционной карты',
    typeTitle: 'additional',
    type: ['text'],
    textInputs: [["Серия", "Номер"]],
    typeInputText: 'none',
    indexDataInput: [false]
  },
  {
    title: 'Сведения о законном представителе',
    typeTitle: 'additional',
    type: ['text'],
    textInputs: [["Фамилия Имя Отчество", "Год рождения", "Серия и номер паспорта"]],
    typeInputText: 'first',
    indexDataInput: [false],
    additional: 'addSpan'
  },
  {
    title: 'Пол',
    typeTitle: 'additional',
    type: ['checkbox'],
    textInputs: [["Мужской", "Женский"]],
    typeInputText: 'none',
    indexDataInput: [false]
  },
]

