import "../../assets/css/contact.css";

const Contact = ({ contactRef }: any) => {
  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-title__wrap">
        <div className="contact-title">Contact</div>
        <div className="top-icon"></div>
      </div>

      <div className="contact-text">
        사용자 경험을 고민하는 프론트엔드 개발자가 필요하다면, <br />
        디자인과 코드의 균형을 중요하게 생각하는 저에게 <br />
        언제든 편하게 연락 주세요. <br />
      </div>

      <div className="contact-info">
        <div className="contact-icon icon-mail"></div>
        <p>dnqls2414@naver.com</p>
      </div>

      <div className="contact-info">
        <div className="contact-icon icon-phone"></div>
        <p>010-4493-9870</p>
      </div>

      <div className="contact-bottom-wrap">
        <div className="contact-bottom-left"></div>
        <div className="contact-bottom-right"></div>
      </div>
    </div>
  );
};

export default Contact;
