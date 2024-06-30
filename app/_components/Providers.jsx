'use client'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Providers({ children }) {
    return <ParallaxProvider>{children}</ParallaxProvider>;
}

export { Parallax }