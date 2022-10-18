import CommandCenter from "./CommandCenter";
import { Image, Space, Typography } from 'antd'
import { formatS3Url } from "../S3";
import { CompassOutlined } from "@ant-design/icons";

const { Title } = Typography

export default () => <CommandCenter
  name="Venice"
  address={[
    '3000 E Venice Ave',
    'Venice, FL 34292-2529'

  ]}
  campingAddress={[
    'Fiore Neal Communities',
    'Near 3599 Laurel Rd E (south side of road)',
    'Venice, FL 34275'
  ]}
  campingAddressLink="https://forms.gle/fBoGERG8Kb3ErgfU8"
  campingAddressNote={<a href="#camping">
    <Space>
      <CompassOutlined />
      <span>See directions below</span>
    </Space>
    </a>
  }
  email="nase.command3@gmail.com"
  assignedStakes={[
    'Aiken, SC',
    'Atlanta, GA',
    'Augusta, GA',
    'Conyers, GA',
    'Fayetteville, GA',
    'Hilton Head, SC',
    'Powder Springs, GA',
  ]}
  phoneNumber="813-761-3227"
  registrationLink="https://forms.gle/6u79KTE1qBpiDPcPA"
  closeoutFormLink="https://forms.gle/ttzBGjdgjUdby2oe7"
  areaOversight={[
    {
      name: 'Brent Barnes',
      phoneNumber: '865-748-4260'
    }
  ]}
  director={{
    name: 'President Jaime Rodriguez',
    phoneNumber: '813-909-5608'
  }}
  afterAssignments={<>

  </>}
  additionalInformation={<>
    <section style={{marginTop: 24}} id="camping">
      <Title level={4}>Camping</Title>
      <Space direction="vertical" size="large">
        <span>
          Camping is located at approximately 3599 Laurel Rd E in Venice, FL at Fiore Neal Communities, which is an undeveloped residential community. 
          The location is not well marked on maps, so please follow the directions below.
          Please note that while the satellite photo shows dirt, the area now has paved roads and grass.
        </span>
        <ul>
          <li>From the church parking lot at 3000 E Venice Ave, turn right onto E Venice Ave. Go 1.0 miles.</li>
          <li>At the traffic circle, take the first exit onto Jacaranda Blvd. Go 2.8 miles.</li>
          <li>Turn left onto Laurel Rd E. Go 0.5 miles.</li>
          <li>At approximately 3599 Laurel Rd E, the camping is on the left. Entrance is "Fiore Neal Communities" (undeveloped residential community).</li>
        </ul>
        <span>Please camp within the designated area circled below (between the signs posted at the campsite).</span>
        <Image src={formatS3Url('ian/venice-camping-layout.jpg')} style={{maxWidth: 400}} />
        <Image src={formatS3Url('ian/venice-camping.png')} style={{maxWidth: 400}} />
        <Image src={formatS3Url('ian/venice-camping-street-view.jpg')} style={{maxWidth: 400}} />
      </Space>
    </section>
  </>}
/>
