import React from 'react';
import SVG from 'react-inlinesvg';

import './StepTitle.scss';

function StepTitle({
  title, imgSrc, onClick, color, isActive,
}) {
  return (
    <div className={`step-title ${isActive ? 'active-tab' : ''}`} onClick={onClick}>
      <div className="step-title-icon-wrapper">
        <SVG src={imgSrc} alt={`eventor-${title}`} className="step-title-icon" />
      </div>
      <h3 className="tab-header-title" style={{ color }}>{title}</h3>
    </div>
  );
}

export { StepTitle };
