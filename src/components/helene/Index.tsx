import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import './Index.css'
//import PopoutLink from "../PopoutLink"
import { AlertOutlined, PhoneOutlined, QuestionOutlined, FileOutlined, AimOutlined, ApartmentOutlined } from '@ant-design/icons'


const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'helene/Helene_social_media_8449651386_en-US.png' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'helene/Helene_social_media_8449651386_es-MX.png' },
  { title: 'Vehicle Placard - REQUIRED IN FLORUDA ONLY', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Helene</Title>

    <Title level={3}>Command Centers</Title>
    <div className="row">
      <div className="column">     
      <section className="ccenter">
        <Space direction="vertical">
          <a  href="https://sites.google.com/view/ashevillecommandcenter/home"><Space><AimOutlined />Asheville</Space></a>
          <a href="helene/aiken"><Space><AimOutlined />Aiken</Space></a>
          <a href="helene/savannah"><Space><ApartmentOutlined />Vidalia</Space></a>
          <a href="helene/douglas"><Space><ApartmentOutlined />Douglas</Space></a>
          <a href="helene/waycross"><Space><ApartmentOutlined />Waycross</Space></a>
          <a href="helene/valdosta"><Space><ApartmentOutlined />Valdosta</Space></a>
          <a href="helene/madison"><Space><ApartmentOutlined />Madison</Space></a>
          <a href="helene/lakecity"><Space><ApartmentOutlined />Lake City</Space></a>
          <a href="helene/chiefland"><Space><ApartmentOutlined />Chiefland</Space></a>
          <a href="helene/stpetersburg"><Space><AimOutlined />St. Petersburg</Space></a>   
        </Space>
      </section> 
     </div>
     <div className="column">
      <section>
          <Space direction="vertical">
            <img
              src={formatS3Url('helene/Helene-Week2.png')}
              alt="Command Centers Map" 
              style={{ maxWidth: 400 }}
             />
            <cite>Screenshot</cite>
          </Space>
        </section>
      </div>
    </div>



    <section>
      <Title level={3}>Files</Title>
      <List
        dataSource={files}
        renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
        rowKey={item => item.path} />
    </section>
  </Space>
}