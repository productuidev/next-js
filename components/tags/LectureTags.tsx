import React from "react";
import { Tag } from "../../interface/Lecture"

interface Props {
  tagListData: [Tag]
}

const LectureTags = ({ tagListData } : Props): JSX.Element => {
  const tagList = tagListData.map((tag) => {
    return (<span key={tag.id}>{tag.name}</span>)
  })
  return (
    <div>{ tagList }</div>
  );
}

export default LectureTags;

