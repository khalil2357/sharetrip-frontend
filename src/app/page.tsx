'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Plane, Building, Map } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1 }
      );
      
      gsap.to('.gsap-circle', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear'
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section className={styles.heroSection} ref={heroRef}>
        <div className={`${styles.decorativeCircle} ${styles.circle1} gsap-circle`} />
        <div className={`${styles.decorativeCircle} ${styles.circle2} gsap-circle`} />
        
        <div className={styles.heroContent}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.title}>
              <span className="gsap-title inline-block">Experience</span>{' '}
              <span className="gsap-title inline-block">The</span>{' '}
              <span className="gsap-title inline-block premium-gradient-text">Extraordinary</span>
            </h1>
            
            <p className={`${styles.subtitle} gsap-title`}>
              Premium travel experiences tailored for you. Discover the world's most breathtaking destinations with our all-inclusive packages.
            </p>
            
            <div className={`${styles.ctaContainer} gsap-title`}>
              <button className={styles.primaryButton}>
                Explore Destinations
              </button>
              <button className={styles.secondaryButton}>
                Plan Your Trip
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Search Widget Placeholder */}
      <section className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
        <div style={{ 
          background: 'var(--surface-color)', 
          padding: '2rem', 
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer' }}>
             <Plane className="text-primary-color" /> Flights
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--text-secondary)', opacity: 0.2 }} />
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer' }}>
             <Building className="text-primary-color" /> Hotels
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--text-secondary)', opacity: 0.2 }} />
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer' }}>
             <Map className="text-primary-color" /> Tours
          </div>
        </div>
      </section>
    </main>
  );
}
