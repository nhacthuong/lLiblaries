let menu = [
    { "id": 1, "parent_id": null, "name": "Tử Vi Chánh Quy", "type": "folder", "icon": "fa-folder-open", "color": "#7ee787" },
    { "id": 2, "parent_id": null, "name": "Kinh Dịch Huyền Vi", "type": "folder", "icon": "fa-book-mystic", "color": "#539bf5" },
    { "id": 3, "parent_id": null, "name": "Tàng Kinh Các", "type": "folder", "icon": "fa-palanquin", "color": "#7ee787" },
    { "id": 4, "parent_id": null, "name": "Hồ Sơ Thực Chứng", "type": "folder", "icon": "fa-book-bible", "color": "#768390" },
    { "id": 5, "parent_id": null, "name": "Công Cụ & Tài Liệu", "type": "folder", "icon": "fa-toolbox", "color": "#adbac7" },
    
    // Nút chức năng (Button) với hiệu ứng nổi bật
    { "id": 10, "parent_id": 1, "name": "Gieo quẻ ngay", "type": "button", "icon": "fa-plus", "color": "#7ee787" },
    
    // Các folder con
    { "id": 11, "parent_id": 1, "name": "Nhập Môn Căn Bản", "type": "folder", "icon": "fa-book-open", "color": "#ff7b72" },
    { "id": 12, "parent_id": 1, "name": "Thập Tứ Chính Tinh", "type": "folder", "icon": "fa-star-shooting", "color": "#7ee787" },
    
    // Các bài viết (Post/File) - Phân loại theo đuôi file
    { "id": 121, "parent_id": 12, "name": "Văn Khúc Tinh.md", "type": "post", "icon": "fa-file-lines", "color": "#adbac7" },
    { "id": 122, "parent_id": 12, "name": "Tử Vi Tinh.md", "type": "post", "icon": "fa-file-lines", "color": "#adbac7" },
    { "id": 123, "parent_id": 12, "name": "Tham Lang Tinh.md", "type": "post", "icon": "fa-file-lines", "color": "#adbac7" },
    
    { "id": 51, "parent_id": 5, "name": "Hướng Dẫn Đóng Góp.md", "type": "post", "icon": "fa-file-code", "color": "#adbac7" },
    { "id": 52, "parent_id": 5, "name": "Bản Đồ Liên Kết Sao.pdf", "type": "post", "icon": "fa-file-pdf", "color": "#ff7b72" } // Màu đỏ cho PDF giống hình mẫu
];