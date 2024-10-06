import React from 'react';

export default function Stats() {
  return (
    <div>
      <section className="section stats" aria-label="stats">
        <div className="container">
          <ul className="grid-list">
            <li>
              <div className="stats-card" style={{ '--color': '170, 75%, 41%' }}>
                <h3 className="card-title">29.3k</h3>
                <p className="card-text">Students Enrolled</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{ '--color': '351, 83%, 61%' }}>
                <h3 className="card-title">32.4K</h3>
                <p className="card-text">Classes Completed</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{ '--color': '260, 100%, 67%' }}>
                <h3 className="card-title">100%</h3>
                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{ '--color': '42, 94%, 55%' }}>
                <h3 className="card-title">3+</h3>
                <p className="card-text">Top Teachers</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
