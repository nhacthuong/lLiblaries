let menu = [
  /* --- REPOSITORY: TỬ VI ĐÔNG PHƯƠNG --- */
  { "id": 1, "parent_id": null, "name": "Tử Vi Đông Phương", "type": "repo", "icon": "fa-dharmachakra", "color": "var(--accent-mint-lighter)" },
  { "id": 11, "parent_id": 1, "name": "Nhập Môn Căn Bản", "type": "folder", "icon": "fa-cubes", "color": "var(--accent-mint-lighter)" },
  { "id": 12, "parent_id": 1, "name": "Thập Tứ Chân Thân (14 Chính Tinh)", "type": "folder", "icon": "fa-spaghetti-monster-flying", "color": "var(--accent-mint-lighter)" },
  { "id": 121, "parent_id": 12, "name": "Văn Khúc Tinh.md", "type": "file", "icon": "fa-file-code", "color": "var(--accent-mint-lighter)" },
  { "id": 13, "parent_id": 1, "name": "Ma Trận Cách Cục", "type": "folder", "icon": "fa-table-cells", "color": "var(--accent-mint-lighter)" },
  { "id": 14, "parent_id": 1, "name": "Hệ Thống Chế Hóa Hung Tinh", "type": "folder", "icon": "fa-code-merge", "color": "var(--accent-mint-lighter)" },

  /* --- REPOSITORY: KINH DỊCH MÃ NGUYÊN BẢN --- */
  { "id": 2, "parent_id": null, "name": "Dịch Mã Nguyên Bản", "type": "repo", "icon": "fa-microchip", "color": "var(--text-purple)" },
  { "id": 21, "parent_id": 2, "name": "Thượng Kinh (30 Quẻ đầu)", "type": "folder", "icon": "fa-folder-open", "color": "var(--text-purple)" },
  { "id": 22, "parent_id": 2, "name": "Hạ Kinh (34 Quẻ sau)", "type": "folder", "icon": "fa-folder-open", "color": "var(--text-purple)" },
  { "id": 23, "parent_id": 2, "name": "Phòng Thí Nghiệm Mai Hoa", "type": "folder", "icon": "fa-eye", "color": "var(--text-purple)" },
  { "id": 24, "parent_id": 2, "name": "Dịch Lý Ứng Dụng (Strategy)", "type": "folder", "icon": "fa-chess", "color": "var(--text-purple)" },

  /* --- REPOSITORY: TẦN SỐ VŨ TRỤ (THẦN SỐ HỌC) --- */
  { "id": 3, "parent_id": null, "name": "Tần Số Vũ Trụ", "type": "repo", "icon": "fa-wave-square", "color": "var(--accent-red)" },
  { "id": 31, "parent_id": 3, "name": "Ma Trận Tần Số Pytago", "type": "folder", "icon": "fa-table-cells", "color": "var(--accent-red)" },
  { "id": 32, "parent_id": 3, "name": "Bản Đồ Nhịp Điệu Đời Người", "type": "folder", "icon": "fa-chart-line", "color": "var(--accent-red)" },
  { "id": 33, "parent_id": 3, "name": "Âm Nhạc Của Những Con Số", "type": "folder", "icon": "fa-music", "color": "var(--accent-red)" },

  /* --- REPOSITORY: CHIÊM TINH HỌC --- */
  { "id": 4, "parent_id": null, "name": "Chiêm Tinh Học (Astrology)", "type": "repo", "icon": "fa-user-astronaut", "color": "var(--text-blue)" },
  { "id": 41, "parent_id": 4, "name": "Cung Đường Hoàng Đạo", "type": "folder", "icon": "fa-compass", "color": "var(--text-blue)" },
  { "id": 42, "parent_id": 4, "name": "Góc Chiếu & Hành Tinh", "type": "folder", "icon": "fa-earth-americas", "color": "var(--text-blue)" },
  { "id": 43, "parent_id": 4, "name": "Thư Viện Tiểu Hành Tinh", "type": "folder", "icon": "fa-location-crosshairs", "color": "var(--text-blue)" },

  /* --- REPOSITORY: TÀNG KINH CÁC (NỘI DUNG SÁNG TẠO) --- */
  { "id": 5, "parent_id": null, "name": "Tàng Kinh Các", "type": "repo", "icon": "fa-scroll", "color": "var(--accent-gold)" },
  { "id": 51, "parent_id": 5, "name": "Điển Tích Thần Phả (Truyện)", "type": "folder", "icon": "fa-book-atlas", "color": "var(--accent-gold)" },
  { "id": 52, "parent_id": 5, "name": "Nhãn Thức Đài (Video AI)", "type": "folder", "icon": "fa-clapperboard", "color": "var(--accent-gold)" },

  /* --- REPOSITORY: PHÁP ĐÌNH THỰC CHỨNG (ISSUES) --- */
  { "id": 6, "parent_id": null, "name": "Pháp Đình Thực Chứng", "type": "repo", "icon": "fa-scale-balanced", "color": "var(--text-orange)" },
  { "id": 61, "parent_id": 6, "name": "Luận Giải Tiền Đường", "type": "folder", "icon": "fa-comments", "color": "var(--text-orange)" },
  { "id": 62, "parent_id": 6, "name": "Báo Cáo Thực Chứng (Logs)", "type": "folder", "icon": "fa-clipboard-check", "color": "var(--text-orange)" }
];

let posts =[
    {
        'id': 1,
        'repo-link': '01_Tu_Vi / Tu-Vi.md',
        'card-content': 'Cập nhật điển tích về sao Tử Vi - Vị vua trong hệ thống chính tinh.',
    },
    {
        'id': 2,
        'repo-link': '01_Tu_Vi / Tu-Vi.md',
        'card-content': 'Cập nhật điển tích về sao Tử Vi - Vị vua trong hệ thống chính tinh.',
        'card-media': '<img src="https://preview.redd.it/2-5-million-indians-served-in-wwii-90-000-died-thousands-v0-1p125mbik5vg1.jpeg?auto=webp&s=ac7840d59008428837047fa00c4054a542d0f03c" />',
    },
    {
        'id': 3,
        'repo-link': '01_Tu_Vi / Tu-Vi.md',
        'card-content': 'Cập nhật điển tích về sao Tử Vi - Vị vua trong hệ thống chính tinh.',
        'card-media': '<iframe src="https://www.youtube-nocookie.com/embed/l8ToeCYczFs" frameborder="0" allowfullscreen></iframe>',
    },
];
