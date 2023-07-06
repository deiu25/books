import { useContext } from 'react';
import { IdeasContext } from '../context/ideas';


function useIdeasContext() {
  return useContext(IdeasContext);
}

export default useIdeasContext;