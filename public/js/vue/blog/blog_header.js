var a_position = new Vue({
    el: '#a_position',
    data: {
        gn_nav_list: [
            {href: '/', W_ficon: 'E', S_text: '首页'},
            {href: 'javascript:void(0)', W_ficon: 'F', S_text: '发现'},
        ]
    }
});
var login = new Vue({
    el: '#login',
    data () {
        return {

        }
    },
    methods: {
        a_login ()
        {
            var input_username = $('#input-username')
            var input_password = $('#input-password')
            var x_u = $('.x_u')
            var x_p = $('.x_p')
            if (!input_username.val()) {
                x_u.text('账号不能为空').css('display', 'block').css('color', 'rgb(180, 50, 50)')
            }
            if (!input_password.val()) {
                x_p.text('密码不能为空').css('display', 'block').css('color', 'rgb(180, 50, 50)')
            }
            if ((x_u.text() != '账号不能为空') && (x_u.text() != '不存在的账号') && (x_p.text() != '密码不能为空')) {
                $.post(
                    'login',
                    $('#z_login').serialize(),
                    function (data)
                    {
                        if (data === '1') {
                            x_p.text('登录成功').css('display', 'block').css('color', 'rgb(101, 200, 101)')
                            $('#x_close').click()
                        } else if (data === '0') {
                            x_p.text('账号或密码错误').css("display", 'block').css('color', 'rgb(230, 50, 10)')
                        }
                    }
                )
            }
        },
        a_clert ()
        {
            if ($('#input-password').val()) {
                $('.x_p').text('').css('display', 'none')
            }
        },
        login_user ()
        {
            var x_user = $('#input-username')
            var x_u = $('.x_u')
            $.ajax({
                url: 'api/login',
                type: 'post',
                data: {
                    name: x_user.val(),
                    _token: window.Laravel.csrcToken
                },
                dataType: 'json',
                success: function (data)
                {
                    if (data.user) {
                        x_u.text('').css('display', 'none')
                    } else {
                        x_u.text('不存在的账号').css('display', 'block').css('color', 'rgb(230, 20, 50)')
                    }
                }
            })
        }
    }
})