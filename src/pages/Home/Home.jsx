import React from 'react'
import Banner from '../../components/pages/Home/Banner'
import MainItem from '../../components/shared/MainItem/MainItem'
import Navbar from '../../components/shared/Navbar/Navbar'
import img1 from '../../assets/Home/img1.jpg'
import img3 from '../../assets/Home/img3.jpg'
import img4 from '../../assets/Home/img4.jpg'

const Home = () => {
  return (
    <div className='home-page shared-page'>
      <Navbar />
      <Banner />
      <MainItem
        title='Empowering girls to choose a career in ICT'
        text="Outkos Academy is partnering up with KosovaGirls to offer opportunities for girls and women to learn computer science, coding and apps development, also to be well-placed for a successful career in the ICT sector. The jobs of the future in many industries will be driven by technology and innovation, that's why learning tech skills at a young age will help girls become economically independent."
        path='/'
        linkText='Learn More'
        img={img1}
      />
      <MainItem
        title='Transparent teaching'
        text="Outkos Academy is a trustful partner of KosovaEducation. We practice transparent teaching and learning methods to help students understand why and how they are learning courses content in particular ways. We also have education partnerships with many training and educational institutions."
        path='/'
        linkText='Learn More'
        img={img3}
        imageFirst
      />
      <MainItem
        title='Create your profile and share your achievements'
        text="Create your account in Outkos Academy, choose a course, learn and get a professional certificate. Every course comes with a shareable certificate to verify your skills."
        img={img4}
      />


    </div>
  )
}

export default Home