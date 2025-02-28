document.addEventListener("DOMContentLoaded", function() {
    const schemaData = {
        "@context": "https://schema.org", 
        "@type": "WebPage", 
        "name": "Terms and Conditions N8 Casino: Rules & Guidelines", 
        "url": "https://67c0c2c902e1a993a85c69ab--zippy-griffin-36c85e.netlify.app/termspage", 
        "description": "Review the N8 Casino Terms and Conditions to understand our rules, policies, and recommendations for safe, fair, and responsible gaming.", 
        "mainEntity": {
            "@type": "LegalService", 
            "name": "N8 Casino Terms and Conditions", 
            "url": "https://67c0c2c902e1a993a85c69ab--zippy-griffin-36c85e.netlify.app/termspage", 
            "legalName": "N8 Casino", 
        },
        "creator": { 
            "@type": "Organization",
            "name": "N8 Casino", 
            "url": "https://67c0c2c902e1a993a85c69ab--zippy-griffin-36c85e.netlify.app/", 
            "logo": { 
                "@type": "ImageObject",
                "url": "/public/mainlog.png" 
            },
            "sameAs": [ 
                "https://www.facebook.com/sportsn8.games",
                "https://www.instagram.com/n8.games/",
                "https://twitter.com/N8Sportsgames",
                "https://www.linkedin.com/company/n8-games",
                "https://t.me/n8sportsgames",
                "https://www.youtube.com/channel/UCbfOow5Zcfm0s0yn2kN3r9Q/featured"
            ]
        },
    };

    
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json'; // 
    scriptTag.textContent = JSON.stringify(schemaData); 
    document.head.appendChild(scriptTag); 
});