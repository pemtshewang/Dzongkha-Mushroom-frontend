"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const navigateToDetector = async () => {
    setLoading(true);
    await router.push('/detector');
    // Calculate the actual loading time
    // 
    setLoading(false);

    // Animate the progress bar based on the actual loading time
  };

  return (
    <section >
      {loading && (
        <div className="progress w-32 h-5"></div>
      )}
      <Hero buttonProps={navigateToDetector} />
    </section>
  );
}
