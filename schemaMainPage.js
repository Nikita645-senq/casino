window.onload = function() {
    const schema1 = document.createElement('script');
    schema1.type = 'application/ld+json';
    schema1.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "N8 Casino",
      "url": "https://67c0c2c902e1a993a85c69ab--zippy-griffin-36c85e.netlify.app/",
      "description": "Experience the thrill of top-rated casino games at N8 Casino. Get generous bonuses, secure payment options, and a user-friendly platform.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://n8casinologin.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "N8 Casino",
        "logo": {
          "@type": "ImageObject",
          "url": "/public/mainlog"
        }
      }
    });
    document.head.appendChild(schema1);
  
    const schema2 = document.createElement('script');
    schema2.type = 'application/ld+json';
    schema2.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is N8 Casino Safe to Play At?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, N8Casino is completely safe and secure. The casino is licensed and regulated by reputable authorities, ensuring that it operates with the highest standards of security and fairness. It uses advanced encryption technology to protect your personal and financial information, so you can enjoy your gaming experience with peace of mind."
        }
      }, {
        "@type": "Question",
        "name": "What Payment Methods Does N8 Casino Accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "N8Casino supports a wide range of payment methods, including credit/debit cards (Visa, MasterCard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and cryptocurrency options like Bitcoin and Ethereum. You can choose the payment method that best suits your needs for both deposits and withdrawals."
        }
      }, {
        "@type": "Question",
        "name": "Can I Play at N8 Casino on My Mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Casino N8 is fully optimized for mobile devices. You can access the casino via your smartphone or tablet through the mobile-friendly website or by downloading the N8 Casino app, available for both iOS and Android. All features, games, and payments are available on mobile, so you can enjoy gaming on the go."
        }
      }]
    });
    document.head.appendChild(schema2);
}