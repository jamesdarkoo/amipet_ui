// import dayjs from 'dayjs'
// import moment from 'moment'
// import { DateTime } from 'luxon'
import { monthNames } from 'utils/';

export function stringToTestId(string) {
  // eslint-disable-next-line no-useless-escape
  return string.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g, '');
}
export function makeJSDateObject(date) {
  // to add those libraries
  // if (date instanceof dayjs) {
  //   return date.clone().toDate()
  // }
  // if (moment.isMoment(date)) {
  //   return date.clone().toDate()
  // }
  // if (date instanceof DateTime) {
  //   return date.toJSDate()
  // }
  if (date instanceof Date) {
    return { date: new Date(date.getTime()), isDate: true };
  }
  return { date, isDate: false }; // handle case with invalid input
}
export function copy(text) {
  return navigator.clipboard.writeText(text);
}
export function loadScript(src, position) {
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = src;
  position.appendChild(script);
  return script;
}
export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export function templateString(template, pattern = { open: '{', close: '}' }) {
  const regExp = new RegExp(`${pattern.open}(\\w+)${pattern.close}`, 'ig');
  return template.match(regExp);
}
/**
 * @param  {Date} date
 * @param  {string} template
 * @param  {object} p
 * @param  {'string to close'} p.open parámeter to open the regexp to find the template
 * @param  {'string to close'} p.close parámeter to close the regexp to find the template
 * @returns {'string of date template'}
 */
export function templateDate(date, template, p = { open: '{', close: '}' }) {
  const regExp = new RegExp(`${p.open}(\\w+)${p.close}`, 'ig');
  const str = template.replace(regExp, (found) => {
    const rexg = new RegExp(`${p.open}|${p.close}`, 'ig');
    found = found.replace(rexg, '');
    if (found === 'getMonthName') {
      return monthNames[new Date(date).getMonth()];
    }
    return new Date(date)[found]();
  });
  return str;
}

export const getRandomArrays = (number, array) => {
  const getRandomArray = (array) =>
    array[Math.floor(Math.random() * array.length)];
  const strings = [];
  while (strings.length < number) {
    const string = getRandomArray(array);
    if (strings.indexOf(string) === -1) strings.push(string);
  }
  return strings;
};

export const getRandom = (max, min) =>
  Math.round(Math.random() * (max - min) + min);
