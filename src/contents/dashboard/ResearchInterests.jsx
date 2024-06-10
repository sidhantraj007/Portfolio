import React from 'react';
import styles from './Research.module.css'

const ResearchInterests = () => {
  return (
    <div className={styles.list}>
      <h1>Research Interest</h1>
      <ol className={styles.lis}>
        <li>Reconfigurable Metamaterial Antenna Design</li>
        <li>Multifunctional MIMO Antenna</li>
        <li>mmWave Frequency Selective Surfaces (FSS)</li>
        <li>Active Array Antenna with Beam Steering</li>
        <li>Dielectric Resonator Antenna</li>
        <li>mmWave and THz Passive Devices</li>
      </ol>
    </div>
  );
};

export default ResearchInterests;
