import { useState } from 'react'; 
import { AiOutlineShareAlt } from 'react-icons/ai';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import styles from './ShareButton.module.scss';

type ShareButtonProps = {
  slug: string;
  hashtags: string[];
}

const SHARE_TEXT = 'Check out this product from FabFitFun!';

const ShareButton = ({ slug, hashtags }: ShareButtonProps) => {
  const [showShareButtons, setShowShareButtons] = useState(false);
  const handleShowShareButtons = () =>
    setShowShareButtons((prevState) => !prevState);
  const shareUrl = `https://www.fabfitfun.com/product/${slug}`;

  return (
    <>
      <div className={styles.shareButton}>
        <div className={styles.icon}>
          <AiOutlineShareAlt size={24} onClick={handleShowShareButtons}/>
        </div>
        {showShareButtons && (
          <div className={styles.shareButtonsList}>
            <FacebookShareButton
              url={shareUrl}
              quote={SHARE_TEXT}
              hashtag={'#fabfitfun'}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={SHARE_TEXT}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton
              url={shareUrl}
              title={SHARE_TEXT}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <TelegramShareButton
              url={shareUrl}
              title={SHARE_TEXT}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={SHARE_TEXT}
              hashtags={hashtags}
              via="fabfitfun"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={SHARE_TEXT}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        )}
      </div>
    </>
  );
};

export default ShareButton;
