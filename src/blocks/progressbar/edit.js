import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef, useState, memo } from '@wordpress/element';
import Inspector from './inspector';
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';


function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    blockStyle,
    progressbarType,
    progressTextPosition,
    progressNumberPosition,
    progressNumber,
    progressTitle,
    progressHeadingTag,

    progressGlobalWraperID,
    progressGlobalWraperClass,

    progressbarDesktopSwitcher,
    progressbarTabletSwitcher,
    progressbarMobileSwitcher,
  } = attributes;

  /**
    * Manages tab button settings and switches to block settings on click
    */
  const panelRef = useRef(null);
  SwitchToBlockSettings(panelRef);



  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runBarAndCounter(panel);
          io.disconnect();           // ekbar chalu korei off
        }
      },
      { threshold: 0.35 }
    );

    io.observe(panel);
    return () => io.disconnect();
  }, [progressNumber, progressTextPosition, progressNumberPosition, progressbarType]);

  const runBarAndCounter = (panel) => {
    const line = panel.querySelector('.fb-progressbar-line');
    const isVertical = progressbarType === 'vertical';

    if (line) {
      if (isVertical) {
        line.style.height = '0%';
        line.style.bottom = '0';
        line.style.top = 'auto';
      } else {
        line.style.width = '0%';
      }

      requestAnimationFrame(() => {
        if (isVertical) {
          line.style.height = `${progressNumber}%`;
          line.style.width = '100%';
        } else {
          line.style.width = `${progressNumber}%`;
          line.style.height = '100%';
        }
      });
    }

    const numEl = panel.querySelector('.fb-progressbar-number');
    if (numEl && progressNumberPosition === 'default') animateCounter(numEl, progressNumber);
  };

  const animateCounter = (el, target) => {
    const dur = 1500;              // ms
    const start = performance.now();

    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(p * target) + '%';
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };




  const blockProps = useBlockProps({
    className: `fb-progressbar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
  });



  return (
    <>
      <Inspector
          attributes={attributes}
          setAttributes={setAttributes}
          clientId={clientId}
        />

      <div {...blockProps}>
        <div className={`fb-parent-wrapper fb-progressbar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID} ref={panelRef}>
          <div className="fb-progressbar-item">
            {progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && (
              <div className="fb-progressbar-content">
                <RichText
                  tagName={progressHeadingTag}
                  className="fb-progressbar-label"
                  value={progressTitle}
                  onChange={(value) => setAttributes({ progressTitle: value })}
                  placeholder={__('Progress', 'frontis-blocks')}
                />
                {progressNumberPosition === 'default' && <span className="fb-progressbar-number">{progressNumber}%</span>}
              </div>
            )}
            {progressbarType === 'vertical' && progressNumberPosition === 'default' && (
              <div className="fb-progressbar-content">
                <span className="fb-progressbar-number">{progressNumber}%</span>
              </div>
            )}
            <div className='fb-progressbar-line-wrapper'>
              <div className="fb-progressbar-line">
                {progressNumberPosition === 'with-progressbar' && <span className="fb-progressbar-number">{progressNumber}%</span>}
              </div>
              {progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && (
                <div className="fb-progressbar-content">
                  <RichText
                    tagName={progressHeadingTag}
                    className="fb-progressbar-label"
                    value={progressTitle}
                    onChange={(value) => setAttributes({ progressTitle: value })}
                    placeholder={__('Progress', 'frontis-blocks')}
                  />
                  {progressNumberPosition === 'default' && <span className="fb-progressbar-number">{progressNumber}%</span>}
                </div>
              )}
            </div>
            {progressbarType === 'vertical' && (
              <div className="fb-progressbar-content">
                <RichText
                  tagName={progressHeadingTag}
                  className="fb-progressbar-label"
                  value={progressTitle}
                  onChange={(value) => setAttributes({ progressTitle: value })}
                  placeholder={__('Progress', 'frontis-blocks')}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{blockStyle}</style>
    </>
  );
}

export default memo(Edit);
