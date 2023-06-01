import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function DropDown(props) {
	const catchObject = useSelector((store) =>  store.catches.getCatchObject);
	let [title, setTitle] = useState(props.title);
	let propMod = props.propMod;

	return (
		<div className='sideBar'>
			<div className='dropdown'>
				<button className='dropbtn'>{title}</button>
				<div className='dropdown-content'>
					{props.info.map((info, index) => {
						return (
							<button
								onClick={(e) => {
									setTitle(info);
									catchObject[propMod] = info;
									console.log(catchObject);
								}}
								key={index}
								className='monthBtn'>
								{info}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default DropDown;
