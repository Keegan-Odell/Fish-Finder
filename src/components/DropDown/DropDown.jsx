import React, { useState } from 'react';

function DropDown(props) {
	let [title, setTitle] = useState(props.title);

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
