import React from "react";
import LectureItem from './LectureItem';
import { useQuery } from 'react-query'

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useQuery('lecture_list', () => {
    fetch('/api/lectures').then((res) => {
      return res.json();
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