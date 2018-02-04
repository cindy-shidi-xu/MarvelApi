export const SEARCH_FAILURE = 'EC_SEARCH_FAILURE';
export const SEARCH_FAILURE_DESC = 'Unable to complete the search';
export const INVALID_KEY = 'EC_INVALID_KEY';
export const INVALID_KEY_DESC = 'Invalid key';

export const reportError = (errorCode, errorDescription) => {
  return {
    errorCode: errorCode,
    errorDescription: errorDescription
  };
};
