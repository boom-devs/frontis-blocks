import { __ } from '@wordpress/i18n';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId}) {
    const container = useRef();
    const { 
        blockID,
        HeadingText, 
        HeadingTag,
        HeadingAlignment,
        SubHeadingSwitcher,
        Separator,
        ShowSeparatorSwitcher,
        SubHeadingText,
        SubHeadingTag,
        SeperatorPosition,
        SubHeadingPosition,

    } = attributes;
    

    const blockProps = useBlockProps();

    // Define the CSS as a string
    const css = `
        #${blockID} {
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    `;


    const tl = useRef();
  
    const toggleTimeline = () => {
      tl.current.reversed(!tl.current.reversed());
    };
  
    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.box');
        tl.current = gsap
          .timeline()
          .to(boxes[0], { x: 120, rotation: 360 })
          .to(boxes[1], { x: -120, rotation: -360 }, '<')
          .to(boxes[2], { y: -166 })
          .reverse();
      },
      { scope: container }
    );
  
    
    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId ={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={HeadingAlignment}
                    onChange={(value) => setAttributes({ HeadingAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockID}>
                {/* <div className={`fb-advanced-wrapper ${blockID}`} style={{textAlign: HeadingAlignment}}>

                    {ShowSeparatorSwitcher && SeperatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {SubHeadingSwitcher && SubHeadingPosition === 'top' && (
                        <RichText
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            onChange={(value) => setAttributes({ SubHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    <RichText
                        tagName={HeadingTag}
                        value={HeadingText}
                        onChange={(value) => setAttributes({ HeadingText: value })}
                        placeholder={__('Advanced Heading', 'frontis-blocks')}
                        className= "fb-advanced"
                    />

                    {SubHeadingSwitcher && SubHeadingPosition === 'bottom' && (
                        <RichText
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            onChange={(value) => setAttributes({ SubHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    {ShowSeparatorSwitcher && SeperatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                </div> */}
                <main>
                    <section className="boxes-container" ref={container} id={blockID}>
                        <h2>Use the button to toggle a Timeline</h2>
                        <div>
                            <button onClick={toggleTimeline}>Toggle Timeline</button>
                        </div>
                        <div className="box gradient-blue">Box 1</div>
                        <div className="box gradient-blue">Box 2</div>
                        <div className="box gradient-blue">Box 3</div>
                    </section>
                </main>
            </div>
        </>
    );
}

