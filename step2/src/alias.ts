// type alias
type skill = [number, string, number];

const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'js', 30];

const allSkill: skill[] = [
  [1, 'html', 10],
  [2, 'css', 20],
  [3, 'js', 30],
]

type Module = {
  index: number;
  title: string;
  hours: number;
};
type FinalProject = {
  projectDescription: string;
  projectHours: number;
};
type ModuleWithFinalProject = Module & FinalProject;
type ModuleWithFinalProject2 = Module | FinalProject;

const m1: Module = { // ошибка при он совпадении полей с type Module
  index: 1,
  title: 'основы html',
  hours: 12,
}
const m2: Module = { // ошибка при он совпадении полей с type Module
  index: 2,
  title: 'основы css',
  hours: 22,
}
const m3: Module = { // ошибка при он совпадении полей с type Module
  index: 3,
  title: 'основы js',
  hours: 33,
}

const mF: FinalProject = { 
  projectDescription: 'основы FinalProject',
  projectHours: 23,
}

const mwf: ModuleWithFinalProject = { // ок только со всеми полями обоих типов
  index: 3,
  title: 'основы js',
  hours: 33,

  projectDescription: 'основы js FinalProject',
  projectHours: 23,
}
const mwf2: ModuleWithFinalProject2 = { // ок с полями хотя бы одного из типов
  index: 3,

  projectDescription: 'основы js FinalProject',
  projectHours: 23,
}

const course1: readonly Module[] = [ // readonly
  {
    index: 1,
    title: 'основы html',
    hours: 12,
  },
  {
    index: 2,
    title: 'основы css',
    hours: 22,
  },
  {
    index: 3,
    title: 'основы js',
    hours: 33,
  },
];
// const course2: readonly Array<Module> = [ // другой вариант описания. readonly - error
const course2: ReadonlyArray<Module> = [ // другой вариант описания. readonly - ReadonlyArray
  {
    index: 1,
    title: 'основы html',
    hours: 12,
  },
  {
    index: 2,
    title: 'основы css',
    hours: 22,
  },
  {
    index: 3,
    title: 'основы js',
    hours: 33,
  },
];
