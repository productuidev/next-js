// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const mockCategory = {
  id: 0,
  name: '프로그래밍',
}

const mockTags = [
  { id: 0, title: '평생소장' },
  { id: 1, title: 'AWS' },
  { id: 2, title: 'DevOps' },
]

const lecturesData = {
  lectureList : [
    {
      id: 0,
      category: mockCategory,
      title: '한 번에 끝내는 AWS 인프라 구축과 DevOps 운영 초격차 패키지',
      tags: mockTags,
      description: '개발/운영/아키텍트 전 과정 마스터',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '한 번에 끝내는 프론트엔드 개발 초격차 패키지',
      tags: mockTags,
      description: '시간당 1천원 대 수강료 한 번 결제로 평생소장! 프론트엔드 공부, 뭐부터 시작해야 하지?',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: 'Next.js 완전 정복 : 확장성 높은 커머스 서비스 구축하기',
      tags: mockTags,
      description: '블로그와 커머스 서비스로 개발&서버리스 배포까지',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 3,
      category: mockCategory,
      title: 'TypeScript를 활용한 함수형 프로그래밍 온보딩',
      tags: mockTags,
      description: '국내 최초 실무 맞춤형 함수형 프로그래밍 인강',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    }
  ]
}

const lecturesDataScience = {
  lectureList : [
    {
      id: 0,
      category: mockCategory,
      title: '딥러닝/머신러닝을 활용한 시계열 데이터 분석',
      tags: mockTags,
      description: '시계열 데이터 분석에 딥러닝/머신러닝까지 활용하는 역량을 기를 수 있는 강의',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '세계 3등에게 배우는 실무 밀착 데이터 시각화 올인원 패키지',
      tags: mockTags,
      description: '초보자도 30분 만에 코딩 없이 인사이트까지 얻는 대시보드, 이 강의 들으면 나도 가능!',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: 'The Red: 딥러닝 뉴럴네트워크 GNN',
      tags: mockTags,
      description: '최근 소셜 네트워크나 지식 그래프 등의 발전으로 각광 받고 있는 GNN을 배워보세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ]
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.query.categories === 'Programming'){
    //console.log(req.query.categories)
    res.status(200).json(lecturesData);
  }
  if(req.query.categories === 'DataScience'){
    res.status(200).json(lecturesDataScience);
  }
  res.status(200).json(lecturesData)
}
