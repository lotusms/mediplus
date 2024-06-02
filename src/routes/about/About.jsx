import Hero from "../../components/global/Hero"
import banner from "../../assets/images/banners/signup-bg.jpg"
import Text from "../../components/global/Text"

const About = () => {
  return (
    <>
      <Hero 
        src={banner} 
        pageName="About Mediplus"
        pagedescription="In Mediplus we care about your health" />
      <div className="container py-4">
        <div className="items-center justify-center text-center p-5 w-full lg:w-2/3 mx-auto">
          <Text className="md:text-5xl text-3xl font-bold">
            We Are Always Ready To Help You & Your Family
          </Text>
        </div>
        <Text className="text-lg text-gray-500 mt-8">            
          {`For four decades, MedCare Health Services has been a cornerstone of the local community, offering comprehensive medical care with a personal touch. Founded in 1984, the company has grown from a small clinic into a multi-specialty medical facility, providing a wide range of services from primary care to specialized treatments. MedCare's dedicated team of physicians, nurses, and support staff are committed to delivering high-quality, patient-centered care. They have continually invested in the latest medical technologies and training to ensure the best outcomes for their patients, always striving to meet the evolving healthcare needs of the community.
          
          MedCare Health Services has not only been a healthcare provider but also a trusted partner in the community's well-being. Over the years, they have initiated numerous health education programs, free clinics, and wellness workshops to promote healthy living and preventive care. Their proactive approach in addressing public health concerns, such as vaccination drives and chronic disease management, has significantly contributed to the overall health and quality of life of the local population. MedCare's unwavering commitment to compassionate care and community service has earned them a reputation as a reliable and caring medical institution, deeply woven into the fabric of the community they serve.`}
        </Text>
      </div>  
    </>
  )
}

export default About