import { IAirInfoTableRow } from './air-info-table/models/air-info-table-row';

export const airInfoTableValues: IAirInfoTableRow[] = [
  {
    values: {
      index: '0 - 50',
      indexDescr: 'Добре',
      descr:
        'Якість повітря вважається задовільною, і забруднення повітря видається незначним у межах норми.',
    },
    bgColorClassNames: 'bg-green-300 border-green-300',
  },
  {
    values: {
      index: '51 - 100',
      indexDescr: 'Задовільно',
      descr:
        'Якість повітря є прийнятною; однак деякі забруднювачі можуть становити небезпеку для людей, які є особливо чутливими до забруднення повітря.',
    },
    bgColorClassNames: 'bg-yellow-300 border-yellow-300',
  },
  {
    values: {
      index: '101 - 150',
      indexDescr: "Небезпечно для здоров'я чутливих груп населення",
      descr:
        "Члени вразливих груп можуть відчути вплив на здоров'я. Широка громадськість, ймовірно, не буде зачеплена.",
    },
    bgColorClassNames: 'bg-orange-300 border-orange-300',
  },
  {
    values: {
      index: '151 - 200',
      indexDescr: "Небезпечно для здоров'я",
      descr:
        "Кожна людина може почати відчувати наслідки для здоров'я; члени вразливих груп можуть мати більш серйозні наслідки для здоров'я.",
    },
    bgColorClassNames: 'bg-red-400 border-red-400',
  },
  {
    values: {
      index: '201 - 300',
      indexDescr: "Дуже шкідливо для здоров'я",
      descr:
        'Медичні попередження про надзвичайні ситуації. Ймовірність ураження всього населення більша.',
    },
    bgColorClassNames: 'bg-violet-500 border-violet-500',
  },
  {
    values: {
      index: '300+',
      indexDescr: "Максимально шкідливо для здоров'я",
      descr:
        "Тривога для здоров'я: кожен може зіткнутися з більш серйозними наслідками для здоров'я.",
    },
    bgColorClassNames: 'bg-rose-500 border-rose-500',
  },
];
