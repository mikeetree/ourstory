import React, { useState, useEffect } from 'react';

export default function TitleView({ clickHandler }) {
  return (
    <div
      className="title-view"
      onClick={() => clickHandler()}
    >
      ourstory.
    </div>
  )
}
