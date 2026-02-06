# UI 구현 및 정보구조(AI) 명세서

본 문서는 ...

## 1. 프로젝트 디렉토리 구조(Directory Tree)


```
프로젝트명 : SWAROVSKI(리뉴얼)
├─ 01_sub-bre.html
├─ 01_sub-ear.html
├─ 01_sub-gift.html
├─ 01_sub-neck.html
├─ 01_sub-new.html
├─ 01_sub-ring.html
├─ 02_sub.html
├─ 03_sub.html
├─ 04_sub.html
├─ css
│  ├─ bottom.css
│  ├─ index.css
│  ├─ menu.css
│  ├─ reset.css
│  ├─ reset2.css
│  ├─ style.css
│  ├─ sub1.css
│  ├─ sub2.css
│  ├─ sub3.css
│  ├─ sub4.css
│  └─ top.css
├─ images
│  ├─ banner_1.jpg
│  ├─ banner_2.png
│  ├─ banner_3.png
│  ├─ banner_4.png
│  ├─ banner_bre.jpg
│  ├─ banner_ear.jpg
│  ├─ banner_gift.jpg
│  ├─ banner_neck.jpg
│  ├─ banner_new.jpg
│  ├─ bre_1.png
│  ├─ bre_2.png
│  ├─ bre_3.png
│  ├─ bre_4.png
│  ├─ bytesize_bag.png
│  ├─ cart.png
│  ├─ check.png
│  ├─ close.png
│  ├─ coupon.png
│  ├─ dot_b.png
│  ├─ dot_w.png
│  ├─ ear_1.png
│  ├─ ear_2.png
│  ├─ ear_3.png
│  ├─ ear_4.png
│  ├─ ep_arrow-down.png
│  ├─ ep_arrow-left.png
│  ├─ ep_arrow-right.png
│  ├─ ep_arrow-up.png
│  ├─ ep_filter.png
│  ├─ facebook.png
│  ├─ favicon.png
│  ├─ gift_1.jpg
│  ├─ gift_2.jpg
│  ├─ gift_3.png
│  ├─ gift_4.jpg
│  ├─ heart.png
│  ├─ instagram.png
│  ├─ item1_1.jpg
│  ├─ item1_2.jpg
│  ├─ item1_3.png
│  ├─ item1_4.jpg
│  ├─ item1_5.jpg
│  ├─ item1_6.jpg
│  ├─ item_1.png
│  ├─ item_10.png
│  ├─ item_11.png
│  ├─ item_12.png
│  ├─ item_13.png
│  ├─ item_14.png
│  ├─ item_15.png
│  ├─ item_16.png
│  ├─ item_17.png
│  ├─ item_2.png
│  ├─ item_3.png
│  ├─ item_4.png
│  ├─ item_5.png
│  ├─ item_6.png
│  ├─ item_7.png
│  ├─ item_8.png
│  ├─ item_9.png
│  ├─ logo_b.png
│  ├─ logo_w.png
│  ├─ material-symbols-light_menu.png
│  ├─ material-symbols-light_search.png
│  ├─ mem_img.jpg
│  ├─ my.png
│  ├─ neck_1.png
│  ├─ neck_2.png
│  ├─ neck_3.png
│  ├─ neck_4.png
│  ├─ news_1.png
│  ├─ news_2.png
│  ├─ news_3.png
│  ├─ new_2.jpg
│  ├─ new_4.jpg
│  ├─ prm.png
│  ├─ prm_1.jpg
│  ├─ prm_2.jpg
│  ├─ prm_banner1.jpg
│  ├─ prm_banner2.jpg
│  ├─ pro1_1.png
│  ├─ pro1_2.png
│  ├─ pro1_3.png
│  ├─ pro1_4.png
│  ├─ pro1_5.png
│  ├─ pro1_6.png
│  ├─ pro1_7.png
│  ├─ pro1_8.png
│  ├─ pro_banner.jpg
│  ├─ ring_1.png
│  ├─ ring_2.png
│  ├─ ring_3.png
│  ├─ ring_4.png
│  ├─ silde_1.png
│  ├─ silde_2.png
│  ├─ silde_3.png
│  ├─ tiktok.png
│  ├─ twitter.png
│  ├─ uesr.png
│  └─ youtube.png
├─ index.html
└─ js
   ├─ index.js
   ├─ jquery-1.8.3.min.js
   ├─ jquery-3.1.1.min.js
   ├─ jquery-4.0.0.min.js
   ├─ menu.js
   ├─ scrollbar.js
   ├─ sub4.js
   └─ sub_filter.js

```

## 2. 정보 구조(AI) 및 기능 매핑
| 파일/폴더명 | 정보 구조상 역할 | 주요 구현 기능 |

## 3. 구조 설계 원칙
* 자원 분리 : ~~HTML~~
   - 1234<br>abcd
   - 1234123
- **직관적 위계* :
---
[네이버](https://www.naver.com)