import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel/Carousel';
import Tagline from '../components/tagline/Tagline';

import data from '../data/data.json';

function Profile() {
  const { name } = useParams();
  const [profile, setProfile] = useState();
  const [host, setHost] = useState({
    name: '',
    picture: '',
  });
  const [pictures, setPictures] = useState();

  useEffect(() => {
    const loadData = async () => {
      const profile = data.find((item) => item.title == name);
      const hostData = data.find((item) => item.title == name).host;
      setProfile(profile);
      setHost(hostData);
      setPictures(profile.pictures);
    };
    loadData();
  }, [name]);

  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  return (
    <section className='Profilecontainer'>
      <Carousel images={pictures} />
      <div>
        <h1>{name}</h1>
        <div>
          <p>{host.name}</p>
          <img alt={`${host.name} avatar`} src={host.picture} />
        </div>
      </div>
      <div>
        <div>Ratings</div>
      </div>
      <div>
        <div>Description</div>
        <div>Equipments</div>
      </div>
    </section>
  );
}

export default Profile;
