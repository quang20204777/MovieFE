import React from 'react'
import { Carousel, Col, Row } from 'antd';
import { BulbTwoTone, TrophyTwoTone, FileTextTwoTone, CustomerServiceTwoTone } from '@ant-design/icons';
import befinit from '../../../assets/befinit.jpg'

const HomePage = () => {
    const contentStyle = {
        width: '100%',
        height: '660px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div style={{ marginBottom: '100px' }}>    
      {/* Carousel  */}
      <Carousel autoplay>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll1.jpg")', backgroundSize: '100% 100%', height: '660px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '660px' }}>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '33px', width: '55%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '33px' }}>Thư viện Tạ Quang Bửu</span> là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
              <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              </div>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll2.jpg")', backgroundSize: '100% 105%', height: '660px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '660px' }}>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '33px', width: '55%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '33px' }}>Thư viện Tạ Quang Bửu</span> là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
              <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              </div>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll3.jpg")', backgroundSize: '100% 100%', height: '660px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '660px' }}>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '33px', width: '55%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '33px' }}>Thư viện Tạ Quang Bửu</span> là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
              <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              </div>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll4.jpg")', backgroundSize: '100% 112%', height: '660px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '660px' }}>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '33px', width: '55%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '33px' }}>Thư viện Tạ Quang Bửu</span> là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
              <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
              <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              </div>
            </div>
          </div>
        </div>
      </Carousel >


      {/* Befinit */}
      <p style={{ fontWeight: 'bold', marginTop: '150px', fontFamily: 'Poppins', fontSize: '33px' }}>Lợi ích của việc đọc sách</p>
      <p style={{ fontWeight: '400', fontSize: '18px', padding: '0px 280px' }}>Đọc sách vẫn luôn là một thói quen bổ ích được nhiều người yêu thích nhưng bên cạnh việc cung cấp tri thức đọc sách còn mang lại nhiều lợi ích hơn thế</p>
      <Row style={{ width: '100%', height: '940px', marginTop: '40px' }}>
        <Col className="gutter-row" span={14} style={{ textAlign: 'left', paddingLeft: '120px' }}>
          <Row style={{ width: '100%', marginTop: '40px' }}>
            <Col span={4}>
              <BulbTwoTone style={{ fontSize: '80px' }} />
            </Col>
            <Col span={18}>
              <p style={{ fontSize: '23px', fontWeight: '700' }}>Nâng cao kiến thức</p>
              <p style={{ fontSize: '16px' }}>  Sách chính là nguồn tri thức vô tận về mọi lĩnh vực trong cuộc sống của những người đi trước viết ra kể lại và truyền đạt cho chúng ta. Các cuốn sách về kinh tế, lịch sử, văn hóa cho ta kiến thức về kinh doanh và thực tế xã hội, về sự phát triển qua từng thời kỳ nhân loại.</p>
            </Col>
          </Row>
          <Row style={{ width: '100%', marginTop: '30px' }}>
            <Col span={4}>
              <TrophyTwoTone style={{ fontSize: '80px' }} />
            </Col>
            <Col span={18}>
              <p style={{ fontSize: '23px', fontWeight: '700' }}>Tăng cường kỹ năng tư duy, phân tích</p>
              <p style={{ fontSize: '16px' }}> Khi đọc sách toàn bộ tâm trí và các giác quan của bạn đều dồn về đôi mắt theo dõi đọc từng chữ, từng dòng. Bàn tay lật lật từng trang giấy và trong đầu tập trung vào những kiến thức mà cuốn sách đang nhắc đến hay suy nghĩ theo dõi diễn biến tiếp theo của câu truyện mà không cần phải quan tâm tới mọi thứ xung quanh, chỉ cần bộ não và mắt hoạt động.</p>
            </Col>
          </Row>
          <Row style={{ width: '100%', marginTop: '30px' }}>
            <Col span={4}>
              <FileTextTwoTone style={{ fontSize: '80px' }} />
            </Col>
            <Col span={18}>
              <p style={{ fontSize: '23px', fontWeight: '700' }}>Mở rộng vốn từ ngữ</p>
              <p style={{ fontSize: '16px' }}> Vốn từ của bản thân nhiều lên, giao tiếp nói chuyện với mọi người một cách hoạt ngôn cởi mở và cuốn hút là một trong những lợi ích tuyệt vời mà việc đọc sách mang lại. Tri thức trong sách được diễn đạt rất xúc tích, logic dễ hiểu và không kém phần thu hút cho người đọc. </p>
            </Col>
          </Row>
          <Row style={{ width: '100%', marginTop: '30px' }}>
            <Col span={4}>
              <CustomerServiceTwoTone style={{ fontSize: '80px' }} />
            </Col>
            <Col span={18}>
              <p style={{ fontSize: '23px', fontWeight: '700' }}>Hình thức giải trí miễn phí</p>
              <p style={{ fontSize: '16px' }}>Nhiều người có thể tốn khá nhiều tiền mua những cuốn sách chỉ để tham khảo một vài phần trong đó. Nhưng với một số người không có điều kiện hoặc kinh phí thấp, bạn có thể tìm đến thư viện và hòa mình vào kho tàng sách sẵn có. Tất cả các vấn đề trong cuộc sống, xã hội mà bạn chưa hề biết đến đều được cập nhập ở các cuốn sách mới mà bạn sẽ không thể nào đọc hết được.</p>
            </Col>
          </Row>
        </Col>
        <Col span={10} style={{ marginTop: '200px' }}>
          <div style={{ backgroundImage: `url(${befinit})`, backgroundSize: '100% 100%', width: '72%', height: '59%', marginLeft: '80px' }}></div>
        </Col>
      </Row>



      {/* Our Book */}
      <p style={{ fontWeight: 'bold', marginBottom: '40px', fontFamily: 'Poppins', fontSize: '33px' }}>Các thể loại sách</p>
      <Row style={{ marginBottom: '200px' }}>
      </Row>

    </div >
  )
}

export default HomePage
