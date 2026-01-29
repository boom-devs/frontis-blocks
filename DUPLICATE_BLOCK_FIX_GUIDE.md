# Fix Duplicate Block Style Conflict — Testimonial Block

## সমস্যা কী ছিল?

যখন একটি Testimonial block duplicate করা হয়, দুইটি block-এর `blockID` একই থাকে। ফলে:
- এক block-এর style change করলে অন্যটিতেও apply হয়ে যায়
- CSS conflict হয় কারণ একই selector দুইটি block-এ

---

## আগের Code (`edit.js`):

```javascript
useEffect(() => {
    if (clientId && typeof clientId === 'string' && !blockID) {
        setAttributes({
            blockID: "fb-testimonial-" + clientId.slice(0, 8),
        });
    }
}, [clientId, blockID]);
```

**সমস্যা:** এই code শুধু নতুন block-এ blockID সেট করে। Duplicate block-এ আগের blockID থাকায় নতুন ID generate হয় না।

---

## নতুন Code

### Step 1: Custom Hook তৈরি করা হয়েছে

**File:** `src/utils/useBlockIdGenerator.js`

```javascript
import { useEffect, useRef } from '@wordpress/element';

const useBlockIdGenerator = ({
    clientId,
    blockID,
    blockPrefix,
    isSelected,
    attributes,
    setAttributes,
    excludeKeys = [],
}) => {
    const prevAttributesRef = useRef(attributes);

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            const expectedIdPrefix = `${blockPrefix}-${clientId.slice(0, 8)}`;
            
            // Case 1: Brand new block with no ID
            if (!blockID) {
                setAttributes({ blockID: expectedIdPrefix });
                prevAttributesRef.current = attributes;
                return;
            }

            // Case 2: Duplicated block - blockID doesn't match current clientId
            const isDuplicate = blockID !== expectedIdPrefix;
            
            if (isDuplicate && isSelected) {
                const prevAttrs = prevAttributesRef.current;
                const defaultExcludeKeys = ['blockID', 'blockStyle'];
                const allExcludeKeys = [...defaultExcludeKeys, ...excludeKeys];
                
                const hasStyleChange = Object.keys(attributes).some(key => {
                    if (allExcludeKeys.includes(key)) return false;
                    return JSON.stringify(attributes[key]) !== JSON.stringify(prevAttrs[key]);
                });

                if (hasStyleChange) {
                    setAttributes({ blockID: expectedIdPrefix });
                }
            }
        }
        prevAttributesRef.current = attributes;
    }, [clientId, blockID, blockPrefix, isSelected, attributes, setAttributes, excludeKeys]);
};

export default useBlockIdGenerator;
```

### Step 2: Block-এ Use করা হয়েছে

**File:** `src/blocks/testimonial/edit.js`

```javascript
// Import
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';

// Component এর ভিতরে - শুধু এক লাইন!
useBlockIdGenerator({
    clientId,
    blockID,
    blockPrefix: 'fb-testimonial',
    isSelected,
    attributes,
    setAttributes,
});
```

---

## কিভাবে কাজ করে?

```
১. নতুন ব্লক ইনসার্ট:
   blockID নেই → নতুন আইডি জেনারেট ✅

২. ব্লক ডুপ্লিকেট:
   clientId নতুন, কিন্তু blockID পুরনো
   isDuplicate = true
   কিন্তু কোনো style change নেই
   → কোনো আইডি চেঞ্জ নেই (ফাস্ট!)

৩. ডুপ্লিকেট ব্লক সিলেক্ট:
   শুধু isSelected: true হলো
   কোনো style change নেই
   → কোনো আইডি চেঞ্জ নেই (ফাস্ট!)

৪. ডুপ্লিকেট ব্লকের স্টাইল চেঞ্জ:
   isDuplicate: true ✅
   isSelected: true ✅
   hasStyleChange: true ✅
   → নতুন আইডি জেনারেট ✅
```

---

## অন্য Block-এ Apply করা

### যেকোনো block-এ এই fix করতে শুধু:

**1. Import যোগ করুন:**

```javascript
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
```

**2. Hook call করুন:**

```javascript
useBlockIdGenerator({
    clientId,
    blockID,
    blockPrefix: 'fb-YOUR-BLOCK-NAME',  // এখানে আপনার block prefix দিন
    isSelected,
    attributes,
    setAttributes,
});
```

### Block Prefix Examples:

| Block | Prefix |
|-------|--------|
| Testimonial | `fb-testimonial` |
| Icon Box | `fb-icon-box` |
| Info Box | `fb-info-box` |
| Advanced Heading | `fb-advanced-heading` |
| Team Member | `fb-team-member` |
