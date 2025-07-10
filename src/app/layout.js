import { Inter } from "next/font/google";
import "./globals.css";
import Hotjar from "@hotjar/browser";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Coliving Spaces in Mumbai, Pune & Navi Mumbai | Best PG -  Union Living",
  description: "Experience the best coliving spaces in Mumbai, Pune and Navi Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Luxury Coliving Spaces in Mumbai, Pune & Navi Mumbai | Best PG -  Union Living',
    description: 'Experience the best coliving spaces in Mumbai, Pune and Navi Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).',
    url: 'https://unionliving.in',
    siteName: 'Union Living',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Luxury Coliving Spaces in Mumbai, Pune & Navi Mumbai | Best PG -  Union Living',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/',
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    apple: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    },
  },
}

export default function RootLayout({ children }) {
 
  
  
  return (
    <html lang="en">
     <Script id="HotJarAnalytics" >
      {
        `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5292476,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      
     </Script>
     <Script id="FacebookId" >
      {
        `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1424619772031368');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1424619772031368&ev=PageView&noscript=1"
/></noscript>
`}
      
     </Script>
     <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WBTZ2ZF6');
        `}
      </Script>
    
      <link rel="icon" href="./favicon.png" sizes="any" />
      <link
  rel="apple-touch-icon"
  href="./favicon.png"
  type="image/png"
  sizes="any"
    />
     
      <body className={inter.className}>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBTZ2ZF6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      <Script
        src="https://web-in21.mxradon.com/t/Tracker.js"
        strategy="afterInteractive"
      />
      <Script id="pid-tracker" strategy="afterInteractive">
        {`
         pidTracker('77184');



        `}
      </Script>
        {children}</body>
      
     
 
    </html>
  );
}
