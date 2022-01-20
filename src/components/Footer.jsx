import * as React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <div className='Footer'>
        <div className='FooterBody'>
            <div className='FooterColumn'>
                <p>You may also like</p>
                <p>Copyright © 2022 What The Food.</p>
            </div>
            <div className='FooterColumn'>
                <h4>What The Food</h4>
                <p>You may also like</p>
                <p>You may also like</p>
                <p>You may also like</p>
            </div>
            <div className='FooterColumn'>
                <h4>Support</h4>
                <p>Support</p>
                <p>You may also like</p>
                <p>You may also like</p>
            </div>
            <div className='FooterColumn'>
                <h4>Legal</h4>
                <p>Legal</p>
            </div>
        </div>
    </div>
  );
}