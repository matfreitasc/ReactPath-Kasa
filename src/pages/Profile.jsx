import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel/Carousel';
import Dropdown from '../components/dropdown/Dropdown';
import Ratings from '../components/ratings/Ratings';
import Tagline from '../components/tagline/Tagline';

import data from '../data/data.json';

function Profile() {
  const { name } = useParams();
  const [profile, setProfile] = useState({});
  const [host, setHost] = useState({
    name: '',
    picture: '',
  });
  const [tags, setTags] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [pictures, setPictures] = useState();

  useEffect(() => {
    const loadData = async () => {
      setAmenities(data.find((item) => item.title === name).Amenities);
      setProfile(data.find((item) => item.title === name));
      setHost(data.find((item) => item.title === name).host);
      setTags(data.find((item) => item.title === name).tags);
      setPictures(profile.pictures);
    };
    loadData();
  }, [name, profile]);

  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  return (
    <section className='Profilecontainer'>
      <Carousel images={pictures} />
      <div className='title-flex'>
        <div className='title-container'>
          <h1 className='profile-title'>{name}</h1>
          <h2 className='subtitle'>{profile.location}</h2>
        </div>
        <div className='profile-avatar'>
          <p>{host.name}</p>
          <img alt={`${host.name} avatar`} src={host.picture} />
        </div>
      </div>
      <div className='tagline-tag'>
        <div className='amenities'>
          {tags.map((tags, index) => (
            <Tagline key={index} tags={tags} />
          ))}
        </div>
        <div className='profile-rating'>
          <Ratings value={profile.rating} />
        </div>
      </div>
      <div className='dropdowns-container'>
        <Dropdown title='Description' description={profile.description} />
        <Dropdown title='Equipments' amenities={amenities} />
      </div>
    </section>
  );
}

export default Profile;
