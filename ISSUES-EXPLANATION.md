# Issues Explanation - Why Things Didn't Work

## 1. Hero Text Animation Didn't Work ❌

**Root Cause:**
The text elements have **nested HTML structure**:
```html
<div id="comp-meep2lny3">
  <h3 class="font_3 wixui-rich-text__text">
    <span class="wixui-rich-text__text">award-winning garden design</span>
  </h3>
</div>
```

**Why it failed:**
1. CSS was targeting only the parent `div`, but the actual visible text is in nested `<h3>` and `<span>` elements
2. Wix's inline styles on nested elements were overriding our animation styles
3. The `useEffect` runs after `dangerouslySetInnerHTML`, but the nested elements might not be fully rendered yet
4. Animation styles applied to parent don't cascade to nested elements with their own styles

**Fix Applied:**
- ✅ Now targeting ALL nested text elements (`h3`, `h2`, `span`, `.wixui-rich-text__text`)
- ✅ Applying inline styles directly to each nested element
- ✅ Multiple processing attempts (immediate, 100ms, 500ms) to catch DOM updates
- ✅ CSS updated to target nested elements with `!important`

## 2. Button Text Didn't Change to "Begin your journey" ❌

**Root Cause:**
The button text is in a **deeply nested structure**:
```html
<div id="comp-meep2lo81">
  <a aria-label="Begin Your Bespoke Garden Journey">
    <span class="StylableButton2545352419__container">
      <span class="StylableButton2545352419__label wixui-button__label">
        Begin Your Bespoke Garden Journey
      </span>
    </span>
  </a>
</div>
```

**Why it failed:**
1. String replace in HTML processing worked, BUT the text is also in the `aria-label` attribute
2. React's `dangerouslySetInnerHTML` might process the HTML differently
3. The nested structure means the text might be getting re-rendered by Wix scripts
4. Only doing string replace wasn't enough - needed DOM manipulation too

**Fix Applied:**
- ✅ String replace in HTML (handles both text content and aria-label)
- ✅ DOM manipulation after injection to update `.wixui-button__label` element
- ✅ Also updates `aria-label` attribute in DOM

## 3. Video Didn't Change to file.mp4 with Autoplay ❌

**Root Cause:**
The video is wrapped in a **`<wix-video>` custom element**:
```html
<wix-video id="videoContainer_comp-kbgaghri" data-video-info='{"url":"video/.../file.mp4"}'>
  <video id="comp-kbgaghri_video"></video>  <!-- NO src attribute! -->
</wix-video>
```

**Why it failed:**
1. The `<video>` element has **NO `src` attribute** - it's completely empty
2. The video source is controlled by the `wix-video` custom element's `data-video-info` JSON
3. The JSON contains URLs like `"url":"video/3e2d76_.../720p/mp4/file.mp4"` in URL-encoded format (`&quot;`)
4. The `wix-video` custom element JavaScript was overriding our video source after our code ran
5. The video element might not exist when `useEffect` runs (React hydration timing)

**Fix Applied:**
- ✅ Replace video URLs in `data-video-info` JSON (handles URL encoding)
- ✅ Remove `data-video-info` attribute to disable wix-video behavior
- ✅ Set video source directly on `<video>` element AND add `<source>` element
- ✅ Hide poster image that might be covering the video
- ✅ Multiple event listeners and timeouts to ensure video loads and plays
- ✅ Better error handling for autoplay restrictions

## Summary of Fixes

All three issues had the same underlying problem: **Wix's custom elements and nested structures** were interfering with our changes. The fixes now:

1. **Target nested elements directly** (not just parents)
2. **Do both HTML string replacement AND DOM manipulation** (double approach)
3. **Disable Wix custom element behavior** (remove data attributes)
4. **Use multiple timing attempts** (immediate, delayed, with observers)
5. **Apply styles with maximum specificity** (inline styles + !important CSS)

