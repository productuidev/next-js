// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const data = {
  lectureList : [
    {
      id: 0,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: ['평생소장', 'AWS', 'DevOps'],
      description: '개발/운영/아키텍트 전 과정 마스터',
      thumb: '/thumb.jpg',
    }
  ]
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'productuidev' })
}
