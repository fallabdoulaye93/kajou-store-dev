const consoleError = console.error.bind(console);
console.error = (errObj, ...args) => {
  if (process.env.NODE_ENV === 'development' && typeof errObj === 'string' && args.includes('findDOMNode')) {
    return;
  }
  consoleError(errObj, ...args);
};

export default {};
