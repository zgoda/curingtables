/**
 * Tables for wet curing meats.
 *
 * There are 2 general types, "classic" which are according to industry norms observed
 * before 2004 and "modern" which are in common use these days. Earlier used more salt
 * to allow for for lower process temperatures but now the salt content is considered
 * much too high and nutrition boffins rather opt for higher process temperatures in
 * exchange for lower salt content.
 *
 * Additionally, each of these types provides low-to-high range of salt content.
 *
 * When curing meats for home consumption it's generally advisable to start with "low
 * modern" table and go up from there, not the other way around.
 *
 * "Classic" norms required injecting part of brine in the meat when chunk weight
 * exceeded 0.8 kg, now the threshold is lower and common advice is to inject always
 * if chunk size exceeds 1 cm per 1 day in brine in all directions. In general weaker
 * brines require more injection.
 *
 * Short curing process requires massaging meat in 6-12 hours intervals.
 *
 * Water to meat ratio: 0.4
 * Injection size ratio: 0.06 (60 ml)
 * Short curing process: up to (and including) 3 days
 */

export const CuringDays = Object.freeze({
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT_TO_TEN: 8,
  ELEVEN_TO_THIRTEEN: 11,
});

const DAYS = [
  CuringDays.ONE,
  CuringDays.TWO,
  CuringDays.THREE,
  CuringDays.FOUR,
  CuringDays.FIVE,
  CuringDays.SIX,
  CuringDays.SEVEN,
];

export const TableType = Object.freeze({
  CLASSIC: 'classic',
  MODERN: 'modern',
});

export const WATER_RATIO = 0.4; // kgms or litres
export const INJECT_SIZE = 0.06; // litres
export const MASSAGE_THRESHOLD = 4; // massage required if curing period shorter

const SALT_CLASSIC_HIGH = new Map([
  [CuringDays.ONE, 80],
  [CuringDays.TWO, 74],
  [CuringDays.THREE, 68],
  [CuringDays.FOUR, 62],
  [CuringDays.FIVE, 58],
  [CuringDays.SIX, 54],
  [CuringDays.SEVEN, 50],
  [CuringDays.EIGHT_TO_TEN, 46],
  [CuringDays.ELEVEN_TO_THIRTEEN, 42],
]);

const INJECT_RATE_CLASSIC_HIGH = new Map([
  [CuringDays.ONE, 4],
  [CuringDays.TWO, 4],
  [CuringDays.THREE, 3],
  [CuringDays.FOUR, 1.5],
  [CuringDays.FIVE, 1],
  [CuringDays.SIX, 1],
  [CuringDays.SEVEN, 1],
  [CuringDays.EIGHT_TO_TEN, 1],
  [CuringDays.ELEVEN_TO_THIRTEEN, 1],
]);

const SALT_CLASSIC_LOW = new Map([
  [CuringDays.ONE, 76],
  [CuringDays.TWO, 70],
  [CuringDays.THREE, 64],
  [CuringDays.FOUR, 60],
  [CuringDays.FIVE, 56],
  [CuringDays.SIX, 52],
  [CuringDays.SEVEN, 48],
  [CuringDays.EIGHT_TO_TEN, 44],
  [CuringDays.ELEVEN_TO_THIRTEEN, 40],
]);

const INJECT_RATE_CLASSIC_LOW = new Map([
  [CuringDays.ONE, 5],
  [CuringDays.TWO, 4],
  [CuringDays.THREE, 3],
  [CuringDays.FOUR, 2],
  [CuringDays.FIVE, 1.5],
  [CuringDays.SIX, 1.4],
  [CuringDays.SEVEN, 1.3],
  [CuringDays.EIGHT_TO_TEN, 1.2],
  [CuringDays.ELEVEN_TO_THIRTEEN, 1],
]);

const SALT_MODERN_HIGH = new Map([
  [CuringDays.ONE, 76],
  [CuringDays.TWO, 72],
  [CuringDays.THREE, 64],
  [CuringDays.FOUR, 52],
  [CuringDays.FIVE, 48],
  [CuringDays.SIX, 46],
  [CuringDays.SEVEN, 42],
  [CuringDays.EIGHT_TO_TEN, 38],
  [CuringDays.ELEVEN_TO_THIRTEEN, 34],
]);

const INJECT_RATE_MODERN_HIGH = new Map([
  [CuringDays.ONE, 4],
  [CuringDays.TWO, 4],
  [CuringDays.THREE, 2],
  [CuringDays.FOUR, 1.5],
  [CuringDays.FIVE, 1],
  [CuringDays.SIX, 1],
  [CuringDays.SEVEN, 1],
  [CuringDays.EIGHT_TO_TEN, 1],
  [CuringDays.ELEVEN_TO_THIRTEEN, 1],
]);

const SALT_MODERN_LOW = new Map([
  [CuringDays.ONE, 72],
  [CuringDays.TWO, 68],
  [CuringDays.THREE, 60],
  [CuringDays.FOUR, 50],
  [CuringDays.FIVE, 46],
  [CuringDays.SIX, 44],
  [CuringDays.SEVEN, 40],
  [CuringDays.EIGHT_TO_TEN, 36],
  [CuringDays.ELEVEN_TO_THIRTEEN, 32],
]);

const INJECT_RATE_MODERN_LOW = new Map([
  [CuringDays.ONE, 5],
  [CuringDays.TWO, 4],
  [CuringDays.THREE, 3],
  [CuringDays.FOUR, 2],
  [CuringDays.FIVE, 1.5],
  [CuringDays.SIX, 1.4],
  [CuringDays.SEVEN, 1.3],
  [CuringDays.EIGHT_TO_TEN, 1.2],
  [CuringDays.ELEVEN_TO_THIRTEEN, 1],
]);

const TYPE_TO_TABLE = new Map([
  [TableType.CLASSIC, { low: SALT_CLASSIC_LOW, high: SALT_CLASSIC_HIGH }],
  [TableType.MODERN, { low: SALT_MODERN_LOW, high: SALT_MODERN_HIGH }],
]);

const TYPE_TO_INJECTION = new Map([
  [TableType.CLASSIC, { low: INJECT_RATE_CLASSIC_LOW, high: INJECT_RATE_CLASSIC_HIGH }],
  [TableType.MODERN, { low: INJECT_RATE_MODERN_LOW, high: INJECT_RATE_MODERN_HIGH }],
]);

/**
 * @param {string} table
 * @param {number} days
 * @returns {import('..').Rate}
 */
export function getSaltRate(table, days) {
  const { low, high } = TYPE_TO_TABLE.get(table);
  /** @type {number} */
  let curingDays;
  if (days >= 8 && days < 11) {
    curingDays = CuringDays.EIGHT_TO_TEN;
  } else if (days > 10) {
    curingDays = CuringDays.ELEVEN_TO_THIRTEEN;
  } else {
    curingDays = DAYS[days - 1];
  }
  return { low: low.get(curingDays), high: high.get(curingDays) };
}

/**
 * @param {string} table
 * @param {number} days
 * @returns {import('..').Rate}
 */
export function getInjectionRate(table, days) {
  const { low, high } = TYPE_TO_INJECTION.get(table);
  /** @type {number} */
  let curingDays;
  if (days >= 8 && days < 11) {
    curingDays = CuringDays.EIGHT_TO_TEN;
  } else if (days > 10) {
    curingDays = CuringDays.ELEVEN_TO_THIRTEEN;
  } else {
    curingDays = DAYS[days - 1];
  }
  return { low: low.get(curingDays), high: high.get(curingDays) };
}
