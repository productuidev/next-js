/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render } from '@testing-library/react'
 import LectureItem from '../components/lecture/LectureItem'
 
 describe('강의 아이템은', () => {
     it('섬네일을 가지고 있어야 한다', () => {
       const { getByAltText } = render( <LectureItem />)
       const Thumb = getByAltText('초격차 패키지')
 
       expect(Thumb).toBeInTheDocument();
     })

     it('뱃지를 가지고 있어야 한다', () => {
      const { getByText } = render( <LectureItem />)
      const badge = getByText('평생소장')

      expect(badge).toBeInTheDocument();
    })

    it('강의 제목을 가지고 있어야 한다', () => {
      const { getByText } = render( <LectureItem />)
      const Title = getByText('초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영')

      expect(Title).toBeInTheDocument();
    })

    it('강의 설명을 해야 한다', () => {
      const { getByText } = render( <LectureItem />)
      const Desc = getByText('개발/운영/아키텍트 전 과정 마스터')

      expect(Desc).toBeInTheDocument();
    })
 })