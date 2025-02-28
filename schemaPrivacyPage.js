window.onload = function() {
    const schema1 = document.createElement('script');
    schema1.type = 'application/ld+json';
    schema1.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy of N8 Casino",
      "url": "https://67c0c2c902e1a993a85c69ab--zippy-griffin-36c85e.netlify.app/privacypage",
      "description": "At N8 Casino, we take your privacy and data protection very seriously. Find out how we collect, use and protect your personal information.",
      "publisher": {
        "@type": "Organization",
        "name": "N8 Casino",
        "logo": {
          "@type": "ImageObject",
          "url": "/public/mainlog" 
        }
      },
    });
    document.head.appendChild(schema1);

    const schema2 = document.createElement('script');
    schema2.type = 'application/ld+json';
    schema2.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "N8 Casino",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+1-800-123-4567",
        "email": "n8.official.cs@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/sportsn8.games",
        "https://www.instagram.com/n8.games/",
        "https://twitter.com/N8Sportsgames",
        "https://www.linkedin.com/company/n8-games",
        "https://t.me/n8sportsgames",
        "https://www.youtube.com/channel/UCbfOow5Zcfm0s0yn2kN3r9Q/featured"
      ]
    });
    document.head.appendChild(schema2);
};