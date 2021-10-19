export const capitalize = (s: string): string => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getRandomFromArray = <T>(
  array: T[],
  count: number = array.length
): T[] => {
  const shuffledArray = shuffleArray(array);
  const randomNumber = getRandomNumber(1, count);
  if (randomNumber >= array.length) return array;
  return shuffledArray.slice(0, randomNumber);
};

export abstract class EnumHelpers {
  static getNamesAndValues<T extends number>(e: any) {
    return EnumHelpers.getNames(e).map(n => ({ name: n, value: e[n] as T }));
  }

  static getNames(e: any) {
    return EnumHelpers.getObjValues(e).filter(
      v => typeof v === 'string'
    ) as string[];
  }

  static getValues<T extends number>(e: any) {
    return EnumHelpers.getObjValues(e).filter(
      v => typeof v === 'number'
    ) as T[];
  }

  static getSelectList<T extends number, U>(
    e: any,
    stringConverter: (arg: U) => string
  ) {
    const selectList = new Map<T, string>();
    this.getValues(e).forEach(val =>
      selectList.set(val as T, stringConverter((val as unknown) as U))
    );
    return selectList;
  }

  static getSelectListAsArray<T extends number, U>(
    e: any,
    stringConverter: (arg: U) => string
  ) {
    return Array.from(this.getSelectList(e, stringConverter), value => ({
      value: value[0] as T,
      presentation: value[1],
    }));
  }

  private static getObjValues(e: any): (number | string)[] {
    return Object.keys(e).map(k => e[k]);
  }
}
