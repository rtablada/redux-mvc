export default (state, { type }) => {
  switch (type) {
    case 'SONGS@FINDALL_START':
      return true;
    case 'SONGS@FINDALL_COMPLETE':
      return false;
    case 'SONGS@CREATE_START':
      return true;
    case 'SONGS@CREATE_COMPLETE':
      return false;
    default:
      return state || false;
  }
};
