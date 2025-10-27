import React, { useEffect, useRef, useState } from 'react';
import './Banner.less';

interface BannerLayer {
  id: string;
  type: 'image' | 'video';
  src: string;
  width: number;
  height: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  zIndex?: number;
}

interface AnimatedBannerProps {
  layers: BannerLayer[];
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const AnimatedBanner: React.FC<AnimatedBannerProps> = ({
  layers,
  className = '',
  autoPlay = true,
  loop = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (autoPlay) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [autoPlay]);

  const renderLayer = (layer: BannerLayer) => {
    const style: React.CSSProperties = {
      height: `${layer.height}px`,
      width: `${layer.width}px`,
      transform: `translate(${layer.translateX || 0}px, ${layer.translateY || 0}px) rotate(${layer.rotate || 0}deg) scale(${layer.scale || 1})`,
      opacity: layer.opacity ?? 1,
      zIndex: layer.zIndex || 0,
      position: 'absolute' as const,
      top: 0,
      left: 0,
    };

    if (layer.type === 'video') {
      return (
        <video
          key={layer.id}
          loop={loop}
          playsInline
          style={{
            ...style,
            objectFit: 'cover' as const,
          }}
          src={layer.src}
          width={layer.width}
          height={layer.height}
        />
      );
    }

    return (
      <img
        key={layer.id}
        src={layer.src}
        alt={`Banner layer ${layer.id}`}
        style={style}
        data-height={layer.height}
        data-width={layer.width}
      />
    );
  };

  return (
    <div 
      ref={containerRef}
      className={`animated-banner ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '180px',
        overflow: 'hidden',
      }}
    >
      {layers.map(renderLayer)}
    </div>
  );
};

export default AnimatedBanner; 