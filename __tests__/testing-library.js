/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

describe('App', () => {
    it('메뉴가 렌더링 되어야 한다', () => {
      const { getByRole } = render( <Index /> )
      const menu = getByRole('navigation', {
        name: 'fastcampus'
      })

      expect(menu).toBeInTheDocument();
    })

    it('배너가 렌더링 되어야 한다', () => {
      const { getByRole } = render( <Index />)
      const banner = getByRole('banner')

      expect(banner).toBeInTheDocument();
    })

    it('강의 목록이 렌더링 되어야 한다', () => {
      const { getByTitle } = render( <Index />)
      const lectureList = getByTitle('lectureList',{})

      expect(lectureList).toBeInTheDocument()
    })

    // it('renders a heading', () => {
    //     const { getByRole } = render( <Index /> )

    //     const heading = getByRole('heading', {
    //         name: /welcome to next\.js!/i,
    //     })

    //     expect(heading).toBeInTheDocument()
    // })
})