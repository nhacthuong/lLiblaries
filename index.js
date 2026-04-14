$(document).ready(function() {
    $('.nav-tree').html(buildTree(menu));
    addCardMeta();

    // Xử lý Expand/Unexpand cho Folder
    $(document).on('click', '.item-folder', function(e) {
        e.stopPropagation();
        const $this = $(this);
        const $sub = $this.next('.nav-sub');
        const $arrow = $this.find('.arrow-icon');

        $sub.stop().slideToggle(200);
        $this.toggleClass('expanded collapsed');
        
        // Xoay mũi tên
        const isExpanded = $this.hasClass('expanded');
        $arrow.css('transform', isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)');
    });

    // Xử lý Click cho Button
    $(document).on('click', '.item-button', function(e) {
        e.stopPropagation();
        alert("Kích hoạt chức năng: " + $(this).text().trim());
    });

    // Xử lý Click cho Post
    $(document).on('click', '.item-post', function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        console.log("Mở nội dung bài viết ID:", $(this).data('id'));
    });
});