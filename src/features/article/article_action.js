// @flow

import axios from 'axios';

const APIArticle =
  'https://my-json-server.typicode.com/UADACID/fake-api/articles';
const APIError = 'http://www.mocky.io/v2/5e8321d13100005b00e641a8';

const reqArticle = (setLoading, setError, setData) => async (
  dispatch: DispatchProp
) => {
  let counter = 0;

  const requestAPIArticle = async () => {
    setLoading(true);
    setError(false);

    axios
      .get(APIArticle)
      .then(response => {
        setLoading(false);
        setError(false);
        setData(response?.data);
      })
      .catch(err => {
        const statusCode = err?.response?.status;
        // jalankan kembali request ke api selama 3 kali
        if (statusCode === 500 && counter <= 3) {
          counter = counter + 1;
          requestAPIArticle();
        } else {
          counter = 0;
          // pada kondisi ini otomatis proses request akan berhenti
          setError(true);
          setLoading(false);
        }
      });
  };

  return requestAPIArticle();
};

export {reqArticle};
