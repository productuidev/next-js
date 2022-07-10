import { useQuery } from 'react-query';

const useLectures = (categories: string) => {
  if (categories) {
    console.log('카테고리에 따른 분기를 처리해야 합니다.');
  }

  return useQuery('lecture_list', () => {
    return fetch(`/api/lectures?categories=${categories}`).then((res) => {
      return res.json();
    }).then((res) => {
      return res;
    })
  })
}

export default useLectures;