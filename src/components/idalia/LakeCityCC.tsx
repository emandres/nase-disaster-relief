import { s3Url } from '../../lib/s3';
import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Lake City"
  address={[
    '909 SE Country Club Rd',
    'Lake City, FL 32025-3301'
  ]}
  campingAddress={[
    'Columbia County Fire and Rescue 51',
    '1579 NW Lake Jeffery Rd',
    'Lake City, FL 32055'
  ]}
  campingAddressNote="Camp site has plenty of room for RVs and campers"
  email="nase.idalia2@gmail.com"
  assignedStakes={[
    'Deland, FL',
    'Jacksonville, FL East',
    'Jacksonville, FL South',
    'Lake City, FL',
    'Orlando, FL',
  ]}
  phoneNumber="(352) 558-9605"
  registrationLink="https://forms.gle/aaNQdeAetRFqeQhT6"
  closeoutFormLink="https://forms.gle/hqcPSsqRYtzTy15fA"
  areaOversight={[
    {
      name: 'Eric Andres',
      phoneNumber: '(801) 854-8368'
    }
  ]}
  director={{
    name: 'Pres. Michael Lavoie',
    phoneNumber: '(352) 672-0455'
  }}
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/lake-city-command-center.jpg')} alt="Lake City Command Center Layout" style={{maxWidth: '100%'}} />
      <h3>Campsite Map</h3>
      <img src={s3Url('/idalia/lake-city-camping.jpg')} alt="Lake City Campsite Map" style={{maxWidth: '100%'}} />
      <p>Campsite has men's and women's restrooms—two stalls each. <strong>No Showers</strong></p>
    </section>
  }
  sacramentLocation='command-center'

/>
