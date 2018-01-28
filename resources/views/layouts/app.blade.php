<!DOCTYPE html>
<html>
<head>
    <meta lang="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>AGGIS 'S MEMOIR</title>
    <link href="images/ico/favico.ico" rel="icon">
    <link href="css/app.css" rel="stylesheet">
    <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="css/public/main.css" rel="stylesheet">

    <script src="js/app.js" type="text/javascript"></script>
    <script src="js/public/top.js" type="text/javascript"></script>
    <script>
        window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token()])?>
    </script>
</head>

<body>
    <div class="a-all">
        {{--头部文件--}}
        @include('inc.header')

        {{--博客内容--}}
        @yield('content')

        {{--尾部文件--}}
        @include('inc.footer')
    </div>
    <script src="js/vue/blog/blog_header.js" type="text/javascript"></script>
    @yield('script')
</body>
</html>