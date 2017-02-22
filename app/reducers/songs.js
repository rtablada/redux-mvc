export default (state, { type, ...action }) => {
  switch (type) {
    case 'SONGS@FINDALL_COMPLETE':
      return action.data;
    case 'SONGS@CREATE_START':
      return [...state, action.data];
    case 'SONGS@CREATE_COMPLETE':
      return state.map((curr) => {
          if (curr._id && curr._id !== action.data._id) {
            return curr;
          }

          return action.data;
        }, []);
    default:
      return state || [];
  }
});
