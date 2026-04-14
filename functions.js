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

function addCardMeta(){
    let html='<div class="card-meta">' +
    '<span>★ 1.2 karma</span>' +
    '<button class="star-btn"><i class="fa-solid fa-circle-up"></i>Thích</button>' +
    '<button class="star-btn"><i class="fa-solid fa-circle-down"></i>Kém</button>' +
    '<button class="star-btn"><i class="fa-solid fa-share-nodes"></i>Chia sẻ</button>' +
    '</div>';
    $('.feed-card').append(html);
}
