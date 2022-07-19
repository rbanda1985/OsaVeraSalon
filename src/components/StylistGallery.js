import React from 'react';
import Lightroom from 'react-lightbox-gallery';
import './StylistGallery.css';

const StylistGallery = () => {
 

  let images = [
    {
      src: require('../assets/kristina.jpg'),
      desc: <><a href='https://www.instagram.com/hair.xtina/?hl=en'>@hair.xtina</a>< br/> <br /><a href='https://squareup.com/appointments/book/LPANSEAKW9WCC'><button>Book Now</button></a></>,
      sub: `Barber + Stylist Kristina is our one and only female barber! She is an all over stylist who specializes in mens cuts, haircutting, and balayages. With 6 years of experience she has perfected her mens cuts, and is now transitioning into lived in balayages + vivid colors. She has an established client all who are confident in her work.`
    },
    {
      src: require('../assets/Bee.jpg'),
      desc: <><a href='https://www.instagram.com/lovelynailsbybee/?hl=en'>@lovelynailsbybee</a><br/><br/><a href='https://glammedbyisa.square.site/'><button>Book Now</button></a></>,
      sub: "Nail Artist, Bee is a one of a kind nail artist! She became licensed after almost 3 years of teaching herself to do nails. Specializing in acrylics, her sets are so colorful, creative and custom. She offers gel manicures, acrylic nails + toes. Her goal is to make people feel fierce through nails!"
    },
    {
      src: require('../assets/cadence.jpg'),
      desc: <><a href='https://www.instagram.com/cadenciamartistry/?hl=en'>@cadenciamartistry</a><br/><br/><a href='https://cmartistry-102817.square.site/'><button>Book Now</button></a></>,
      sub: "Makeup Artist + Junior Stylist. Cadence who is new and fresh to the industry, just graduated and became licensed in 2022. She loves all things beauty and specializes in editorial glam as a makeup artist. Cadence is currently assisting Miranda, eager to learn and grow as a stylist. With an established makeup clientele she hopes to grow her clientele even more in the hair industry."
    },
    {
      src: require('../assets/isabelle.jpg'),
      desc: <><a href='https://www.instagram.com/glammedbyisa/?hl=en'>@glammedbyisa</a><br/><br/><a href='https://glammedbyisa.square.site/'><button>Book Now</button></a></>,
      sub: "Makeup Artist + Junior Stylist. Isabelle has been in the beauty industry since 2020. She found her passion through makeup and is now stepping into the hair world. Specializing in makeup and now all things hair. She is also currently assisting Miranda to gain more knowledge in blonding services. Isabelle is confident in making her way through the beauty industry!"
    },
    {
      src: require('../assets/miranda.jpg'),
      desc: <><a href='https://www.instagram.com/mirandaosaderukhair/?hl=en'>@mirandaosaderukhair</a><br/><br/><a href='https://miranda-osaderuk-hair.square.site/'><button>Book Now</button></a></>,
      sub: "Stylist. Miranda is one of the two owners of OsaVera Salon. First starting out in the industry in 2017, she went from assisting at a few different salons, to working at Drybar, to then having her own studio and now owning a salon. Her specialty is lived in balayage. She has trained with @lisalovesbalyage @danielmbeauty @cynthia.m.valdez @emmanuellstyles and more! Miranda customizes your hair goals to what best suits the health of your hair. Being passionate about lived in balayage she continues to exceeds her clients expectations all while maintaining relationships with each of her clients!"
    },
    {
      src: require('../assets/annaliza.jpg'),
      desc: <><a href='https://www.instagram.com/annalizas.studio/?hl=en'>@annalizas.studio</a><br/><br/><a href='https://annalizasstudio.square.site/'><button>Book Now</button></a></>,
      sub: "Lash Artist. Annaliza is also one of the two owners of OsaVera Salon. She established herself in 2018 only doing classic lashes to later learning volume and mega volume. Since then she has traveled and taken courses with @lashboxla, @thelashsociety__ and @unfold.esthetics to name a few! Many of Annaliza’s client have been with her since the beginning when she was lashing from home, to her lash studio, to now her own salon. Over the years Annaliza has grown to customize and style each set to fulfill the clients wants and needs!"
    }
  ];


  let settings = {
    columnCount: {
      default: 3,
      mobile: 3,
      tab: 4
    },
    mode: 'dark'
  };


  return (
    <div className='lightroom'>
      <Lightroom images={images} settings={settings} />
    </div>
  )
}

export default StylistGallery