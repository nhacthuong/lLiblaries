function openSearch() {
    const m = document.getElementById('searchModal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    if(m.style.display === 'flex') document.getElementById('modalInput').focus();
}

function openPopup(title=null, content=null) {
    const m = document.getElementById('infoPopup');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    if(title !== null)
        $('#infoPopup h1').text(title);
    if(content !== null)
        $('#infoPopup .popup-content').html(content);
}

function openMenuLeft() {
    const m = document.getElementById('menuLeft');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

function buildTree(data, parentId = null) {
    let html = '';
    const children = data.filter(item => item.parent_id === parentId);

    children.forEach(item => {
        const hasChildren = data.some(child => child.parent_id === item.id);
        
        // Phân loại class theo Type
        let itemClass = 'nav-item';
        let icon = '';
        let arrow = '';

        switch (item.type) {
            case 'folder':
                itemClass += ' item-folder expanded';
                arrow = hasChildren ? '<i class="fa-solid fa-chevron-down arrow-icon"></i> ' : '';
                break;
            case 'button':
                itemClass += ' item-button';
                break;
            case 'post':
                itemClass += ' item-post';
                break;
        }

        html += `
            <div class="${itemClass}" data-type="${item.type}" style="color:${item.color}" data-id="${item.id}">
                ${(arrow===""?`<i class="fa-solid ${item.icon}"></i>`:arrow)}<span>${item.name}</span>
            </div>`;

        if (hasChildren) {
            html += `<div class="nav-sub" id="sub-${item.id}" style="display: block;">`;
            html += buildTree(data, item.id);
            html += `</div>`;
        }
    });

    return html;
}

function addPosts(posts) {
    if (!posts || posts.length === 0) return;

    // Chuyển mảng dữ liệu thành mảng các chuỗi HTML
    const htmlBuffer = posts.map(p => {
        // Xử lý phần media nếu có
        const mediaHtml = p["card-media"] 
            ? `<div class="card-media">${p["card-media"]}</div>` 
            : "";

        return `
            <div class="feed-card" post_id="${p.id}">
                <div class="card-top">
                    <span class="repo-link">${p["repo-link"]}</span>
                    <button class="star-btn">★ Lưu</button>
                </div>
                ${mediaHtml}
                <p class="card-content">${p["card-content"]}</p>
                <div class="card-meta"><span>★ 1.2 karma</span></div>
                <div class="card-meta">
                    <button class="star-btn"><i class="fa-solid fa-heart"></i> <span>Thích</span></button>
                    <button class="star-btn"><i class="fa-solid fa-share-nodes"></i> <span>Chia sẻ</span></button>
                    <button class="star-btn"><i class="fa-solid fa-x"></i> <span>Bỏ qua</span></button>
                </div>
            </div>`;
    });

    // Append một lần duy nhất vào container
    $('.feed-section').append(htmlBuffer.join(''));
}
function openSearch() {
    const m = document.getElementById('searchModal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    if(m.style.display === 'flex') document.getElementById('modalInput').focus();
}

function openPopup(title=null, content=null) {
    const m = document.getElementById('infoPopup');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    if(title !== null)
        $('#infoPopup h1').text(title);
    if(content !== null)
        $('#infoPopup .popup-content').html(content);
}

function openMenuLeft() {
    const m = document.getElementById('menuLeft');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

function buildTree(data, parentId = null) {
    let html = '';
    const children = data.filter(item => item.parent_id === parentId);

    children.forEach(item => {
        const hasChildren = data.some(child => child.parent_id === item.id);
        
        // Phân loại class theo Type
        let itemClass = 'nav-item';
        let icon = '';
        let arrow = '';

        switch (item.type) {
            case 'folder':
                itemClass += ' item-folder expanded';
                arrow = hasChildren ? '<i class="fa-solid fa-chevron-down arrow-icon"></i> ' : '';
                break;
            case 'button':
                itemClass += ' item-button';
                break;
            case 'post':
                itemClass += ' item-post';
                break;
        }

        html += `
            <div class="${itemClass}" data-type="${item.type}" style="color:${item.color}" data-id="${item.id}">
                ${(arrow===""?`<i class="fa-solid ${item.icon}"></i>`:arrow)}<span>${item.name}</span>
            </div>`;

        if (hasChildren) {
            html += `<div class="nav-sub" id="sub-${item.id}" style="display: block;">`;
            html += buildTree(data, item.id);
            html += `</div>`;
        }
    });

    return html;
}

function addPosts(posts) {
    if (!posts || posts.length === 0) return;

    // Chuyển mảng dữ liệu thành mảng các chuỗi HTML
    const htmlBuffer = posts.map(p => {
        // Xử lý phần media nếu có
        const mediaHtml = p["card-media"] 
            ? `<div class="card-media">${p["card-media"]}</div>` 
            : "";

        return `
            <div class="feed-card" post_id="${p.id}">
                <div class="card-top">
                    <span class="repo-link">${p["repo-link"]}</span>
                    <button class="star-btn">★ Lưu</button>
                </div>
                ${mediaHtml}
                <p class="card-content">${p["card-content"]}</p>
                <div class="card-meta">
                    <span>★ 1.2 karma</span>
                    <button class="star-btn"><i class="fa-solid fa-circle-up"></i> Thích</button>
                    <button class="star-btn"><i class="fa-solid fa-circle-down"></i> Kém</button>
                    <button class="star-btn"><i class="fa-solid fa-share-nodes"></i> Chia sẻ</button>
                </div>
            </div>`;
    });

    // Append một lần duy nhất vào container
    $('.feed-section').append(htmlBuffer.join(''));
}
