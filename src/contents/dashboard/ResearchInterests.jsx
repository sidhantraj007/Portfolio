import React from 'react';
import styles from './Research.module.css'

const ResearchInterests = () => {
  return (
    <div className={styles.list}>
      <h1>Research Interests</h1>
      <ul className={styles.lis}>
        <li>Reconfigurable Metamaterial Antenna Design</li>
        <li>Multifunctional MIMO Antenna</li>
        <li>mmWave Frequency Selective Surfaces (FSS)</li>
        <li>Active Array Antenna with Beam Steering</li>
        <li>Dielectric Resonator Antenna</li>
        <li>mmWave and THz Passive Devices</li>
      </ul>
    </div>
  );
};

export default ResearchInterests;
