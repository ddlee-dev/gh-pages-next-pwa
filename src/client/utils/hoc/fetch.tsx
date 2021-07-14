import { ComponentType, useState, useEffect } from 'react';
import { publicPath, loadData } from '../fetch';

// eslint-disable-next-line
type WrappedComponentType = ComponentType<any>;

export const fetchData = (WrappedComponent: WrappedComponentType, dataPath = '') => {
  return (props: Record<string, unknown>): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<boolean | Record<string, unknown>>(false);
    const publicDataPath = publicPath(dataPath);

    useEffect(() => {
      const fetchFileData = async () => {
        try {
          const fetchedData = await loadData(publicDataPath);
          if (fetchedData) {
            setLoading(false);
            setData(fetchedData);
          }
        } catch (err) {
          setLoading(false);
          setData(false);
          console.error(`There was an issue with fetching the data from ${publicDataPath}`);
        }
      };
      fetchFileData();
    }, [publicDataPath, loading]);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (!loading && !data) return <div>Error Page</div>;

    // if (loading) return <></>;
    // if (!loading && !data) return <></>;
    return <WrappedComponent {...props} data={data} />;
  };
};
