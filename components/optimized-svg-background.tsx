"use client"
import React, { memo, useEffect, useState } from 'react';

// Fonction pour créer l'image SVG une seule fois
const createSVGDataURL = () => {
    const svgString = `
    <svg width="1220" height="810" viewBox="0 0 1220 810" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid-pattern" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <rect x="0.2" y="0.2" width="35.6" height="35.6" fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="0.6"/>
        </pattern>
        
        <filter id="filter0_f" x="147" y="-468" width="1941" height="2035" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="80"/>
        </filter>
        <filter id="filter1_f" x="-554" y="-1169" width="3217" height="3311" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="240"/>
        </filter>
        <filter id="filter2_f" x="427" y="-452" width="1623" height="1717" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="40"/>
        </filter>
        <filter id="filter3_f" x="-253" y="-612" width="2222" height="2035" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="80"/>
        </filter>
        
        <linearGradient id="paint0_linear" x1="35" y1="24" x2="904" y2="632" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff" stop-opacity="0"/>
          <stop offset="1" stop-color="#6b7280"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="1118" y1="-149" x2="1118" y2="1249" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.578" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#3b82f6"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="1054" y1="-213" x2="1054" y2="1185" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.578" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#3b82f6"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="1238" y1="-293" x2="1238" y2="1105" gradientUnits="userSpaceOnUse">
          <stop stop-color="#ffffff"/>
          <stop offset="0.578" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#3b82f6"/>
        </linearGradient>
        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(989 557) rotate(48) scale(466 471)">
          <stop stop-color="#ffffff"/>
          <stop offset="0.158" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#3b82f6"/>
        </radialGradient>
        <clipPath id="clip0">
          <rect width="1220" height="810" rx="16" fill="#ffffff"/>
        </clipPath>
      </defs>

      <g clip-path="url(#clip0)">
        <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="-1" width="1200" height="812">
          <rect x="10" y="-0.85" width="1200" height="812" fill="url(#paint0_linear)"/>
        </mask>
        
        <g mask="url(#mask0)">
          <rect x="-20" y="9" width="1260" height="800" fill="url(#grid-pattern)"/>
          
          <rect x="700" y="81" width="36" height="36" fill="#3b82f6" fill-opacity="0.12"/>
          <rect x="196" y="153" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="1024" y="153" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="124" y="225" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="1096" y="225" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="952" y="297" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="232" y="333" width="36" height="36" fill="#3b82f6" fill-opacity="0.10"/>
          <rect x="304" y="405" width="36" height="36" fill="#3b82f6" fill-opacity="0.10"/>
          <rect x="88" y="405" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="520" y="405" width="36" height="36" fill="#3b82f6" fill-opacity="0.12"/>
          <rect x="772" y="405" width="36" height="36" fill="#3b82f6" fill-opacity="0.15"/>
          <rect x="592" y="477" width="36" height="36" fill="#3b82f6" fill-opacity="0.10"/>
        </g>

        <g filter="url(#filter0_f)">
          <path d="M1447 -87V-149H1770V1249H466V894C1008 894 1447 455 1447 -87Z" fill="url(#paint1_linear)"/>
        </g>
        <g filter="url(#filter1_f)">
          <path d="M1383 -151V-213H1706V1185H402V830C944 830 1383 391 1383 -151Z" fill="url(#paint2_linear)" fill-opacity="0.69"/>
        </g>
        <g style="mix-blend-mode:lighten" filter="url(#filter2_f)">
          <path d="M1567 -231V-293H1890V1105H586V750C1128 750 1567 311 1567 -231Z" fill="url(#paint3_linear)"/>
        </g>
        <g style="mix-blend-mode:overlay" filter="url(#filter3_f)">
          <path d="M66 750H284C860 750 1327 283 1327 -293H1650V1105H66V750Z" fill="url(#paint4_radial)" fill-opacity="0.64"/>
        </g>
      </g>

      <rect x="0.5" y="0.5" width="1219" height="809" rx="15.5" stroke="#ffffff" stroke-opacity="0.06"/>
    </svg>
  `;

    return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

// Composant background simple comme une image
const OptimizedSVGBackground = memo(() => {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

    useEffect(() => {
        // Créer l'image une seule fois au premier rendu
        setBackgroundImage(createSVGDataURL());
    }, []);

    if (!backgroundImage) return null;

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // Optimisations pour éviter les repaints

                willChange: 'auto',
                backfaceVisibility: 'hidden',
            }}
        />
    );
});

OptimizedSVGBackground.displayName = 'OptimizedSVGBackground';

// Version encore plus simple - CSS pur
const CSSOnlyBackground = memo(() => (
    <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
            background: `
        radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 35px,
          rgba(255, 255, 255, 0.05) 35px,
          rgba(255, 255, 255, 0.05) 36px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 35px,
          rgba(255, 255, 255, 0.05) 35px,
          rgba(255, 255, 255, 0.05) 36px
        )
      `,
            borderRadius: '16px',
        }}
    />
));

CSSOnlyBackground.displayName = 'CSSOnlyBackground';

// Exemple d'utilisation
const ExampleUsage = () => {
    return (
        <div className="space-y-8">
            {/* Option 1: Background SVG converti en image */}
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                <OptimizedSVGBackground />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h2 className="text-2xl font-bold mb-2">SVG Background</h2>
                        <p className="text-gray-300">Converti en image statique</p>
                    </div>
                </div>
            </div>

            {/* Option 2: CSS pur - encore plus performant */}
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
                <CSSOnlyBackground />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h2 className="text-2xl font-bold mb-2">CSS Background</h2>
                        <p className="text-gray-300">100% CSS, 0% re-render</p>
                    </div>
                </div>
            </div>

            {/* Contenu de test pour scroll */}
            <div className="space-y-4">
                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Section {i + 1}</h3>
                        <p className="text-gray-600">
                            Scrollez - les backgrounds restent parfaitement fixes comme des images normales !
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptimizedSVGBackground;