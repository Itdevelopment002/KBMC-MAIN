import React from 'react'
import Corousel from '../Corousel/Corousel'
import ServicesHome from '../ServicesHome/ServicesHome'
import NewsSection from '../NewsSection/NewsSection'
import DepartmentDetails from '../DepartmentDetails/DepartmentDetails'
import BottomSlider from '../BottomSlider/BottomSlider'

const MainHome = () => {
  return (
    <>
    <Corousel />
    <ServicesHome />
    <NewsSection />
    <DepartmentDetails />
    <BottomSlider />
    </>
  )
}

export default MainHome