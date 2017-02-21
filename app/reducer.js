export default (state, { type, ...action }) => {
  switch (type) {
    case 'SONGS@FINDALL_START':
      return {
        ...state,
        fetching: true,
      };
    case 'SONGS@FINDALL_COMPLETE':
      return {
        ...state,
        fetching: false,
        songs: action.data,
      };
    case 'SONGS@CREATE_START':
      return {
        ...state,
        fetching: true,
        songs: [...state.songs, action.data],
      };
    case 'SONGS@CREATE_COMPLETE':
      return {
        ...state,
        fetching: false,
        songs: state.songs.map((curr) => {
          if (curr._id && curr._id !== action.data._id) {
            return curr;
          }

          return action.data;
        }, []),
      };
    default:
      return state || {
        fetching: false,
        songs: [],
      };
  }
}
