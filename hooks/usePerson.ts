import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const usePerson = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/people/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default usePerson;
