class Common{
    constructor(){
        this.case = document.getElementById('case');
        if  (this.case) {
            this.getFeed();
        }
    }

    getFeed() {
        let container = document.getElementById('case-wrapper');
        const remove_html = text => {
          const element = document.createElement('div');
          element.innerHTML = text;
          return element.textContent;
        }
        $.ajax({
          url: '/ediit/rss_proxy.php',
          data: {
            u: 'ediit',
            mag: container.getAttribute('data-mag'), 
            limit: 10, 
    thumb: 'list',
    nocache: 1,      // ←初回だけ1、動作確認後は消してOK
    ogrefresh: 1     // ←初回だけ1、以後はサーバ側のキャッシュで速くなる
          },   // ←ここだけ変えればOK
          dataType: 'json',
        }).done(function(res){
            let data = res;
            let items = data.items;
            let html = '';
            const minLength = 100;
            for (let i = 0; i < items.length; i++) {
                if (i < 3) {
                let item = items[i];
                let description = remove_html(item.description);
                let thumbnail = null;
                // 文字数カウント
                const charCount = description.length;
                // 特定の文字数以上か判定
                if (charCount >= minLength) {
                  description = description.substring(0, minLength) + '⋯';
                }
                if (item.thumbnail !== null) {
                    thumbnail = item.thumbnail;
                }
                html += `<div class="swiper-slide case relative fade-in"><div class="hover">
                <a href="${item.link}" target="_blank" rel="noopener" class="absolute center-xy sm:center-xy w-full h-full z-10"></a>
                <div class="case-image relative">
                    <img src="${thumbnail}" alt="" />
                </div>
                <div class="case-content">
                    <p class="case-title">${item.title}</p>
                    <div class="case-text">${description}</div>
                </div></div>
            </div>`;
                }
            }
            container.innerHTML = html;
        }).fail(function(xhr){
        //   console.error('fetch failed:', xhr.responseText);
            let data = {
                "title": "【公式】EDIIT Inc.",
                "items": [
                    {
                        "title": "【HRコラム#01】心理学で読み解く職場ハラスメント事例｜“悪意なき加害”はなぜ起こるのか？",
                        "link": "https://note.com/ediit/n/n5425f6e9a0bf",
                        "pubDate": "Thu, 07 Aug 2025 07:18:03 +0900",
                        "description": "<p name=\"893fd10e-f824-4bdf-918d-9986b21e50e7\" id=\"893fd10e-f824-4bdf-918d-9986b21e50e7\">こんにちは！<a href=\"https://ediit.xyz/\" target=\"_blank\" rel=\"nofollow\">EDIIT Inc.</a>の今岡です。<br>現代のハラスメントは「殴る・怒鳴る」といった明確な行為だけではないことをご存じでしょうか。<br><b>“悪意なき加害”から発生する</b>ものが多く、加害者側が自覚していないケースがほとんどで、人事ご担当者様からも、よくご相談を頂きます。<br><br>そこで、今回は、職場のハラスメントの構造を心理学の観点からお話しします。</p><figure data-align=\"center\" name=\"aabb18e8-e3b5-4978-ac2e-9b22a295e5f8\" id=\"aabb18e8-e3b5-4978-ac2e-9b22a295e5f8\"><img src=\"https://assets.st-note.com/img/1752677547-He40RF5QqVpgTSMZcYBv8tKo.png\" width=\"620\" height=\"434\" id=\"image-aabb18e8-e3b5-4978-ac2e-9b22a295e5f8\" alt=\"\"><figcaption></figcaption></figure><br/><a href='https://note.com/ediit/n/n5425f6e9a0bf'>続きをみる</a>",
                        "thumbnail": null
                    },
                    {
                        "title": "【#01 | 半年で売上改善・粗利110％UP】主要取引先との関係性を変えたCOO代行実践記",
                        "link": "https://note.com/ediit/n/nda2e8989e951",
                        "pubDate": "Sat, 02 Aug 2025 08:03:16 +0900",
                        "description": "<p name=\"1565773b-2d81-4029-ba72-877fdbc0ab0f\" id=\"1565773b-2d81-4029-ba72-877fdbc0ab0f\">こんにちは！<a href=\"https://ediit.xyz\" target=\"_blank\" rel=\"nofollow\">EDIIT Inc.</a> CEOの榎本です。</p><p name=\"fa10872d-10b1-4d09-93ce-caed4623c1dc\" id=\"fa10872d-10b1-4d09-93ce-caed4623c1dc\"><b>「取引先と対等な関係性を構築するのが難しい」</b></p><br/><a href='https://note.com/ediit/n/nda2e8989e951'>続きをみる</a>",
                        "thumbnail": null
                    }
                ],
                "fetched_at": "2025-08-10T14:45:24+09:00"
            };
            let items = data.items;
            let html = '';
            const minLength = 100;
            for (let i = 0; i < items.length; i++) {
                if (i < 3) {
                let item = items[i];
                let description = remove_html(item.description);
                let thumbnail = null;
                // 文字数カウント
                const charCount = description.length;
                // 特定の文字数以上か判定
                if (charCount >= minLength) {
                  description = description.substring(0, minLength) + '⋯';
                }
                if (item.thumbnail !== null) {
                    thumbnail = item.thumbnail;
                }
                html += `<div class="swiper-slide case relative fade-in">
                <a href="${item.link}" target="_blank" rel="noopener" class="absolute center-xy sm:center-xy w-full h-full z-10"></a>
                <div class="case-image relative">
                    <img src="${thumbnail}" alt="" />
                </div>
                <div class="case-content">
                    <p class="case-title">${item.title}</p>
                    <div class="case-text">${description}</div>
                </div>
            </div>`;
                }
            }
            container.innerHTML = html;
        });
    }
}

export default Common;