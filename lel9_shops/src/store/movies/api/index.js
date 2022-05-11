import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const getNftNetworkApi = () => {
  return () => {
    const dispatch = useDispatch();
    return useMemo(() => {
      return {};
    }, [dispatch]);
  };
};

export const useNftNetwork = getNftNetworkApi();
