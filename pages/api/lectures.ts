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

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(lecturesData)
}
