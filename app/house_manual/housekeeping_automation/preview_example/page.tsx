import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./component'), { ssr: false });

export default MyComponent;
