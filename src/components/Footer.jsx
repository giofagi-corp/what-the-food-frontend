import React from 'react'
import logo from '../images/logo.svg'

export default function Footer() {
	return (
		<div className='Footer'>
			<div className='FooterBody'>
				<div className='FooterColumn'>
					<img class='Footer-logo' src={logo} alt="logo" />
					<p>2022 What The Food ©</p>
				</div>
				<div className='FooterColumn'>
					<h4>What The Food</h4>
					<p>About Us</p>
					<p>Brand Book</p>
					<p>Press</p>
				</div>
				<div className='FooterColumn'>
					<h4>Support</h4>
					<p>F.A.Q's</p>
					<p>Security Advice</p>
					<p>You may also like</p>
				</div>
				<div className='FooterColumn'>
					<h4>Legal</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Cookies</p>
				</div>
			</div>
		</div>
	)
}
