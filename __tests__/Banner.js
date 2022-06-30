/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render } from '@testing-library/react'
 import Banner from '../components/Banner'
 
 describe('App', () => {
     it('배너가 렌더링 되어야 한다', () => {
       const { getByText } = render( <Banner />)
       const banner = getByText('Banner', {
         name: ''
       })
 
       expect(banner).toBeInTheDocument();
     })
 })