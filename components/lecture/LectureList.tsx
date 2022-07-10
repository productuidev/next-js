import React from "react";
import LectureItem from './LectureItem';
import { useQuery } from 'react-query'

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useQuery('lecture_list', () => {
    return fetch('/api/lectures').then((res) => {
      return res.json();
    }).then((res) => {
      return res;
    })
  })

  console.log(data);

  return (
    <div>
      <LectureItem />
    </div>
  )
}

export default LectureList;