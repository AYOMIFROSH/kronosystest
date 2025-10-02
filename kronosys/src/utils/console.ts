const isDev = import.meta.env.MODE === "development";

export const devLog = {
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args);
  },
  error: (...args: unknown[]) => {
    if (isDev) console.error(...args);
  },
  warn: (...args: unknown[]) => {
    if (isDev) console.warn(...args);
  },
  info: (...args: unknown[]) => {
    if (isDev) console.info(...args);
  },
};