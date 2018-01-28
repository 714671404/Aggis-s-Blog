var register = new Vue({
    el: '#register',
    data () {
        return {
        }
    },
    computed: {

    },
    methods: {
        f_register ()
        {
            var input_username = $('#inputUsername')
            var input_password = $('#inputPassword')
            var input_password2 = $('#inputPassword2')
            var x_p = $('.x_p')
            var x_is = $('.x_is')
            if (!input_username.val()) {
                $('.x_u').text('账号不能为空').css('display', 'block').css('color', 'rgb(180, 50, 50)')
            }
            if (input_password.val() !== input_password2.val()) {
                x_p.text('确认密码必须与密码一致').css('color', 'rgb(240, 0, 0)').css('display', 'block')
            } else {
                x_p.text('OK').css('color', 'rgb(0, 240, 0)').css('display', 'block')
            }
            if (!input_password.val()) {
                x_p.text('密码不能为空').css('display', 'block').css('color', 'rgb(180, 50, 50)')
            }
            if (($('.x_u').text() == '可以使用此用户名') && (x_p.text() == 'OK')) {
                $.post(
                    'registered',
                     $('#register').serialize(), // 传递表单值 下一步是处理数据，并且存入数据库
                    function (data) {
                        if (data.status === 1) {
                            $('#a_r_button').click()
                        }
                    }
                )
            }
        },
        reg_user_value ()
        {
            var x_user = $('#inputUsername')
            var x_x_u = $('.x_u')
            var regular = new RegExp("^[0-9a-zA-Z@\\._]*$")
            $.ajax({
                url: 'api/registered',
                type: 'post',
                data: {
                    name: x_user.val(),
                    _token: window.Laravel.csrcToken
                },
                dataType: 'json',
                success: function (data)
                {
                    if (!data.user) {
                        if (parseInt(x_user.val().length) <= 26) {
                            if (!regular.test(x_user.val())) {
                                x_x_u.text('账号格式不正确').css('color', 'red').css('display', 'block')
                            } else {
                                x_x_u.text('可以使用此用户名').css('color', 'rgb(101, 200, 101)').css('display', 'block')
                            }
                        }
                    } else {
                        x_x_u.text('用户名已存在').css('color', 'rgb(10, 100, 10)').css('display', 'block')
                    }
                }
            })
        }
    }
})
