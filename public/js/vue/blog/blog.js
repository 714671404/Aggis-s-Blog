new Vue({
    el: '#gn_search_v2',
    data: {
        seen: true
    },
    methods: {
        gn_v2: function ()
        {
            this.seen = this.seen ? false : true;
            if (!this.seen) $('.gn_search_v2').css('border', '1px solid #fa7d3c');
        },
        gn_v3: function ()
        {
            this.seen = true;
            $('.gn_search_v2').css('border', 'none');
            $('.gn_search_v2>input').val('');
        }
    }
});
var a_navigation = new Vue({
    el: '#a_navigation',
    data: {
        a_navigation: [
            {name: '热门'},
            {name: '精彩话题'},
            {name: '美女图片'},
            {name: '学习专区'},
            {name: '码努讨论区'},
        ]
    }
});
var a_go = new Vue({
    el: '#a_go',
    data: {
        a_go: [
            {href: '', a: '7', name: '提问'},
            {href: '', a: 's', name: '回答'},
            {href: '', a: 'S', name: '写文章'},
            {href: '', a: 'A', name: '写想法'}
        ]
    }
});
new Vue({
    el: '#a_continer',
    data: {
        a_title: [
            {
                a: '随机来源',
                b: 'images/avatar/aggis.jpg',
                c: 'Aggis',
                d: '点点滴滴，从零开始',
                e: '无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一',
                f: '90000',
                g: '2018-1-15 03:31:22',
                h: '￥9.99',
                i: '123456'

            },
            {
                a: '随机来源',
                b: 'images/avatar/aggis.jpg',
                c: 'Aggis',
                d: '点点滴滴，从零开始',
                e: '无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一',
                f: '90000',
                g: '2018-1-15 03:31:22',
                h: '￥9.99',
                i: '123456'

            },
            {
                a: '随机来源',
                b: 'images/avatar/aggis.jpg',
                c: 'Aggis',
                d: '点点滴滴，从零开始',
                e: '无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研究中国互联网~永久招人无论什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一些专业的分析，寻找有研究精神的小伙伴，一起研什么网站，娱乐圈的流量永远是最大的希望能在知乎看到一',
                f: '90000',
                g: '2018-1-15 03:31:22',
                h: '￥9.99',
                i: '123456'

            }
        ]
    }
});
new Vue({
    el: '#a_sidebar',
    data: {
        as: [
            {href: '', c_lass: 'fa-book b_g', name: '图书', i: 'c_0'},
            {href: '', c_lass: 'fa-folder-open b_y', name: '相册', i: 'c_1'},
            {href: '', c_lass: ' fa-heart b_b', name: '专栏', i: 'c_2'},
            {href: '', c_lass: ' fa-folder-open b_r', name: '临时', i: 'c_3'},
            {href: '', c_lass: ' fa-book b_r', name: '临时', i: 'c_4'}
        ],
        bs: [
            {href: '', a: 'fa fa-star-o', name: '我的收藏'},
            {href: '', a: 'fa fa-question-circle', name: '我关注的问题'},
            {href: '', a: 'fa fa-user-o', name: '我的邀请'},
            {href: '', a: 'fa fa-h-square', name: '社区服务中心'},
            {href: '', a: 'fa fa-copyright', name: '版权服务中心'},
            {href: '', a: 'fa fa-list', name: '公共编辑动态'}
        ]

    },
    methods: {
        a_color: function(c, i)
        {
            var a_g = $('#' + i);
            switch (a_g.text()) {
                case '图书': a_g[0].className = 'b_g'; break;
                case '相册': a_g[0].className = 'b_y'; break;
                case '专栏': a_g[0].className = 'b_b'; break;
                case '临时': a_g[0].className = 'b_r'; break;
            }
        },
        b_color: function(c, i)
        {
            var a_g = $('#' + i);
            a_g[0].className = 'a_g';
        }
    }
});