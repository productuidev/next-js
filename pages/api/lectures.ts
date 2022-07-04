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
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트 전 과정 마스터',
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
