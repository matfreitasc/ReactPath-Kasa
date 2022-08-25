import React, { Fragment } from 'react';
import Banner from '../components/banner/Banner';
import bannerImage from '../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
import Dropdown from '../components/dropdown/Dropdown';

function About() {
  return (
    <Fragment>
      <Banner src={bannerImage} />
      <div className='dropdowns-container flex-wrap'>
        <Dropdown
          width='width-85'
          title={'Reliability'}
          description={
            'The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.'
          }
        />
        <Dropdown
          width='width-85'
          title={'Respect'}
          description={
            'Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.'
          }
        />
        <Dropdown
          width='width-85'
          title={'Service'}
          description={
            'Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.'
          }
        />
        <Dropdown
          width='width-85'
          title={'Safty'}
          description={
            "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."
          }
        />
      </div>
    </Fragment>
  );
}

export default About;
