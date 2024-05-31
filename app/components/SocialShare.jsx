'use client'
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const ShareButtons = ({ shareLink }) => {
  const shareUrl = `https://lwsfinal.vercel.app/categories/${shareLink}`;
  const title = 'Check out this awesome website!';

  return (
    <div>
      
      <div className="share-buttons">
        <div className="share-button">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
        </div>
      </div>
      <style jsx>{`
        .share-buttons {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }
        .share-button {
          display: flex;
          gap: 16px;
        }
        h3 {
          margin-bottom: 8px;
          font-size: 1.2em;
          color: #333;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;
