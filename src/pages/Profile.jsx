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
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		if (loading) {
			setTimeout(() => {
				if (data.find((profile) => profile.title === name) !== undefined) {
					document.title = data.find((item) => item.title === name).title;
					setAmenities(data.find((item) => item.title === name).Amenities);
					setProfile(data.find((item) => item.title === name));
					setHost(data.find((item) => item.title === name).host);
					setTags(data.find((item) => item.title === name).tags);
					setPictures(data.find((item) => item.title === name).pictures);
					setLoading(false);
				}
				// navigate to 404 page if no profile found
				else {
					window.location.href = '/404';
				}
			}, 100);
		}
	}, [name]);
	return (
		<section className='Profilecontainer'>
			<Carousel images={pictures} />
			<div className='ProfileHeader'>
				<div className='title-container'>
					<h1 className='profile-title'>{profile.name}</h1>
					<h2 className='subtitle'>{profile.location}</h2>
					<div className='amenities tagline-tag'>
						{tags.map((tags, index) => (
							<Tagline key={index} tags={tags} />
						))}
					</div>
				</div>
				<div className='people-section'>
					<div className='profile-rating'>
						<div className='profile-avatar'>
							<p className='avatar-name '>{host.name}</p>
							<img alt={`${host.name} avatar`} src={host.picture} />
						</div>
					</div>
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
