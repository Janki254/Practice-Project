import tshirtImg from '../../assets/400x300.png';
import ContainerTshirtImg from '../../assets/black tshirt.png';
import blueTshirtImg from '../../assets/blue tshirt.png';
import grayTshirtImg from '../../assets/gray tshirt.png';
import redTshirtImg from '../../assets/redtshirt.png';
import whiteTshirtImg from '../../assets/white tshirt.png';
import styles from './Card.module.css';

const tshirtColors = [
  {
    id: "white",
    url: whiteTshirtImg,
  },
  {
    id: "black",
    url: ContainerTshirtImg,
  },

  {
    id: "gray",
    url: grayTshirtImg,
  },
  {
    id: "red",
    url: redTshirtImg,
  },
  {
    id: "blue",
    url: blueTshirtImg,
  },
];

const Card = () => {
  return (
    <>
      <div className={styles.card__container}>
        <div className={styles.card__img__container}>
          <div className={styles.img__card}>
            <img
              src={ContainerTshirtImg}
              alt="customize_t-shirt"
              className={styles.custom_tshirt}
            />
            <div className={styles.img_details}>
              <div className={styles.content}>{`Text Here`}</div>
              <img
                src={tshirtImg}
                alt="t-shirt Image"
                className={styles.tshirtImg}
              />
              <div className={styles.content}>{`Text Here`}</div>
            </div>
          </div>
        </div>
        {/* -----------------------------User Form---------------------------- */}
        <div className={styles.card_form}>
          <form>
            <h2>Settings</h2>
            <div className={styles.formDetails}>
              <div className={styles.userInput}>
                <h3>Change T-shirt Color</h3>
                <div className={styles.tshirt_colorInput}>
                  <div>
                    {tshirtColors.map((tshirt) => (
                      <img key={tshirt.id} src={tshirt.url} alt={tshirt.id} />
                    ))}
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.userInput}>
                <h3>Change Image</h3>
                <div className={styles.userImg}>
                  <input type="file" />
                  <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                  </div>
                </div>
                <button type="button" className={styles.uploadImg}>
                  UPLOAD NOW
                </button>
              </div>
              <hr />
              <div className={styles.userInput}>
                <h3>Write Text</h3>
                <div className={styles.userText}>
                  <label>Upper Text</label>
                  <input type="text" placeholder="Upper Text" />
                </div>
                <div className={styles.userText}>
                  <label>Lower Text</label>
                  <input type="text" placeholder="Lower Text" />
                </div>
              </div>

              <hr />
              <div className={styles.text_Size_Color}>
                <div className={styles.TextSize}>
                  <h3>Text Size</h3>
                  <div className={styles.slidecontainer}>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="50"
                      className={styles.slider}
                      id="myRange"
                    />
                  </div>
                </div>
                <div className={styles.TextColor}>
                  <h3>Text Color</h3>
                  <div className={styles.colorInput}>
                    <input type="radio" id="black" name="color" value="black" />
                    <label htmlFor="html">Black</label>
                  </div>

                  <div className={styles.colorInput}>
                    <input type="radio" id="white" name="color" value="white" />
                    <label htmlFor="html">White</label>
                  </div>

                  <div className={styles.colorInput}>
                    <input type="radio" id="red" name="color" value="red" />
                    <label htmlFor="html">Red</label>
                  </div>

                  <div className={styles.colorInput}>
                    <input type="radio" id="blue" name="color" value="blue" />
                    <label htmlFor="html">Blue</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
