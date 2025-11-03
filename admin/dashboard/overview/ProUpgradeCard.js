import React from 'react';
import { __ } from '@wordpress/i18n';
import Button from '../../components/common/Button';
import { Sparkles } from '../../icons';

const ProUpgradeCard = () => {
  const features = [
    'Dynamic Content',
    'Unlimited Revisions',
    'Live Loop Builder',
    'Google, Facebook Integration',
    'Advanced Animations',
    '160+ Premium Premade Templates',
  ];

  const upgradeToPro = () => {
    console.log("Upgrade to pro")
  }

  return (
    <div className="pro-card">
      <div className="pro-card__content">
        <h2 className="heading-3">Do More with PRO</h2>
        <p className="p1">
          Experience design freedom with Fontis Block Pro. Utilize advanced blocks, extensions, and premium features to create a website that stands out!
        </p>

        <ul className="pro-card__features">
          {features.map((feature, index) => (
            <li key={index} className="pro-card__feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00016 16.1698L4.83016 11.9998L3.41016 13.4098L9.00016 18.9998L21.0002 6.99984L19.5902 5.58984L9.00016 16.1698Z" fill="#0875FF"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <Button text={__('Upgrade to Pro', 'frontis-blocks')} icon={<Sparkles />} onClick={upgradeToPro} buttonType='fill' />
      </div>
    </div>
  );
};

export default ProUpgradeCard;