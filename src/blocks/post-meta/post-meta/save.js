import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
    return null;
}

// import { useBlockProps } from '@wordpress/block-editor';
//
// export default function save({ attributes }) {
//     const { blockID, postMetaterms, singleItemColorStyle } = attributes;
//     const blockProps = useBlockProps.save({
//         className: `fb-post-meta-main-wrapper ${blockID}`,
//     });
//
//     return (
//         <div {...blockProps}>
//             <ul className="fb-post-meta-list">
//                 {postMetaterms.map((item) => (
//                     <li
//                         key={item.id}
//                         className={`fb-post-meta-item single-item-${item.id}`}
//                         style={{ color: singleItemColorStyle || undefined }}
//                     >
//                         {item.metaLabel || item.metaType}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
