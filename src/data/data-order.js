import { nanoid } from "nanoid";

export const subjects = [
  { id: 1, label: "Республика Адыгея" },
  { id: 2, label: "Республика Алтай" },
  { id: 3, label: "Республика Башкортостан" },
  { id: 4, label: "Республика Бурятия" },
  { id: 5, label: "Республика Дагестан" },
  { id: 6, label: "Республика Ингушетия" },
  { id: 7, label: "Кабардино-Балкарская Республика" },
  { id: 8, label: "Республика Калмыкия" },
  { id: 9, label: "Карачаево-Черкесская Республика" },
  { id: 11, label: "Республика Карелия" },
  { id: 12, label: "Республика Коми" },
  { id: 13, label: "Республика Крым" },
  { id: 14, label: "Республика Марий Эл" },
  { id: 15, label: "Республика Мордовия" },
  { id: 16, label: "Республика Саха (Якутия)" },
  { id: 17, label: "Республика Северная Осетия – Алания" },
  { id: 18, label: "Республика Татарстан" },
];

export const languages = [
  { id: 1, label: "Абазинский" },
  { id: 2, label: "Аварский" },
  { id: 3, label: "Адыгейский" },
  { id: 4, label: "Азербайджанский" },
  { id: 47, label: "Алтайский" },
  { id: 5, label: "Армянский" },
  { id: 6, label: "Башкирский" },
  { id: 48, label: "Белорусский" },
  { id: 7, label: "Бурятский" },
  { id: 8, label: "Горномарийский" },
  { id: 9, label: "Грузинский" },
  { id: 10, label: "Даргинский" },
  { id: 50, label: "Иврит" },
  { id: 11, label: "Ингушский" },
  { id: 21, label: "Кабардинский" },
  { id: 17, label: "Кабардино-Черкесский" },
  { id: 18, label: "Калмыцкий" },
  { id: 20, label: "Карачаевский" },
  { id: 19, label: "Карачаево-Балкарский" },
  { id: 12, label: "Карельский" },
  { id: 15, label: "Киргизский" },
  { id: 13, label: "Коми" },
  { id: 16, label: "Корякский" },
  { id: 14, label: "Крымскотатарский" },
  { id: 22, label: "Кумыкский" },
  { id: 23, label: "Лакский" },
  { id: 24, label: "Лезгинский" },
  { id: 26, label: "Марийский" },
  { id: 25, label: "Мордовский" },
  { id: 29, label: "Нанайский" },
  { id: 28, label: "Ненецкий" },
  { id: 51, label: "Нивхский" },
  { id: 27, label: "Ногайский" },
  { id: 30, label: "Осетинский" },
  { id: 32, label: "Русский" },
  { id: 31, label: "Селькупский" },
  { id: 38, label: "Табасаранский" },
  { id: 37, label: "Татарский" },
  { id: 33, label: "Удмуртский" },
  { id: 46, label: "Узбекский" },
  { id: 39, label: "Украинский" },
  { id: 40, label: "Финский" },
  { id: 34, label: "Хакасский" },
  { id: 41, label: "Хантыйский" },
  { id: 35, label: "Черкесский" },
  { id: 36, label: "Чеченский" },
  { id: 42, label: "Чувашский" },
  { id: 49, label: "Чукотский" },
  { id: 44, label: "Эвенский" },
  { id: 43, label: "Эвенкийский" },
  { id: 45, label: "Якутский" },
  { id: 52, label: "нет в списке" },
];

export const curators = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
];

export const specialization = [
  { id: nanoid(), sp: "Учитель родного языка" },
  { id: nanoid(), sp: "Учитель русского языка и литературы" },
  { id: nanoid(), sp: "Педагог изобразительного искусства и ДПИ" },
  { id: nanoid(), sp: "Педагог по вокальному и инструментальному искусству" },
  { id: nanoid(), sp: "Педагог хореографического искусства" },
  { id: nanoid(), sp: "Воспитатель, старший воспитатель дошкольных ОУ" },
  { id: nanoid(), sp: "Фотограф" },
  { id: nanoid(), sp: "Другое" },
];

export const nom = [
  { id: nanoid(), nomination: "Любые на родном языке" },
  { id: nanoid(), nomination: "ИЗО" },
  { id: nanoid(), nomination: "ДПИ" },
  { id: nanoid(), nomination: "Вокал" },
  { id: nanoid(), nomination: "Хореография" },
  { id: nanoid(), nomination: "Фотография" },
  { id: nanoid(), nomination: "Другое" },
];
