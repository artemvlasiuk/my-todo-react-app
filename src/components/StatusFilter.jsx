import React from 'react';

export default function StatusFilter({ setStatus }) {
  return (
    <div className='status-filter'>
      <ul>
        <li onClick={() => setStatus('all')}>All</li>
        <li onClick={() => setStatus('active')}>Active</li>
        <li onClick={() => setStatus('completed')}>Completed</li>
      </ul>
      <div className='divider'></div>
    </div>
  );
}
