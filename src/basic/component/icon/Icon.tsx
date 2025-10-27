import './Icon.less';
import { useState, useEffect, useCallback } from 'react';

interface FireworkPosition {
  id: number;
  x: number;
  y: number;
}

export const Icon = () => {
  const [fireworks, setFireworks] = useState<FireworkPosition[]>([]);
  const [lastId, setLastId] = useState(0);
  
  // 生成0到360度的线条，每10度一个
  const lines = Array.from({ length: 36 }, (_, i) => i * 10);

  // 防抖函数
  const debounce = (func: Function, wait: number) => {
    let timeout: number;
    return (...args: any[]) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), wait);
    };
  };

  const addFirework = useCallback((x: number, y: number) => {
    const newId = lastId + 1;
    setLastId(newId);
    setFireworks(prev => [...prev, { id: newId, x, y }]);
    
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newId));
    }, 1500);
  }, [lastId]);

  useEffect(() => {
    const debouncedAddFirework = debounce((e: MouseEvent) => {
      addFirework(e.clientX, e.clientY);
    }, 50);

    document.addEventListener('mousemove', debouncedAddFirework);

    return () => {
      document.removeEventListener('mousemove', debouncedAddFirework);
    };
  }, [addFirework]);

  return (
    <div className="icon-container">
      <div className="icon-wrapper">
        {fireworks.map(firework => (
          <div 
            key={firework.id}
            className="firework-container"
            style={{
              position: 'fixed',
              left: `${firework.x}px`,
              top: `${firework.y}px`,
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            <svg className="firework" width="100" height="100" viewBox="0 0 100 100">
              <g className="particle">
                {lines.map((angle, i) => {
                  // 计算终点坐标
                  const endX = 50 + Math.cos(angle * Math.PI / 180) * 50;
                  const endY = 50 + Math.sin(angle * Math.PI / 180) * 50;
                  
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={endX}
                      y2={endY}
                      strokeWidth="1.5"
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        ))}
        
        <svg viewBox='0 0 30 30' >
          <path d="M10 0 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 v-10 h10 z"></path>
        </svg>
        
        {/* 心形图标 */}
        <svg
          className="heart"
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          // stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          preserveAspectRatio='none'
        >
          <path 
            fill="red" 
            d="M20.84 4.61
               a5.5 5.5 0 0 0 -7.78 0
               L12 5.67
               l-1.06 -1.06
               a5.5 5.5 0 0 0 -7.78 7.78
               l1.06 1.06
               L12 21.23
               l7.78 -7.78
               l1.06 -1.06
               a5.5 5.5 0 0 0 0 -7.78
               z"
          />
        </svg>
      </div>
    </div>
  );
};
