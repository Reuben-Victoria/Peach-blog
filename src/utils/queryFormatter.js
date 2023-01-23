const queryFormatter = (params) => {
  if (params) {
    return Object?.keys(params)
      .map((key) => params[key] && `${key}=${params[key]}`)
      .join('&');
  }
  return '&';
};

export default queryFormatter;
