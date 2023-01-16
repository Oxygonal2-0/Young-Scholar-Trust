import imageBackground from '../../assets/nature9.jpg';
import Footer from '../Footer.js';
import Faq from "react-faq-component";
const data = {
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: 'grey',
  // arrowColor: "red",
  arrowBorder: 'none'
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
  expandIcon: "+",
  collapseIcon: "-",
};

const FAQ = () => {
  

  return (
    <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
            <span>Frequently Asked Questions</span>
            {/* <div class="faq-container">
              <div class="faq active">
                <h3 class="faq-title">
                    Why we shouldn't we trust atoms?
                </h3>
                <p class="faq-text">
                    They make up everything
                </p>
                <button class="faq-toggle">
                  <CancelIcon className='fas fa-chevron-down'/>
                  <ExpandMoreIcon className='fas fa-times'/>
                </button>
              </div>

              <div class="faq">
                <h3 class="faq-title">
                    Why do you call someone with no body and no nose?
                </h3>
                <p class="faq-text">
                    Nobody knows.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
              </div>

              <div class="faq">
                <h3 class="faq-title">
                    What's the object oriented way to become wealthy?
                </h3>
                <p class="faq-text">
                    inheritance.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
              </div>

              <div class="faq">
                <h3 class="faq-title">
                    HOw many tickles it takes to tickle an actopus?
                </h3>
                <p class="faq-text">
                    Ten-ticklles!
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
              </div>

              <div class="faq">
                <h3 class="faq-title">
                    What is 1 + 1?
                </h3>
                <p class="faq-text">
                    Depends on who are you asking.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
              </div>

            </div> */}

            <div className='faq-container'>
              {<Faq
                  data={data}
                  styles={styles}
                  config={config}
              />}
            </div>
          </div>
         
          {<Footer/>}
        </div> 
      </div>
  )
}

export default FAQ