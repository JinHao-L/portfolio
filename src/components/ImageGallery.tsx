import React, { useRef, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Lightbox from 'yet-another-react-lightbox';
import {
  Thumbnails,
  Captions,
  Counter,
  Fullscreen,
  Zoom,
} from 'yet-another-react-lightbox/plugins';

import type { ImageType } from '~/constants/images';

import type { CaptionsRef, ThumbnailsRef } from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface ImageGalleryProps {
  images: ImageType[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const thumbnailsRef = useRef<ThumbnailsRef>(null);
  const captionsRef = useRef<CaptionsRef>(null);

  const canCycle = images.length > 1;

  return (
    <div className="self-center">
      <Lightbox
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
          thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, .9)' },
          thumbnail: { backgroundColor: 'transparent' },
        }}
        plugins={[Captions, Counter, Fullscreen, Thumbnails, Zoom]}
        open={isLightBoxOpen}
        close={() => setIsLightBoxOpen(false)}
        index={currentImg}
        slides={images.map((image) => ({
          type: 'image',
          src: image.src,
          alt: image.caption,
          caption: image.caption,
          description: image.caption,
        }))}
        captions={{ ref: captionsRef }}
        carousel={{
          finite: false,
          imageFit: 'contain',
        }}
        controller={{
          closeOnPullUp: true,
          closeOnBackdropClick: true,
        }}
        thumbnails={{
          ref: thumbnailsRef,
          vignette: true,
          border: 0,
          borderRadius: 0,
          showToggle: true,
        }}
        on={{
          view: ({ index }) => setCurrentImg(index),
          entering: () => {
            thumbnailsRef.current?.hide?.();
          },
        }}
      />
      <div className={`relative flex justify-center`}>
        <button
          style={{ display: canCycle ? 'grid' : 'none' }}
          onClick={() => setCurrentImg((prev) => (prev - 1 + images.length) % images.length)}
          className={'bg-white rounded-full absolute left-0 top-1/2 mx-3'}
        >
          {<MdNavigateBefore size={25} className="text-blue-900" />}
        </button>
        <button onClick={() => setIsLightBoxOpen(true)}>
          <img
            src={images[currentImg].src}
            alt={images[currentImg].caption}
            className={`${className} w-full object-contain`}
            style={{ maxHeight: '50vh' }}
          />
        </button>
        <button
          style={{ display: canCycle ? 'grid' : 'none' }}
          onClick={() => setCurrentImg((prev) => (prev + 1) % images.length)}
          className={' bg-white rounded-full absolute right-0 top-1/2 mx-3'}
        >
          {<MdNavigateNext size={25} className="text-blue-900" />}
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
