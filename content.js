// Product Edit Page Extension for BOOTH - Content Script (Auto Apply)

(function() {
  'use strict';

  // 固定設定値
  const SETTINGS = {
    width: 100,       // %
    minHeight: 200,   // px
    maxWidth: '720px' // 実際の表示幅
  };

  function enhanceEditor() {
    // 幅の計算式
    const calculatedWidth = `calc(${SETTINGS.width}% / 0.875)`;

    // 見出し入力欄の拡張
    const inputs = document.querySelectorAll('.charcoal-text-field-input, input[type="text"]');
    inputs.forEach(input => {
      // 既に適用済みならスキップ（重複適用防止）
      if (input.dataset.enhanced === 'true') return;

      input.style.cssText += `
        width: ${calculatedWidth} !important;
        max-width: ${SETTINGS.maxWidth} !important;
      `;
      input.dataset.enhanced = 'true';
    });

    // テキストエリアの拡張（自動伸長対応）
    const textareas = document.querySelectorAll('.charcoal-text-area-textarea, textarea');
    textareas.forEach(textarea => {
      if (textarea.dataset.enhanced === 'true') return;

      // CSS field-sizing を適用
      textarea.style.cssText += `
        width: ${calculatedWidth} !important;
        max-width: ${SETTINGS.maxWidth} !important;
        min-height: ${SETTINGS.minHeight}px !important;
        field-sizing: content !important;
        height: auto !important;
        resize: none !important;
        
        /* フォント調整 */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
      `;

      // 親コンテナの制限を解除
      const container = textarea.closest('.charcoal-text-area-container');
      if (container) {
        container.style.cssText += `
          height: fit-content !important;
          min-height: auto !important;
        `;
      }

      textarea.dataset.enhanced = 'true';
    });
  }

  // 監視と実行（DOMの変化を検知して適用）
  const observer = new MutationObserver((mutations) => {
    let shouldEnhance = false;
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length > 0) shouldEnhance = true;
    });
    if (shouldEnhance) enhanceEditor();
  });

  observer.observe(document.body, { childList: true, subtree: true });
  
  // 初期実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceEditor);
  } else {
    enhanceEditor();
  }
})();