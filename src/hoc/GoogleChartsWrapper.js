import dynamic from 'next/dynamic';

const GoogleChartsWrapper = dynamic(() => import('react-google-charts'), {ssr: false});

export default GoogleChartsWrapper;