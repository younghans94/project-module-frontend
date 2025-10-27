import AnimatedBanner from './Banner';
import SimpleBanner from './SimpleBanner';

// 示例数据
export const sampleLayers = [
  {
    id: 'bg1',
    type: 'image' as const,
    src: 'https://via.placeholder.com/1920x180/667eea/ffffff?text=Background+1',
    width: 1920,
    height: 180,
    translateX: 0,
    translateY: 0,
    zIndex: 1
  },
  {
    id: 'bg2',
    type: 'image' as const,
    src: 'https://via.placeholder.com/1920x180/764ba2/ffffff?text=Background+2',
    width: 1920,
    height: 180,
    translateX: 0,
    translateY: 0,
    zIndex: 2
  },
  {
    id: 'video1',
    type: 'video' as const,
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    width: 200,
    height: 144,
    translateX: -720,
    translateY: 0,
    zIndex: 10
  },
  {
    id: 'video2',
    type: 'video' as const,
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    width: 200,
    height: 144,
    translateX: 400,
    translateY: 32,
    zIndex: 10
  }
];

export { AnimatedBanner, SimpleBanner }; 