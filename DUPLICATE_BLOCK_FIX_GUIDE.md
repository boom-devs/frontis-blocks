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

## নতুন Code (`edit.js`):

```javascript
// Track previous attributes to detect style changes
const prevAttributesRef = useRef(attributes);

useEffect(() => {
    if (clientId && typeof clientId === 'string') {
        const expectedIdPrefix = "fb-testimonial-" + clientId.slice(0, 8);
        
        // Case 1: Brand new block with no ID
        if (!blockID) {
            setAttributes({
                blockID: expectedIdPrefix,
            });
            prevAttributesRef.current = attributes;
            return;
        }

        // Case 2: Duplicated block - blockID doesn't match current clientId
        // This means the block was copied from another block
        const isDuplicate = blockID !== expectedIdPrefix;
        
        if (isDuplicate && isSelected) {
            const prevAttrs = prevAttributesRef.current;
            
            // Check if any attribute (except meta attributes) changed
            const hasStyleChange = Object.keys(attributes).some(key => {
                if (['blockID', 'blockStyle'].includes(key)) {
                    return false;
                }
                return JSON.stringify(attributes[key]) !== JSON.stringify(prevAttrs[key]);
            });

            if (hasStyleChange) {
                setAttributes({
                    blockID: expectedIdPrefix,
                });
            }
        }
    }

    // Update ref for next comparison
    prevAttributesRef.current = attributes;
}, [clientId, blockID, isSelected, attributes]);
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

৫. পেজ রিলোড:
   সব blockID তাদের নিজস্ব clientId এর সাথে match করে
   isDuplicate = false
   → কোনো কাজ নেই (ফাস্ট!)
```

---

## অন্য Block-এ Apply করা

### যেকোনো block-এ এই fix করতে:

1. `edit.js` এ `useRef` import করুন (যদি না থাকে)
2. `prevAttributesRef` যোগ করুন
3. আগের `useEffect` রিপ্লেস করুন নতুনটা দিয়ে
4. Block prefix চেঞ্জ করুন:

| Block | Prefix |
|-------|--------|
| Testimonial | `fb-testimonial-` |
| Icon Box | `fb-icon-box-` |
| Info Box | `fb-info-box-` |
| Advanced Heading | `fb-advanced-heading-` |
