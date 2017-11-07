
/**
 * @description Buffered event
 * @returns {function(*=, *=, *=)}
 */
export const bufferedEvent = () => {
  let timers = {};
  return (id, ms, clb) => {
    if ( ! id ) {
      timers[id] = '0';
    }
    if ( timers[id] ) {
      clearTimeout(timers[id]);
    }
    timers[id] = setTimeout(clb, ms);
  };
};

/**
 * @description Convert dashed string to camel case
 * @param {string} val
 * @returns {string}
 */
export const toCamelCase = (val) => {
  return val.split('-').map((word, index) => (index > 0 ? word.charAt(0).toUpperCase()+word.slice(1).toLowerCase() : word.toLowerCase())).join('');
};

/**
 * @description Convert dashed string to title
 * @param {string} val
 * @returns {string}
 */
export const titlize = (val) => {
  return val.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ');
};

/**
 * @description Check if type of value is array
 * @param {*} val
 * @return {boolean}
 */
export const isArray = (val) => Array.isArray(val);
